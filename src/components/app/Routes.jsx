import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import PropertyDetails from "../../pages/PropertyDetails.jsx";
import Error from "../Error";
import "../../styles/style.css";
function RoutesApp() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:id" element={<PropertyDetails />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default RoutesApp;
