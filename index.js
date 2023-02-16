// Modules
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Controller Route
app.use('/restaurants', require('./controllers/restaurants'));

// Home Page Route
app.get('/', (req, res) => {
	res.render('Home');
});

// 404 Page Route
app.get('*', (req, res) => {
	res.render('error404');
});

// Listen
app.listen(PORT);
