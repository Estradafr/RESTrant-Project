const React = require('react');
const Default = require('../default');

function index_page(data) {
	let restaurantsFormatted = data.restaurants.map((restaurant) => {
		return (
			<div className="col-sm-6">
				<h2>
					<a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a>
				</h2>
				<p className="text-center"> {restaurant.cuisines} </p>
				<img
					src={restaurant.pic}
					alt={restaurant.name}
				/>
				<br />
				<br />
				<p className="text-center">
					Located in {restaurant.city}, {restaurant.state}
				</p>
			</div>
		);
	});
	return (
		<Default>
			<main>
				<h1>Rave and Rant</h1>
				<div className="row"> {restaurantsFormatted} </div>
			</main>
		</Default>
	);
}

module.exports = index_page;
