const React = require('react');
const Default = require('../default');

function index_page(data) {
	let restaurantsFormatted = data.restaurants.map((restaurant, index) => {
		return (
			<div className="col-sm-6">
				<h2>
					<a href={`/restaurants/${index}`}>{restaurant.name}</a>
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
				<h1>RESTAURANT INDEX PAGE</h1>
				<div className="row"> {restaurantsFormatted} </div>
				<a href="/">
					<button className="btn btn-primary">Home Page</button>
				</a>
			</main>
		</Default>
	);
}

module.exports = index_page;
