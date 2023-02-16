// Modules
const express = require('express');
const app = express();

// Home Page Route
app.get('/', (req, res) => {
	res.send('hello');
});

// Listen
app.listen(8080);
