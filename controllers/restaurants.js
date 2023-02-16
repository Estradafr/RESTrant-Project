// Router
const router = require('express').Router();
const restaurants = require('../modules/restaurants.js');

// INDEX PAGE
router.get('/', (req, res) => {
	res.render('restaurants/index', {restaurants});
});

// POST/CREATE RESTAURANT PAGE
router.post('/', (req, res) => {
	if (!req.body.pic) {
		// Default IMG if not provided
		req.body.pic = 'http://placekitten.com/400/400';
	}
	if (!req.body.city) {
		req.body.city = 'Somewhere';
	}
	if (!req.body.state) {
		req.body.state = 'USA';
	}
	restaurants.push(req.body);
	res.redirect('/restaurants');
});

// NEW RESTAURANT PAGE
router.get('/new', (req, res) => {
	res.render('restaurants/new_restaurant');
});

// SHOW ROUTE
router.get('/:id', (req, res) => {
	restaurants[req.params.id]
		? res.render('restaurants/show_page', {
				restaurant: restaurants[req.params.id],
				id: req.params.id,
		  })
		: res.status(404).render('Error404');
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

module.exports = router;
