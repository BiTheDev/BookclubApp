// Routes/UserRoutes.js

import { Router } from 'express';
const router = Router();
import { register, login, getUserInfo,updateUser,addCurrentBook,completeBook } from '../Controllers/userController.js';

router.post('/register', register);
router.post('/login', login);
router.put('/update', updateUser);
router.get('/userInfo', getUserInfo);
router.post('/currentBook', addCurrentBook);
router.post('/completeBook', completeBook);


// ... Add other user-related routes

export default router;
