// Router
const router = require('express').Router();

// Restaurants Index Page
router.get('/', (req, res) => {
	res.render('restaurants/index');
});

module.exports = router;
