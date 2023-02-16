const React = require('react');
const Default = require('./default');

function Home() {
	return (
		<Default>
			<main>
				<h1>REST-Rant</h1>
				<div>
					<img
						src="/images/homepage.jpeg"
						alt="Burgers and Fries"
					/>
					<div id="unsplash-credits">
						<br />
						<a href="https://unsplash.com/@piak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
							Josip Ivankovic
						</a>{' '}
						<br />
						<a href="https://unsplash.com/photos/YEJnoRg-8mg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
							Unsplash
						</a>
					</div>
				</div>
			</main>
		</Default>
	);
}

module.exports = Home;
