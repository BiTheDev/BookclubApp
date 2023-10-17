// Routes/UserRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

// ... Add other user-related routes

module.exports = router;
