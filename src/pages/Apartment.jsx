import React from "react";
import { useState, useEffect } from "react";

import Carroussel from "../components/Carroussel.jsx";
import ApartInformations from "../components/ApartInformations.jsx";
import Description from "../components/Description.jsx";

import { useParams } from "react-router-dom";
import Services from "../services/Services";

let mockedApartment = {
	pictures: [],
	host: { name: "" },
	rating: "0",
	location: "",
	tags: [],
	description: "",
	equipments: [],
};
function Apartment() {
	window.scrollTo(0, 0);
	const params = useParams();
	const id = params.id;
	const [apartement, setApartment] = useState(mockedApartment);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		!isMounted &&
			Services.getApartmentById(id, (datas) => {
				setApartment(datas);
				setIsMounted(true);
			});
	}, [isMounted]);
	if (isMounted) {
		return (
			<section id="apartmentPage">
				<Carroussel pictures={apartement.pictures} />
				<ApartInformations host={apartement.host} rating={apartement.rating} location={apartement.location} tags={apartement.tags} title={apartement.title} />
				<Description description={apartement.description} equipments={apartement.equipments} />
			</section>
		);
	}
}

export default Apartment;
