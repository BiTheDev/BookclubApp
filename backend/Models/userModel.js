import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    currentBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    completedBooks: [{
        bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
        completionDate: Date
    }],
    recommendations: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    profileImage: String,
    joinDate: { type: Date, default: Date.now }
});

export default model('User', userSchema);
