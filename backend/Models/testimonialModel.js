const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
