const mongoose = require('mongoose');

const mockTestProgressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    moduleId: { type: String, required: true },
    section: { type: String, required: true },
    score: { type: Number, default: 0 },
    totalQuestions: { type: Number, required: true },
    answers: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        selectedAnswer: { type: String, default: null },
        isCorrect: Boolean
    }],
    completedAt: { type: Date, default: Date.now },
    timeSpent: { type: Number, default: 0 } // in seconds
});

module.exports = mongoose.model('MockTestProgress', mockTestProgressSchema); 