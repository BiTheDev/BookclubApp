import { Schema, model } from 'mongoose';

const eventSchema = Schema({
    name: String,
    description: String,
    date: Date,
    location: String,
    relatedBook: { type: Schema.Types.ObjectId, ref: 'Book' }
});

const Event = model('Event', eventSchema);

export default Event;
