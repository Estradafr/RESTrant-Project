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
					<div className="form-group">
						<label htmlFor="name">
							Restaurant Name
							<input
								className="form-control"
								id="name"
								name="name"
								required
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="pic">
							Restaurant Picture
							<input
								className="form-control"
								type="url"
								id="pic"
								name="pic"
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="city">
							City
							<input
								className="form-control"
								id="city"
								name="city"
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="state">
							State
							<input
								className="form-control"
								id="state"
								name="state"
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="cuisines">
							Cuisines
							<input
								className="form-control"
								id="cuisines"
								name="cuisines"
								required
							/>
						</label>
					</div>
					<input
						className="btn btn-primary"
						type="submit"
						value="Add Restaurant"
					/>
				</form>
			</main>
		</Default>
	);
}
module.exports = new_form;
