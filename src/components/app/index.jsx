import React from "react";
import Header from "../header/Header";
import RoutesApp from "./Routes";
import { BrowserRouter } from "react-router-dom";

// Needs to set Headers, routes, footer...
function App() {
	return (
		<BrowserRouter>
			<Header />
			<RoutesApp />
		</BrowserRouter>
	);
}
export default App;
