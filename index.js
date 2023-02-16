// Modules
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

// Home Page Route
app.get('/', (req, res) => {
	res.status(404).send('TEST');
});

// 404 Page Route
app.get('*', (req, res) => {
	res.send('<h1>404</h1>');
});

// Listen
app.listen(PORT);
