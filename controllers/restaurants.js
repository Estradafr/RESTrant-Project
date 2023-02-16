// Router
const router = require('express').Router();

// Places Index Page
router.get('/', (req, res) => {
	res.send('GET /restaurants');
});

module.exports = router;
