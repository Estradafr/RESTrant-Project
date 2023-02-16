const React = require('react');
const Default = require('../default');

function index_page(data) {
	let restaurantsFormatted = data.restaurants.map((restaurant) => {
		return (
			<div className="col-sm-6">
				<h2> {restaurant.name} </h2>
				<p className="text-center"> {restaurant.cuisines} </p>
				<img
					src={restaurant.pic}
					alt={restaurant.name}
				/>
				<p className="text-center">
					Located in {restaurant.city}, {restaurant.state}
				</p>
			</div>
		);
	});
	return (
		<Default>
			<main>
				<h1>RESTAURANT INDEX PAGE</h1>
				<div className="row"> {restaurantsFormatted} </div>
			</main>
		</Default>
	);
}

module.exports = index_page;
