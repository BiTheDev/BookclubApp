import express from 'express';
import userController from '../Controllers/userController.js';
const userRoutes = express.Router();


userRoutes.post('/register', userController.registerUser);
userRoutes.post('/login', userController.loginUser);

export default userRoutes
