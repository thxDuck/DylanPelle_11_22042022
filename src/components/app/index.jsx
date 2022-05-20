import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer.jsx";
import RoutesApp from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "../../styles/style.css";

function App() {
	return (
		<BrowserRouter>
			<div className="main">
				<Header />
				<RoutesApp />
			</div>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
