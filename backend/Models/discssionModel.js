import { Schema, model } from 'mongoose';

const discussionSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now },
    comments: [String] // This can be further expanded into a separate Comment model if needed.
});

export default model('Discussion', discussionSchema);
