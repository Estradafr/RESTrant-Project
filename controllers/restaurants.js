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

module.exports = router;
