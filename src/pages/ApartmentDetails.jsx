import React from "react";
import Carroussel from "../components/Carroussel.jsx";
import ApartInformations from "../components/ApartInformations.jsx";
import Description from "../components/Description.jsx";

import { useParams } from "react-router-dom";
import Services from "../services/Services";

const getApartment = (id) => {
	return Services.getApartmentById(id);
};
function ApartmentDetails() {
	const params = useParams();
	const id = params.id;
	let appartement = getApartment(id);
	console.log("appartement => ", appartement);
	<React.Fragment>
		<Carroussel images={appartement.pictures} />
		<ApartInformations images={appartement.pictures} />
		<Description />
	</React.Fragment>;
	return <main>TITLE : {appartement.title}</main>;
}

export default ApartmentDetails;

// Todo : I'm here ! Create other pages ! :D Can pass all params in props of compoments !
/* Tips : Descrition
			-- Infomations (localisation,  author...)
			-- dropdown (title, content, ...)

*/
