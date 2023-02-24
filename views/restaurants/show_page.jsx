const React = require('react');
const Default = require('../default');

function show_page(data) {
	let comments = <h3 className="inactive">No comments, yet!</h3>;
	if (data.restaurant.comments.length) {
		comments = data.restaurant.comments.map((c) => {
			return (
				<div className="border">
					<h2 className="rant">{c.rant ? 'Rant! 😒' : 'Rave! 😎'}</h2>
					<h4>{c.content}</h4>
					<h3>
						<stong>- {c.author}</stong>
					</h3>
					<h4>Rating: {c.stars}</h4>
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
					<p id="p-data">No ratings, yet!</p>
				</div>
				<div>
					<h2>Description</h2>
					<p id="p-data">{data.restaurant.showEstablished()}</p>
					<p id="p-data">Specialties: {data.restaurant.cuisines}</p>
				</div>
				<div>
					<h2>Comments</h2>
					{comments}
				</div>
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
