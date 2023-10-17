// Routes/EventsRoutes.js

import { Router } from 'express';
const router = Router();
import { getAllEvents, getEventById, addEvent, updateEvent, deleteEvent } from '../Controllers/eventController.js';

router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', addEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
