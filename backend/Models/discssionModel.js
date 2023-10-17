const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now },
    comments: [String] // This can be further expanded into a separate Comment model if needed.
});

module.exports = mongoose.model('Discussion', discussionSchema);
