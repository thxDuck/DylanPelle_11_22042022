import React from "react";
import { useParams } from "react-router-dom";

function ApartmentDetails() {
	const params = useParams();
	const id = params.id;
	console.log("params => ", params);
	return <div>Détails du logement no : {id}</div>;
}

export default ApartmentDetails;
