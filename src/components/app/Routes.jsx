import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Tests from "../../pages/Tests.jsx";
import PropertyDetails from "../../pages/PropertyDetails.jsx";
import Error from "../Error";
function RoutesApp() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tests" element={<Tests />} />
			<Route path="/details/:id" element={<PropertyDetails />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default RoutesApp;
