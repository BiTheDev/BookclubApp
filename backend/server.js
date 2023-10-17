// server.js

import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import booksRoutes from './Routes/bookRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import eventsRoutes from './Routes/eventRoutes.js';
import axios from 'axios';

// Load environment variables from .env file
config();

const app = express();

// Middleware setup
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());


// Sample route
app.get('/', (req, res) => {
    res.send('Hello from BookClub Backend!');
});



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/events', eventsRoutes);
app.get('/api/searchBooks', async (req, res) => {
    const query = req.query.q;
    const googleBooksApiKey = process.env.GOOGLE_BOOKS_API_KEY;
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${googleBooksApiKey}`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));