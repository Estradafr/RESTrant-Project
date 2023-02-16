const React = require('react');
const Default = require('./default');

function Home() {
	return (
		<Default>
			<main>
				<h1>HOME PAGE</h1>
				<a href="/restaurants">
					<button className="btn btn-primary">Places Page</button>
				</a>
			</main>
		</Default>
	);
}

module.exports = Home;
