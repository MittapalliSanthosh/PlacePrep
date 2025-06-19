const mongoose = require('mongoose');

// Drop the existing model if it exists
try {
    mongoose.model('Question');
} catch (error) {
    // Model doesn't exist, continue
}

const questionSchema = new mongoose.Schema({
    moduleId: { 
        type: String, 
        required: true,
        trim: true
    },
    section: { 
        type: String, 
        required: true,
        trim: true
    },
    questionText: { 
        type: String, 
        required: true 
    },
    options: [{ 
        type: String, 
        required: false 
    }],
    correctAnswer: { 
        type: String, 
        required: function() { return this.type === 'mcq'; }
    },
    difficulty: { 
        type: String,
        default: 'medium'
    },
    marks: { 
        type: Number, 
        default: 1 
    },
    type: {
        type: String,
        default: 'mcq'
    }
}, {
    timestamps: true
});

// Create a new model
const Question = mongoose.model('Question', questionSchema);

module.exports = Question; 