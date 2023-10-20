// Routes/UserRoutes.js

import { Router } from 'express';
import auth from '../Middleware/auth.js';
const router = Router();
import { register, login, getUserInfo,updateUser,addCurrentBook,completeBook } from '../Controllers/userController.js';

router.post('/register', register);
router.post('/login', login);
router.put('/update', auth, updateUser);
router.get('/userInfo', auth, getUserInfo);
router.post('/currentBook', auth, addCurrentBook);
router.post('/completeBook', auth, completeBook);


// ... Add other user-related routes

export default router;
