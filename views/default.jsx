const React = require('react');

function Default(html) {
	return (
		<html>
			<head>
				<title>REST-Rant Demo</title>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
					crossorigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://kit.fontawesome.com/b279321401.css"
					crossorigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="/css/style.css"
				/>
			</head>
			<body>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div class="container-fluid">
						<button
							class="navbar-toggler"
							type="button"
							data-mdb-toggle="collapse"
							data-mdb-target="#navbarCenteredExample"
							aria-controls="navbarCenteredExample"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i class="fas fa-bars"></i>
						</button>
						{/* NAV ITEMS */}
						<div
							class="collapse navbar-collapse justify-content-center"
							id="navbarCenteredExample"
						>
							<ul class="navbar-nav mb-2 mb-lg-0">
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="/"
									>
										Home
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="/restaurants"
									>
										Restaurants
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="/restaurants/new"
									>
										Add a Restaurant
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{html.children}
			</body>
		</html>
	);
}

module.exports = Default;
