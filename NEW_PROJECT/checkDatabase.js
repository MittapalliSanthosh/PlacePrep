require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./models/Question');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/placeprep')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

async function checkDatabase() {
    try {
        // Get all questions
        const questions = await Question.find({});
        console.log('\nTotal questions in database:', questions.length);
        
        if (questions.length === 0) {
            console.log('No questions found in database!');
            return;
        }

        // Group questions by moduleId
        const questionsByModule = {};
        questions.forEach(q => {
            if (!questionsByModule[q.moduleId]) {
                questionsByModule[q.moduleId] = [];
            }
            questionsByModule[q.moduleId].push(q);
        });

        // Print summary
        console.log('\nQuestions by module:');
        Object.keys(questionsByModule).forEach(moduleId => {
            console.log(`Module ${moduleId}: ${questionsByModule[moduleId].length} questions`);
        });

        // Print sample question
        console.log('\nSample question:');
        console.log(JSON.stringify(questions[0], null, 2));

    } catch (error) {
        console.error('Error checking database:', error);
    } finally {
        mongoose.connection.close();
    }
}

checkDatabase(); 