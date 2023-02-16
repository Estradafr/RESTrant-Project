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
						<label
							htmlFor="state"
							className="control-label"
						>
							State
						</label>
						<select
							className="form-control"
							id="state"
							name="state"
						>
							<option value="">N/A</option>
							<option value="AK">Alaska</option>
							<option value="AL">Alabama</option>
							<option value="AR">Arkansas</option>
							<option value="AZ">Arizona</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DC">District of Columbia</option>
							<option value="DE">Delaware</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="IA">Iowa</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="MA">Massachusetts</option>
							<option value="MD">Maryland</option>
							<option value="ME">Maine</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MO">Missouri</option>
							<option value="MS">Mississippi</option>
							<option value="MT">Montana</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="NE">Nebraska</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NV">Nevada</option>
							<option value="NY">New York</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="PR">Puerto Rico</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VA">Virginia</option>
							<option value="VT">Vermont</option>
							<option value="WA">Washington</option>
							<option value="WI">Wisconsin</option>
							<option value="WV">West Virginia</option>
							<option value="WY">Wyoming</option>
						</select>
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
					<div className="form-group">
						<br />
						<input
							className="btn btn-primary"
							type="submit"
							value="Add Restaurant"
						/>
					</div>
				</form>
			</main>
		</Default>
	);
}
module.exports = new_form;
