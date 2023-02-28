const React = require('react');
const Default = require('../default');

function show_page(data) {
	let comments = <h3 className="inactive">No comments, yet!</h3>;
	let rating = <h3 className="inactive">No ratings, yet!</h3>;
	if (data.restaurant.comments.length) {
		let sumRatings = data.restaurant.comments.reduce((tot, c) => {
			return tot + c.stars;
		}, 0);
		let averageRating = Math.round(
			sumRatings / data.restaurant.comments.length
		);
		let stars = '';
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️';
		}
		rating = <h3>{stars} stars</h3>;
		comments = data.restaurant.comments.map((c) => {
			return (
				<div>
					<h2 className="rant">{c.rant ? 'Rant! 😒' : 'Rave! 😎'}</h2>
					<h4>{c.content}</h4>
					<h3>
						<stong>- {c.author}</stong>
					</h3>
					<h4>Rating: {c.stars}</h4>
					<form
						method="POST"
						action={`/restaurants/${data.restaurant.id}/comment/${c.id}?_method=DELETE`}
					>
						<input
							type="submit"
							className="btn btn-danger"
							value="Delete Comment"
						/>
					</form>
				</div>
			);
		});
	}
	return (
		<Default>
			<main>
				<h1>{data.restaurant.name}</h1>
				<img
					src={data.restaurant.pic}
					alt={data.restaurant.name}
				/>
				<p id="p-data">
					Located in {data.restaurant.city}, {data.restaurant.state}
				</p>
				<div>
					<h2>Rating</h2>
					{rating}
				</div>
				<div>
					<h2>Description</h2>
					<p id="p-data">{data.restaurant.showEstablished()}</p>
					<p id="p-data">Specialties: {data.restaurant.cuisines}</p>
				</div>
				<hr />
				<h2>Comments</h2>
				<div className="row">{comments}</div>
				<hr />
				<h2>Want to add your own Rave or Rant?</h2>
				<form
					// POST COMMENT METHOD
					method="POST"
					action={`/restaurants/${data.restaurant.id}/comment`}
				>
					<div className="row">
						<div className="form-group col-sm-12">
							<label htmlFor="content">Your comment here</label>
							<textarea
								id="content"
								name="content"
								className="form-control text-center"
							></textarea>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="form-group col-sm-5">
							<label htmlFor="author">Author</label>
							<input
								id="author"
								name="author"
								className="form-control text-center"
							/>
						</div>
						<div className="form-group col-sm-5">
							<label htmlFor="stars">Star Rating</label>
							<input
								type="range"
								step="0.5"
								min="1"
								max="5"
								id="stars"
								name="stars"
								className="form-range"
							/>
						</div>
						<div className="form-group col-sm-2">
							<label
								htmlFor="rant"
								className="form-check-label"
								for="rant"
							>
								Rant?
							</label>
							<br />
							<input
								className="form-check-input"
								type="checkbox"
								id="rant"
								name="rant"
								value="yes"
							/>
						</div>
					</div>
					<br />
					<input
						type="submit"
						className="btn btn-primary"
						value="Add Comment"
					/>
				</form>
				<hr />
				<div>
					{/* EDIT BUTTON */}
					<a
						href={`/restaurants/${data.id}/edit`}
						className="btn btn-warning"
					>
						Edit
					</a>
				</div>
				<br />
				<div>
					{/* DELETE BUTTON */}
					<form
						method="POST"
						// DELETE METHOD BELOW
						action={`/restaurants/${data.restaurant.id}?_method=DELETE`}
					>
						<button
							type="submit"
							className="btn btn-danger"
						>
							Delete
						</button>
					</form>
				</div>
			</main>
		</Default>
	);
}

module.exports = show_page;
