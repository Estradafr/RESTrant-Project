const db = require('../modules');

db.Restaurant.create([
	{
		name: 'H-Thai-ML',
		city: 'Seattle',
		state: 'WA',
		cuisines: 'Thai, Pan-Asian',
		pic: 'http://placehold.it/500x500.png',
		founded: 1989,
	},
	{
		name: 'Coding Cat Cafe',
		city: 'Phoenix',
		state: 'AZ',
		cuisines: 'Coffee, Bakery',
		pic: 'http://placehold.it/500x500.png',
		founded: 2020,
	},
])
	.then(() => {
		console.log('Successful!');
		process.exit();
	})
	.catch((err) => {
		console.log('Failure', err);
		process.exit();
	});
