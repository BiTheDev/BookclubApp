const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    currentBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    completedBooks: [{
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
        completionDate: Date
    }],
    recommendations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    profileImage: String,
    joinDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
