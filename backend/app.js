const express = require('express');
const app = express();

// Body parsing middleware
app.use(express.json());

// Include models for different sections
const userModel = require('./models/userModel');
const tailorModel = require('./models/tailorModel');
const designModel = require('./models/designModel');

// Include routes for different sections
app.use('/user', require('./routes/userRoutes'));
app.use('/tailor', require('./routes/tailorRoutes'));
app.use('/design', require('./routes/designRoutes'));

module.exports = app;
