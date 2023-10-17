// Controllers/EventsController.js

import Event from '../Models/eventModel.js';

export async function getAllEvents(req, res) {
    try {
        const events = await find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function getEventById(req, res) {
    try {
        const event = await findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function addEvent(req, res) {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function updateEvent(req, res) {
    try {
        let event = await findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        event = await findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function deleteEvent(req, res) {
    try {
        const event = await findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.remove();
        res.status(200).json({ message: 'Event removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
