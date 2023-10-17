import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: String,
    author: String,
    coverImageUrl: String,
    description: String,
    totalPages: Number,
    ISBN: String,
    source: { type: String, enum: ['GoogleBooks', 'UserAdded'] },
    usersCurrentlyReading: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    usersCompleted: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Book = model('Book', bookSchema);

export default Book;
