const mongoose = require('mongoose');

const interviewFeedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    department: String,
    interests: String,
    feedback: String,
    score: Number,
    conversation: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InterviewFeedback', interviewFeedbackSchema); 