// Modules
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

// Controller Route
app.use('/restaurants', require('./controllers/restaurants'));

// Home Page Route
app.get('/', (req, res) => {
	res.send('Home Page');
});

// 404 Page Route
app.get('*', (req, res) => {
	res.status(404).send('<h1>404</h1>');
});

// Listen
app.listen(PORT);
