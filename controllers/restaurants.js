// Router
const router = require('express').Router();

// Restaurants Index Page
router.get('/', (req, res) => {
	let restaurants = [
		{
			name: 'H-Thai-ML',
			city: 'Seattle',
			state: 'WA',
			cuisines: 'Thai',
			pic: 'http://placekitten.com/250/250',
		},
		{
			name: 'Coding Cat Cafe',
			city: 'Las Vegas',
			state: 'NV',
			cuisines: 'Bakery',
			pic: 'http://placekitten.com/250/250',
		},
	];

	res.render('restaurants/index', {restaurants});
});

// POST/CREATE RESTAURANT
router.post('/', (req, res) => {
	console.log(req.body);
	res.send('POST /restaurants');
});

// NEW RESTAURANT PAGE
router.get('/new', (req, res) => {
	res.render('restaurants/new_restaurant');
});

module.exports = router;
