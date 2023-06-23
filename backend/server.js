import express from 'express';
import userRoutes from './Routes/userRoutes.js';
const app = express();

app.use(express.json());

// Apply routes
app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server is running...'));
