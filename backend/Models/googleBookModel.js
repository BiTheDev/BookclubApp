const mongoose = require('mongoose');

const googleBookSchema = new mongoose.Schema({
    googleId: String,  // Unique ID provided by Google Books for each book.
    title: String,
    authors: [String],
    publisher: String,
    description: String,
    pageCount: Number,
    imageLinks: {
        thumbnail: String,
        smallThumbnail: String
    },
    // ... any other relevant fields you'd like to store.
});

module.exports = mongoose.model('GoogleBook', googleBookSchema);
