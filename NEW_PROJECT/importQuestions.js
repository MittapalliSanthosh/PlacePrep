require('dotenv').config();
const mongoose = require('mongoose');
const { sampleAssessments } = require('./seedAssessments');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/placeprep')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Question Schema
const questionSchema = new mongoose.Schema({
    moduleId: { type: String, required: true },
    section: { type: String, required: true },
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: function() { return this.type === 'mcq'; } },
    difficulty: { type: String },
    marks: { type: Number, default: 1 },
    type: { type: String, default: 'mcq' }
});

const Question = mongoose.model('Question', questionSchema);

// Helper function to get module prefix
const getModulePrefix = (type) => {
    // For aptitude modules, use specific prefixes based on the section
    if (type.toLowerCase().includes('aptitude')) {
        return 'aptitude';
    }
    
    // For other types, use the standard prefixes
    switch(type.toLowerCase()) {
        case 'technical': return 'tech';
        case 'coding': return 'cod';
        case 'hr': return 'hr';
        default: return type.toLowerCase().substring(0, 3);
    }
};

// Mapping from assessment/section title to frontend moduleId
const moduleIdMap = {
    // Aptitude
    'Advanced Quantitative Aptitude': 'aptitude_advanced_quantitative_aptitude',
    'Complex Logical Reasoning': 'com_1',
    'Data Sufficiency & Interpretation': 'dat_1',
    'Probability & Statistics': 'pro_1',
    'Permutations & Combinations': 'per_1',
    'Time, Work & Optimizations': 'tim_1',
    'Pipes, Cisterns, Boats & Streams': 'pip_1',
    // Technical
    'Data Structures & Algorithms': 'tech_1',
    'Database Management Systems': 'tech_2',
    'Operating Systems': 'tech_3',
    'Computer Networks': 'tech_4',
    'Object-Oriented Programming': 'tech_5',
    'System Design': 'tech_6',
    'Software Engineering': 'tech_7',
    // HR Interview
    'Behavioral Questions': 'hr_1',
    'Situational Questions': 'hr_2',
    'Leadership & Teamwork': 'hr_3',
    'Problem-Solving Scenarios': 'hr_4',
    'Career Goals & Motivation': 'hr_5',
    'Company Knowledge': 'hr_6',
    'Salary Negotiation': 'hr_7',
    // Coding
    'Arrays & Strings': 'cod_1',
    'Linked Lists & Trees': 'cod_2',
    'Dynamic Programming': 'cod_3',
    'Graph Algorithms': 'cod_4',
    'Sorting & Searching': 'cod_5',
    'System Design Problems': 'cod_6',
    'Database Queries': 'cod_7',
};

async function importQuestions() {
    try {
        // Clear existing questions
        await Question.deleteMany({});
        console.log('Cleared existing questions');

        let questionCount = 0;
        
        // Process each assessment
        for (const assessment of sampleAssessments) {
            // Process each section
            for (let sectionIndex = 0; sectionIndex < assessment.sections.length; sectionIndex++) {
                const section = assessment.sections[sectionIndex];
                // Always use section name for moduleId mapping
                let moduleId = moduleIdMap[section.name] || null;
                // If still not found, fallback to prefix + index
                if (!moduleId) {
                    let modulePrefix = getModulePrefix(assessment.type || assessment.title);
                    if (assessment.type && assessment.type.toLowerCase().includes('coding')) modulePrefix = 'cod';
                    if (assessment.type && assessment.type.toLowerCase().includes('hr')) modulePrefix = 'hr';
                    moduleId = `${modulePrefix}_${sectionIndex + 1}`;
                }
                // Only import MCQ questions for each module
                if (!Array.isArray(section.questions)) {
                    console.warn(`WARNING: Section '${section.name}' (moduleId: ${moduleId}) has no questions array. Skipping this section.`);
                    continue;
                }
                const mcqQuestions = section.questions.filter(q => q.type === 'mcq');
                if (mcqQuestions.length === 0) {
                    console.warn(`WARNING: Section '${section.name}' (moduleId: ${moduleId}) has no MCQ questions. Skipping.`);
                    continue;
                }
                console.log(`Processing section: ${section.name} (moduleId: ${moduleId}) - Importing ${mcqQuestions.length} MCQ questions`);
                for (const question of mcqQuestions) {
                    const questionData = {
                        moduleId: moduleId,
                        section: section.name, // Save section name for clarity
                        questionText: question.questionText,
                        marks: question.marks || 1,
                        type: question.type || 'mcq'
                    };
                    if (question.options) questionData.options = question.options;
                    if (question.correctAnswer) questionData.correctAnswer = question.correctAnswer;
                    const newQuestion = new Question(questionData);
                    await newQuestion.save();
                    questionCount++;
                }
            }
        }
        
        console.log(`\nSuccessfully imported ${questionCount} questions`);
        
        // Verify the import
        const questions = await Question.find({});
        console.log('\nVerification:');
        console.log('Total questions in database:', questions.length);
        
        // Group by moduleId
        const questionsByModule = {};
        questions.forEach(q => {
            if (!questionsByModule[q.moduleId]) {
                questionsByModule[q.moduleId] = [];
            }
            questionsByModule[q.moduleId].push(q);
        });
        
        console.log('\nQuestions by module:');
        Object.keys(questionsByModule).forEach(moduleId => {
            console.log(`Module ${moduleId}: ${questionsByModule[moduleId].length} questions`);
        });
        
    } catch (error) {
        console.error('Error importing questions:', error);
    } finally {
        mongoose.connection.close();
    }
}

// Helper function to format titles (moved outside for reuse)
function formatTitle(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .substring(0, 20);
}

importQuestions();