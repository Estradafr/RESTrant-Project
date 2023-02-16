const React = require('react');
const Default = require('./default');

function Error404() {
	return (
		<Default>
			<main>
				<div id="notfound">
					<div class="notfound">
						<div class="notfound-404">
							<h1>404</h1>
						</div>
						<br />
						<h2>Oops! This Page Could Not Be Found</h2>
						<br />
						<p>
							Sorry but the page you are looking for does not exist, has been
							removed, or is temporarily unavailable..
						</p>
						<a href="/">
							<button className="btn btn-primary">Home Page</button>
						</a>
					</div>
				</div>
			</main>
		</Default>
	);
}

module.exports = Error404;
