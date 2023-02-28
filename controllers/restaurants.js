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
			if (err && err.name == 'ValidationError') {
				let message = 'Validation Error: ';
				for (var field in err.errors) {
					message += `${field} was ${err.errors[field].value}. `;
					message += `${err.errors[field].message}`;
				}
				console.log('Validation error message:', message);
				res.render('restaurants/new_restaurant', {message});
			} else {
				res.render('error404');
			}
		});
});

// NEW RESTAURANT PAGE
router.get('/new', (req, res) => {
	res.render('restaurants/new_restaurant');
});

// SHOW ROUTE
router.get('/:id', (req, res) => {
	db.Restaurant.findById(req.params.id)
		.populate('comments')
		.then((restaurant) => {
			console.log(restaurant.comments);
			res.render('restaurants/show_page', {restaurant});
		})
		.catch((err) => {
			console.log('err', err);
			res.render('Error404');
		});
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
	db.Restaurant.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect('/restaurants');
		})
		.catch((err) => {
			console.log('err', err);
			res.render('error404');
		});
});

// EDIT
router.get('/:id/edit', (req, res) => {
	db.Restaurant.findById(req.params.id)
		.then((restaurant) => {
			res.render('restaurants/edit_page', {restaurant});
		})
		.catch((err) => {
			res.render('error404');
		});
});

// PUT ROUTE
router.put('/:id', (req, res) => {
	db.Restaurant.findByIdAndUpdate(req.params.id, req.body)
		.then(() => {
			res.redirect(`/restaurants/${req.params.id}`);
		})
		.catch((err) => {
			console.log('err', err);
			res.render('error404');
		});
});

// POST COMMENT ROUTE
router.post('/:id/comment', (req, res) => {
	console.log('post comment', req.body);
	if (req.body.author === '') {
		req.body.author = undefined;
	}
	req.body.rant = req.body.rant ? true : false;
	db.Restaurant.findById(req.params.id)
		.then((restaurant) => {
			db.Comment.create(req.body)
				.then((comment) => {
					restaurant.comments.push(comment.id);
					restaurant
						.save()
						.then(() => {
							res.redirect(`/restaurants/${req.params.id}`);
						})
						.catch((err) => {
							res.render('error404');
						});
				})
				.catch((err) => {
					res.render('error404');
				});
		})
		.catch((err) => {
			res.render('error404');
		});
});

// DELETE COMMENT ROUTE
router.delete('/:id/comment/:commentId', (req, res) => {
	db.Comment.findByIdAndDelete(req.params.commentId)
		.then(() => {
			console.log('Success');
			res.redirect(`/restaurants/${req.params.id}`);
		})
		.catch((err) => {
			console.log('err', err);
			res.render('error404');
		});
});

module.exports = router;
