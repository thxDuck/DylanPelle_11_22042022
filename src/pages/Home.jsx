import React from "react";

export default function Home() {
	return (
		<div className="App">
			<main className="App-header">
				<h1>This is an h1</h1>
				<h2>This is an h2!</h2>
				<p className="txt-primary">This is a text with primary color</p>
				<div
					className="bg-primary"
					style={{
						width: 150,
						height: 150,
						padding: 15,
					}}>
					<div
						className="bg-light"
						style={{
							width: 50,
							height: 50,
						}}></div>
				</div>
			</main>
		</div>
	);
}
