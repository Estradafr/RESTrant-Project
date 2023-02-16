const React = require('react');
const Default = require('../default');

function new_form() {
	return (
		<Default>
			<main>
				<h1>Add a new restaurant</h1>
				<form
					action="/restaurants"
					method="POST"
				>
					<div>
						<label htmlFor="name">
							Restaurant Name
							<input
								id="name"
								name="name"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="pic">
							Restaurant Picture
							<input
								type="url"
								id="pic"
								name="pic"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="city">
							City
							<input
								id="city"
								name="city"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="state">
							State
							<input
								id="state"
								name="state"
							/>
						</label>
					</div>
					<div>
						<label htmlFor="cuisines">
							Cuisines
							<input
								id="cuisines"
								name="cuisines"
								required
							/>
						</label>
					</div>
					<input
						type="submit"
						value="Add Restaurant"
					/>
				</form>
			</main>
		</Default>
	);
}
module.exports = new_form;
