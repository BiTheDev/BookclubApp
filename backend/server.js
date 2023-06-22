const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Apply routes
app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server is running...'));
