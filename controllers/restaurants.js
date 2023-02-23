const router = require('express').Router();
const db = require('../modules');

// INDEX
router.get('/', (req, res) => {
	db.Restaurant.find()
		.then((restaurants) => {
			res.render('restaurants/index', {restaurants});
		})
		.catch((err) => {
			console.log(err);
			res.render('Error404');
		});
});

// POST
router.post('/', (req, res) => {
	if (!req.body.pic) {
		// Default image if one is not provided
		req.body.pic = 'https://via.placeholder.com/500';
	}

	db.Restaurant.create(req.body)
		.then(() => {
			res.redirect('/restaurants');
		})
		.catch((err) => {
			console.log('err', err);
			res.render('Error404');
		});
});

// NEW RESTAURANT PAGE
router.get('/new', (req, res) => {
	res.render('restaurants/new_restaurant');
});

// SHOW ROUTE
router.get('/:id', (req, res) => {
	db.Restaurant.findById(req.params.id)
		.then((restaurant) => {
			res.render('restaurants/show_page', {restaurant});
		})
		.catch((err) => {
			console.log('err', err);
			res.render('Error404');
		});
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
	if (restaurants[req.params.id]) {
		restaurants.splice(req.params.id, 1);
		res.redirect('/restaurants');
	} else {
		res.status(404).render('Error404');
	}
});

// EDIT
router.get('/:id/edit', (req, res) => {
	res.render('restaurants/edit_page', {
		restaurant: restaurants[req.params.id],
		id: req.params.id,
	});
});

// PUT ROUTE
router.put('/:id', (req, res) => {
	if (!req.body.city) req.body.city = 'Somewhere';
	if (!req.body.state) req.body.state = 'USA';

	restaurants[req.params.id] = req.body;
	res.redirect(`/restaurants/${req.params.id}`);
});

module.exports = router;
