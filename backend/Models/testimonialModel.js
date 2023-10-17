import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now }
});

export default model('Testimonial', testimonialSchema);
