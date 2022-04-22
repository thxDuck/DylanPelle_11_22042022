import logo from "../logo.svg";
import "../App.css";

console.log("Hi ! Home");

function Home() {
	return (
		<div className="App">
			<main className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Welcome To Kasa App !</h1>
			</main>
		</div>
	);
}

export default Home;
