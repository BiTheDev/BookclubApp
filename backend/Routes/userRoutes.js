// Routes/UserRoutes.js

import { Router } from 'express';
const router = Router();
import { register, login } from '../Controllers/userController.js';

router.post('/register', register);
router.post('/login', login);

// ... Add other user-related routes

export default router;
