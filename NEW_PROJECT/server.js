// THIS MUST BE THE VERY FIRST LINE
require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs').promises;
const os = require('os');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const admin = require('firebase-admin');
const { sendWelcomeEmail } = require('./utils/emailService');
const Question = require('./models/Question');
const MockTestProgress = require('./models/MockTestProgress');
const Note = require('./models/Note');
const InterviewFeedback = require('./models/InterviewFeedback');

// Initialize Firebase Admin with service account (optional for now)
let firebaseAdminInitialized = false;
try {
    const serviceAccount = require('./serviceAccountKey.json');
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log('Firebase Admin initialized successfully');
    firebaseAdminInitialized = true;
} catch (error) {
    console.warn('Firebase Admin initialization skipped:', error.message);
    // Don't exit the process, continue without Firebase Admin
}

const { OAuth2Client } = require('google-auth-library');

// Check if essential environment variables are loaded
// Temporarily commented out for testing
/*
if (!process.env.GEMINI_API_KEY || !process.env.GOOGLE_CLIENT_ID) {
    console.error("FATAL ERROR: Required environment variables are not defined.");
    console.error("Make sure both GEMINI_API_KEY and GOOGLE_CLIENT_ID are in your .env file.");
    process.exit(1);
}
console.log("GEMINI_API_KEY Status: Loaded");
console.log("GOOGLE_CLIENT_ID Status: Loaded");
*/

// Initialize Google OAuth client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || 'test_client_id');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/placeprep')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// API Routes - These must come BEFORE static file serving
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// Debug endpoint to check questions
app.get('/api/debug/questions', async (req, res) => {
    try {
        const allQuestions = await Question.find({});
        console.log('Total questions in database:', allQuestions.length);
        res.json({
            totalQuestions: allQuestions.length,
            questions: allQuestions.map(q => ({
                moduleId: q.moduleId,
                section: q.section,
                questionText: q.questionText.substring(0, 50) + '...',
                options: q.options,
                correctAnswer: q.correctAnswer
            }))
        });
    } catch (error) {
        console.error('Debug endpoint error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Questions endpoint
app.get('/api/questions/:moduleId', async (req, res) => {
    try {
        const { moduleId } = req.params;
        console.log('\n=== Questions API Call ===');
        console.log('Requested moduleId:', moduleId);
        console.log('Request headers:', req.headers);

        // First, check if the moduleId is valid
        if (!moduleId) {
            console.log('Invalid moduleId provided');
            return res.status(400).json({ 
                message: 'Invalid moduleId provided',
                moduleId: moduleId
            });
        }

        // Log the query we're about to execute
        console.log('Executing MongoDB query for moduleId:', moduleId);
        
        const questions = await Question.find({ moduleId: moduleId });
        console.log('MongoDB query result:', {
            totalQuestions: questions.length,
            firstQuestion: questions[0] ? {
                moduleId: questions[0].moduleId,
                section: questions[0].section,
                questionText: questions[0].questionText.substring(0, 50) + '...'
            } : 'No questions found'
        });

        if (!questions || questions.length === 0) {
            console.log('No questions found for module:', moduleId);
            return res.status(404).json({ 
                message: 'No questions found for this module',
                moduleId: moduleId
            });
        }

        // Format the response
        const formattedQuestions = questions.map(q => ({
            _id: q._id,
            moduleId: q.moduleId,
            section: q.section,
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
            marks: q.marks
        }));

        console.log('Sending response with', formattedQuestions.length, 'questions');
        res.json(formattedQuestions);
    } catch (error) {
        console.error('Error in questions endpoint:', error);
        res.status(500).json({ 
            message: 'Error fetching questions',
            error: error.message,
            stack: error.stack
        });
    }
});

// Static File Serving - These must come AFTER API routes
app.use(express.static(path.join(__dirname, 'PART_2', 'HTML')));
app.use('/PART_2', express.static(path.join(__dirname, 'PART_2')));

// Serve landingpage.html as the default homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PART_2', 'HTML', 'landingpage.html'));
});

// Serve mock test page
app.get('/mocktest', (req, res) => {
    res.sendFile(path.join(__dirname, 'PART_2', 'HTML', 'mocktest.html'));
});

// Serve module test page
app.get('/module', (req, res) => {
    res.sendFile(path.join(__dirname, 'PART_2', 'HTML', 'module.html'));
});

// Serve favicon.ico
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No content response for favicon
});

// Handle Chrome DevTools requests
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.status(204).end(); // No content response for DevTools
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'test_key');
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    safetySettings: [ // Optional: Adjust safety settings if needed
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    ]
});

// User Schema (keep as is)
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// Progress Schema
const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    moduleId: String,
    score: Number,
    totalQuestions: Number,
    answers: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        selectedAnswer: { type: String, default: null },
        isCorrect: Boolean
    }],
    completedAt: { type: Date, default: Date.now },
    timeSpent: Number // in seconds
});

const Progress = mongoose.model('Progress', progressSchema);

// Helper function to reliably determine the correct answer's index and text
const getCorrectAnswerInfo = (question) => {
    if (!question || !question.correctAnswer || !question.options) {
        return { index: 0, text: null }; // Return 0 (invalid) for 1-based index
    }

    const dbAnswer = String(question.correctAnswer);
    const normalize = (str) => String(str).replace(/\s+/g, ' ').trim().toLowerCase();

    let correctIndexOneBased = 0;
    let correctText = null;

    // Case 1: The stored answer is a number (e.g., "1", "2")
    if (!isNaN(parseInt(dbAnswer)) && !/[a-z]/i.test(dbAnswer)) {
        const idx = parseInt(dbAnswer);
        if (idx > 0 && idx <= question.options.length) {
            correctIndexOneBased = idx;
            correctText = question.options[idx - 1];
        }
    } 
    // Case 2: The stored answer is text (e.g., "WHERE")
    else {
        const foundIndex = question.options.findIndex(opt => normalize(opt) === normalize(dbAnswer));
        if (foundIndex !== -1) {
            correctIndexOneBased = foundIndex + 1;
            correctText = question.options[foundIndex];
        }
    }
    
    return { index: correctIndexOneBased, text: correctText };
};

// Routes (keep as is)
app.post('/api/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, department, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email: email.toLowerCase(),
            department,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        // Insecure: Return user object with ID, no token
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: savedUser._id,
                firstName: savedUser.firstName,
                email: savedUser.email,
            }
        });

    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'Server error during registration.' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials. Please check your email and password.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials. Please check your email and password.' });
        }

        // Insecure: Return user object with ID, no token
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                firstName: user.firstName,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
});

// Google Sign-In endpoint
app.post('/api/auth/google', async (req, res) => {
    try {
        const { token } = req.body;
        
        if (!token) {
            return res.status(400).json({ message: 'Token is required' });
        }

        // Verify the Google token
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const { email, given_name: firstName, family_name: lastName, picture } = payload;

        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if doesn't exist
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Math.random().toString(36) + Date.now().toString(36), salt);

            user = new User({
                firstName: firstName || 'Google User',
                lastName: lastName || '',
                email,
                department: 'Not Set', // Default department
                password: hashedPassword // Random secure password
            });

            await user.save();
        }

        // Return user data
        res.json({
            message: 'Google authentication successful',
            user: {
                id: user._id,
                firstName: user.firstName,
                email: user.email,
                department: user.department
            }
        });

    } catch (error) {
        console.error('Google authentication error:', error);
        res.status(401).json({ 
            message: 'Google authentication failed',
            error: error.message 
        });
    }
});

// Add the Firebase authentication endpoint
app.post('/api/auth/firebase', async (req, res) => {
    try {
        const { token, email, displayName } = req.body;

        if (!token) {
            return res.status(400).json({ message: 'Token is required' });
        }

        // Verify the Firebase ID token
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;

        // Split displayName into firstName and lastName
        let firstName = 'Google';
        let lastName = 'User';
        if (displayName) {
            const nameParts = displayName.split(' ');
            firstName = nameParts[0];
            lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'User';
        }

        // Check if user exists in your database
        let user = await User.findOne({ email });
        let isNewUser = false;

        if (!user) {
            isNewUser = true;
            // Create new user if doesn't exist
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Math.random().toString(36) + Date.now().toString(36), salt);

            user = new User({
                firstName,
                lastName,
                email,
                department: 'Not Set', // Default department
                password: hashedPassword // Random secure password
            });

            await user.save();
            console.log('New user created:', email);
            
            // Send welcome email for new users
            await sendWelcomeEmail(email, firstName);
        }

        // Return user data
        res.json({
            message: isNewUser ? 'Account created successfully' : 'Login successful',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                department: user.department,
                displayName: displayName
            }
        });

    } catch (error) {
        console.error('Firebase authentication error:', error);
        res.status(401).json({ 
            message: 'Firebase authentication failed',
            error: error.message 
        });
    }
});

// API endpoint for Gemini interaction
app.post('/api/ask-gemini', async (req, res) => {
    console.log("Received request for /api/ask-gemini with body:", req.body);
    try {
        const { department, interests, conversationHistory, message } = req.body;

        if (!department) {
            return res.status(400).json({ success: false, error: "Department is required." });
        }

        let structuredHistory = [];
        if (conversationHistory && Array.isArray(conversationHistory)) {
            structuredHistory = conversationHistory.map(turn => ({
                role: turn.role,
                parts: turn.parts
            }));
        }
        
        let currentPromptForGemini;
        if (message) {
            currentPromptForGemini = message;
        } else {
             currentPromptForGemini = `You are an expert interviewer for a company hiring for a ${department} role. The candidate may have specified interests in: "${interests || 'general ' + department + ' topics'}". Start by introducing yourself briefly as an AI Interviewer and then ask one insightful technical question to begin the interview. Ask only one question at a time. Do not provide the answer yet.`;
        }

        console.log("Formatted History for Gemini SDK:", JSON.stringify(structuredHistory, null, 2));
        console.log("Current Prompt being sent to Gemini:", currentPromptForGemini);
        
        const chat = model.startChat({
            history: structuredHistory,
            generationConfig: {
                maxOutputTokens: 400,
            },
        });

        const result = await chat.sendMessage(currentPromptForGemini);
        const response = result.response;
        const text = response.text();
        
        console.log("Gemini Raw Response Text:", text);
        res.json({ success: true, aiResponse: text });

    } catch (error) {
        console.error('Error calling Gemini API from backend:', error);
        if (error.response && error.response.data) {
            console.error("Gemini API - Detailed Error:", error.response.data);
        }
        res.status(500).json({ 
            success: false, 
            error: 'Failed to get response from AI. Please check server logs for details.',
        });
    }
});

// Get user's progress for all modules
app.get('/api/progress/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Valid User ID is required.' });
        }

        // 1. Mock Test Progress
        const testProgress = await MockTestProgress.find({ userId: userId });
        const testsTaken = testProgress.length;
        const totalScore = testProgress.reduce((sum, test) => sum + test.score, 0);
        const averageScore = testsTaken > 0 ? totalScore / testsTaken : 0;
        const modulesAttempted = [...new Set(testProgress.map(test => test.moduleId))].length;

        // 2. Interview Progress
        const interviewsTaken = await InterviewFeedback.countDocuments({ userId: userId });

        // Using a hardcoded value for total modules as a placeholder
        const TOTAL_MODULES = 10; 

        // 3. Profile Strength Calculation
        const scoreWeight = 0.5;
        const modulesWeight = 0.4;
        const interviewWeight = 0.1;
        const normalizedScore = (averageScore / 100) * 100;
        const normalizedModules = (modulesAttempted / TOTAL_MODULES) * 100;
        const normalizedInterviews = Math.min(interviewsTaken, 5) / 5 * 100;
        const strength = (normalizedScore * scoreWeight) + (normalizedModules * modulesWeight) + (normalizedInterviews * interviewWeight);
        const profileStrength = Math.round(Math.min(strength, 100));

        res.json({
            testsCompleted: testsTaken,
            averageScore: averageScore,
            modulesAttempted: modulesAttempted,
            totalModules: TOTAL_MODULES,
            interviewsCompleted: interviewsTaken,
            profileStrength: profileStrength
        });

    } catch (error) {
        console.error('Error fetching user progress:', error);
        res.status(500).json({ message: 'Error fetching user progress' });
    }
});

// Get questions by module
app.get('/api/questions/:moduleId', async (req, res) => {
    try {
        const { moduleId } = req.params;
        console.log('Fetching questions for module:', moduleId);

        // Log the query we're about to execute
        console.log('Executing query:', { moduleId });

        const questions = await Question.find({ moduleId: moduleId });
        console.log('Found questions:', questions.length);
        console.log('First question sample:', questions[0] ? {
            moduleId: questions[0].moduleId,
            section: questions[0].section,
            questionText: questions[0].questionText.substring(0, 50) + '...'
        } : 'No questions found');

        if (!questions || questions.length === 0) {
            console.log('No questions found for module:', moduleId);
            return res.status(404).json({ 
                message: 'No questions found for this module',
                moduleId: moduleId
            });
        }

        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ 
            message: 'Error fetching questions',
            error: error.message 
        });
    }
});

// AI-powered answer explanation endpoint
app.post('/api/explain-answers', async (req, res) => {
    try {
        const { questions, userAnswers, correctAnswers } = req.body;

        if (!questions || !userAnswers || !correctAnswers) {
            return res.status(400).json({ message: 'Missing required data for explanation' });
        }

        console.log('Generating AI explanations for', questions.length, 'questions');

        const explanations = [];

        for (let i = 0; i < questions.length; i++) {
            const question = { ...questions[i], correctAnswer: correctAnswers[i] };
            const userAnswerIndex = userAnswers[i]; // 0-based index

            const { index: correctAnswerIndex, text: correctAnswerText } = getCorrectAnswerInfo(question);
            const isCorrect = userAnswerIndex !== null && (userAnswerIndex + 1) === correctAnswerIndex;

            // Create prompt for Gemini AI
            const prompt = `
            Question: ${question.questionText}
            Options:
            ${question.options.map((option, index) => `${index + 1}. ${option}`).join('\n')}
            Correct Answer: ${correctAnswerIndex > 0 ? correctAnswerIndex + '. ' + correctAnswerText : 'N/A'}
            User's Answer: ${userAnswerIndex !== null ? (userAnswerIndex + 1) + '. ' + question.options[userAnswerIndex] : 'Not answered'}
            
            Please provide a clear and educational explanation for this question. Explain why the correct answer is right and, if the user was wrong, why their choice is incorrect. Keep it concise.
            
            Format your response as:
            Explanation: [Your explanation here]
            `;

            try {
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const explanationText = response.text().trim();
                
                explanations.push({
                    questionIndex: i + 1,
                    question: question.questionText,
                    userAnswer: userAnswerIndex !== null ? userAnswerIndex + 1 : null,
                    correctAnswer: correctAnswerIndex,
                    isCorrect: isCorrect,
                    explanation: explanationText,
                    options: question.options
                });

                console.log(`Generated explanation for question ${i + 1}`);
            } catch (aiError) {
                console.error(`Error generating explanation for question ${i + 1}:`, aiError);
                // Provide a fallback explanation
                explanations.push({
                    questionIndex: i + 1,
                    question: question.questionText,
                    userAnswer: userAnswerIndex !== null ? userAnswerIndex + 1 : null,
                    correctAnswer: correctAnswerIndex,
                    isCorrect: isCorrect,
                    explanation: isCorrect ? 
                        "Correct! You answered this question correctly." : 
                        `Incorrect. The correct answer is option ${correctAnswerIndex}: "${correctAnswerText || 'N/A'}"`,
                    options: question.options
                });
            }
        }

        res.json({ explanations });
    } catch (error) {
        console.error('Error generating explanations:', error);
        res.status(500).json({ message: 'Failed to generate explanations', error: error.message });
    }
});

// Submit test answers and save progress
app.post('/api/submit-test', async (req, res) => {
    try {
        const { moduleId, answers, timeSpent, userId } = req.body;
        
        console.log('\n=== Test Submission API Call ===');
        console.log('Received submission for moduleId:', moduleId, 'by userId:', userId);

        if (!moduleId || !answers || !userId) {
            return res.status(400).json({ message: 'Missing required fields: moduleId, answers, or userId' });
        }

        console.log('Submitting test for user:', userId, 'module:', moduleId);
        console.log('Answers received:', answers.length);

        // Fetch correct answers for the questions
        const questionIds = answers.map(a => a.questionId);
        const questions = await Question.find({
            _id: { $in: questionIds },
            moduleId
        });

        console.log('Questions found:', questions.length);

        // Calculate score and prepare graded answers
        let score = 0;
        const gradedAnswers = answers.map(answer => {
            const question = questions.find(q => q._id.toString() === answer.questionId);
            const selectedOptionIndex = answer.selectedOption !== null ? parseInt(answer.selectedOption) : -1; // 0-based
            
            let isCorrect = false;
            if (question) {
                const { index: correctIndex } = getCorrectAnswerInfo(question);
                if (correctIndex > 0 && (selectedOptionIndex + 1) === correctIndex) {
                    isCorrect = true;
                    score += 1; // Always +1 for correct answer
                }
            }
            
            return {
                questionId: answer.questionId,
                selectedAnswer: answer.selectedOption,
                isCorrect: isCorrect
            };
        });

        console.log('Calculated score:', score, 'out of', questions.length);

        // Save progress using MockTestProgress model
        const progress = new MockTestProgress({
            userId: userId,
            moduleId: moduleId,
            section: questions.length > 0 ? questions[0].section : moduleId,
            score: score,
            totalQuestions: questions.length,
            answers: gradedAnswers,
            timeSpent: timeSpent
        });
        
        await progress.save();
        console.log('Test progress saved to database');

        // Return results
        res.json({
            score,
            totalQuestions: questions.length,
            answers: gradedAnswers.map(a => ({
                questionId: a.questionId,
                isCorrect: a.isCorrect
            }))
        });
    } catch (error) {
        console.error('Error submitting test:', error);
        res.status(500).json({ message: 'Server error while submitting test', error: error.message });
    }
});

// Get module statistics
app.get('/api/module-stats/:moduleId', async (req, res) => {
    try {
        const { moduleId } = req.params;
        
        // Get total attempts
        const totalAttempts = await MockTestProgress.countDocuments({ moduleId });
        
        // Get average score
        const progressRecords = await MockTestProgress.find({ moduleId });
        const averageScore = progressRecords.length > 0 ? 
            progressRecords.reduce((acc, curr) => acc + curr.score, 0) / totalAttempts : 0;
        
        // Get highest score
        const highestScore = progressRecords.length > 0 ? 
            Math.max(...progressRecords.map(p => p.score)) : 0;
        
        res.json({
            totalAttempts,
            averageScore,
            highestScore
        });
    } catch (error) {
        console.error('Error fetching module statistics:', error);
        res.status(500).json({ message: 'Server error while fetching module statistics' });
    }
});

// Notes API endpoints
app.post('/api/notes', async (req, res) => {
    try {
        const { userId, title, description, category, keyPoints } = req.body;
        
        if (!userId || !title || !description) {
             return res.status(400).json({ message: 'User ID, title, and description are required.' });
        }

        const newNote = new Note({
            userId: userId,
            title: title,
            content: description,
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Error creating note' });
    }
});

app.get('/api/notes', async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from query parameter

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required to fetch notes.' });
        }

        const notes = await Note.find({ userId: userId }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Error fetching notes' });
    }
});

app.put('/api/notes/:id', async (req, res) => {
    try {
        const { userId, title, description, category, keyPoints } = req.body;
        
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required to update a note.' });
        }
        
        const updateData = {
            title,
            content: description,
            updatedAt: Date.now()
        };

        const note = await Note.findOneAndUpdate(
            { _id: req.params.id, userId: userId },
            updateData,
            { new: true }
        );

        if (!note) {
            return res.status(404).json({ message: 'Note not found or user does not have permission.' });
        }

        res.json(note);
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Error updating note' });
    }
});

app.delete('/api/notes/:id', async (req, res) => {
    try {
        // We get the userId from the query string for DELETE requests
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required to delete a note.' });
        }

        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            userId: userId
        });

        if (!note) {
            return res.status(404).json({ message: 'Note not found or user does not have permission.' });
        }

        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ message: 'Error deleting note' });
    }
});

// Test endpoint to verify questions
app.get('/api/test-questions', async (req, res) => {
    try {
        const questions = await Question.find({});
        console.log('Total questions in database:', questions.length);
        res.json({ count: questions.length, questions: questions.slice(0, 5) }); // Show first 5 questions
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
});

// AI Interview Feedback Endpoint
app.post('/api/ai-interview-feedback', async (req, res) => {
    try {
        const { userId, department, interests, conversationHistory } = req.body;
        if (!userId || !conversationHistory || !Array.isArray(conversationHistory) || conversationHistory.length === 0) {
            return res.status(400).json({ message: 'Missing userId or conversation history.' });
        }

        // Compose a prompt for Gemini
        let transcript = '';
        conversationHistory.forEach(turn => {
            if (turn.role === 'user') {
                transcript += `User: ${turn.parts[0].text}\n`;
            } else if (turn.role === 'model') {
                transcript += `AI: ${turn.parts[0].text}\n`;
            }
        });

        const prompt = `You are an AI interview coach. Here is a transcript of a mock interview between a user and you (the AI):\n\n${transcript}\n\nPlease provide:\n1. Constructive feedback on the user's overall interview performance.\n2. A score out of 10 (as a number only, no explanation) for their performance.\n3. Suggestions for improvement.\n\nFormat your response as:\nFeedback: [your feedback]\nScore: [number out of 10]\n`;

        // Call Gemini
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const aiText = response.text().trim();

        // Parse feedback and score
        let feedback = aiText;
        let score = null;
        const scoreMatch = aiText.match(/Score:\s*(\d{1,2})/i);
        if (scoreMatch) {
            score = parseInt(scoreMatch[1]);
            feedback = aiText.replace(/Score:\s*\d{1,2}/i, '').replace('Feedback:', '').trim();
        }

        // Save to MongoDB
        await InterviewFeedback.create({
            userId,
            department,
            interests,
            feedback,
            score,
            conversation: conversationHistory
        });

        res.json({ feedback, score });
    } catch (error) {
        console.error('AI Interview Feedback Error:', error);
        res.status(500).json({ message: 'Failed to generate feedback', error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`PlacePrep server running on http://localhost:${port}`);
    console.log('Available routes:');
    console.log('- GET  /api/test');
}); 