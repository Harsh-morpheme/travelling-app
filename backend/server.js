const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/bookings', require('./routes/bookings'));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/travel-agency', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});