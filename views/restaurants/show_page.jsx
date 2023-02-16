const React = require('react');
const Default = require('../default');

function show_page(data) {
	return (
		<Default>
			<main>
				<h1>{data.restaurant.name}</h1>
				<div>
					<h2>Rating</h2>
					<p>No ratings, yet!</p>
				</div>
				<div>
					<h2>Description</h2>
					<p>
						Located in {data.restaurant.city}, {data.restaurant.state}
					</p>
					<p>Specialties: {data.restaurant.cuisines}</p>
				</div>
				<div>
					<h2>Comments</h2>
					<p>No comments, yet!</p>
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
						action={`/restaurants/${data.id}?_method=DELETE`}
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
