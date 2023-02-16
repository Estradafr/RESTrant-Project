const React = require('react');
const Default = require('../default');

function index_page(data) {
	let restaurantsFormatted = data.restaurants.map((restaurant) => {
		return (
			<div>
				<h2>{restaurant.name}</h2>
				<img
					src={restaurant.pic}
					alt={restaurant.name}
				/>
			</div>
		);
	});
	return (
		<Default>
			<main>
				<h1>RESTAURANT INDEX PAGE</h1>
				{restaurantsFormatted}
			</main>
		</Default>
	);
}

module.exports = index_page;
