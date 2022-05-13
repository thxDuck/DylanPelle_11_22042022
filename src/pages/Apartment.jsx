import React from "react";
import Carroussel from "../components/Carroussel.jsx";
import ApartInformations from "../components/ApartInformations.jsx";
import Description from "../components/Description.jsx";

import { useParams } from "react-router-dom";
import Services from "../services/Services";

const getApartment = (id) => {
	return Services.getApartmentByIdFast(id);
};
function Apartment() {
	const params = useParams();
	const id = params.id;
	let appartement = getApartment(id);

	console.log("appartement => ", appartement);

	return (
		<section id="apartmentPage">
			<Carroussel images={appartement.pictures} />
			<ApartInformations host={appartement.host} rating={appartement.rating} location={appartement.location} tags={appartement.tags} title={appartement.title} />
			<Description description={appartement.description} equipments={appartement.equipments} />
		</section>
	);
}

export default Apartment;
/*
// WIP Async datas
import React from "react";
import Carroussel from "../components/Carroussel.jsx";
import ApartInformations from "../components/ApartInformations.jsx";
import Description from "../components/Description.jsx";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Services from "../services/Services";

// const getApartment = (id) => {
// 	return Services.getApartmentById(id);
// };
const appartement = {};
function Apartment() {
	const [apartmentList, setApartments] = useState(appartement);
	const [isMounted, setIsMounted] = useState(false);
	const params = useParams();
	const id = params.id;

	useEffect(() => {
		console.log("apartmentId => ", id);
		!isMounted &&
			Services.getApartmentById(id, (apartment) => {
				// console.log("apartmenta => ", apartment);
				setApartments(apartment);
				setIsMounted(true);
			});
	}, [isMounted]);

	<React.Fragment>
		<Carroussel images={appartement.pictures} />
		<ApartInformations images={appartement.title} />
		<h1>{appartement.title}</h1>
		<Description />
	</React.Fragment>;
	return <main>TITLE : {appartement.title}</main>;
}

export default Apartment;

*/
