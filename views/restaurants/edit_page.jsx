const React = require('react');
const Default = require('../default.jsx');

function edit_page(data) {
	return (
		<Default>
			<main>
				<h1 className="mx-auto">Edit Place</h1>
				<form
					action={`/restaurants/${data.restaurant.id}?_method=PUT`}
					method="POST"
				>
					<div className="row">
						<div className="form-group col-m-6">
							<label htmlFor="name">
								Restaurant Name
								<input
									className="form-control text-center"
									id="name"
									name="name"
									value={data.restaurant.name}
									required
								/>
							</label>
						</div>
						<div className="form-group col-m-6 mx-auto">
							<label htmlFor="pic">
								Restaurant Picture
								<input
									className="form-control text-center"
									type="url"
									id="pic"
									name="pic"
								/>
							</label>
						</div>
						<div className="form-group col-m-6 mx-auto">
							<label htmlFor="city">
								City
								<input
									className="form-control text-center"
									id="city"
									name="city"
									value={data.restaurant.city}
								/>
							</label>
						</div>
						<div className="form-group col-2 mx-auto">
							<label
								htmlFor="state"
								className="control-label text-center"
							>
								State
							</label>
							<select
								className="form-control text-center"
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
						<div className="form-group col-m-6">
							<label htmlFor="cuisines">
								Cuisines
								<input
									className="form-control text-center"
									id="cuisines"
									name="cuisines"
									value={data.restaurant.cuisines}
									required
								/>
							</label>
						</div>
						<div className="form-group col-m-6">
							<br />
							<input
								className="btn btn-primary"
								type="submit"
								value="Edit Restaurant"
							/>
						</div>
					</div>
				</form>
			</main>
		</Default>
	);
}

module.exports = edit_page;
