const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    coverImageUrl: String,
    description: String,
    totalPages: Number,
    ISBN: String,
    source: { type: String, enum: ['GoogleBooks', 'UserAdded'] },
    usersCurrentlyReading: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    usersCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Book', bookSchema);
