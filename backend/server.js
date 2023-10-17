// server.js

import express from 'express';
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
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
config();

const app = express();

// Middleware setup
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


let frontend_dir = path.join(__dirname, '..', 'frontend', 'dist')

app.use(express.static(frontend_dir));



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

app.get('*', function (req, res) {
  console.log("received request");
  res.sendFile(path.join(frontend_dir, "index.html"));
});


  app.listen(process.env.PORT || 3001, function() {
    console.log(`Starting server now on port ${process.env.PORT || 3001}`);
  })