// server.js

import './config.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import booksRoutes from './Routes/bookRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import eventsRoutes from './Routes/eventRoutes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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
app.use('/api/users', userRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/events', eventsRoutes);


app.get('*', function (req, res) {
  console.log("received request");
  res.sendFile(path.join(frontend_dir, "index.html"));
});


  app.listen(process.env.PORT || 10000, function() {
    console.log(`Starting server now on port ${process.env.PORT || 10000}`);
  })