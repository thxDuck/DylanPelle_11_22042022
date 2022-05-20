import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Apartment from "../../pages/Apartment.jsx";
import About from "../../pages/About.jsx";
import Error from "../Error";

function RoutesApp() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/a-propos" element={<About />} />
			<Route path="/appartement/:id/:title" element={<Apartment />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default RoutesApp;
