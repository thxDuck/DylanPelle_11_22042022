import React from "react";
import Carroussel from "../components/Carroussel.jsx";
import ApartInformations from "../components/ApartInformations.jsx";
import Description from "../components/Description.jsx";

import { useParams } from "react-router-dom";
import Services from "../services/Services";

const getApartment = (id) => {
	return Services.getApartmentByIdFast(id);
};

// TODO : Get aparment by async function

function Apartment() {
	const params = useParams();
	const id = params.id;
	let appartement = getApartment(id);
	window.scrollTo(0, 0);

	return (
		<section id="apartmentPage">
			<Carroussel pictures={appartement.pictures} />
			<ApartInformations host={appartement.host} rating={appartement.rating} location={appartement.location} tags={appartement.tags} title={appartement.title} />
			<Description description={appartement.description} equipments={appartement.equipments} />
		</section>
	);
}

export default Apartment;
