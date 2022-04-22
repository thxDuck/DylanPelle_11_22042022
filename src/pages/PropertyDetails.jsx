import React from "react";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
	const params = useParams();
	const id = params.id;
	console.log("params => ", params);
	return <div>Détails du logement no : {id}</div>;
}
