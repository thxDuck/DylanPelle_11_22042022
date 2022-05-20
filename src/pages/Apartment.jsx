import React from "react";
import { useState, useEffect } from "react";

import Carroussel from "../components/appartments/Carroussel.jsx";
import ApartInformations from "../components/appartments/ApartInformations.jsx";
import Description from "../components/appartments/Description.jsx";

import { useParams, useNavigate } from "react-router-dom";
import Services from "../services/Services";
function Apartment() {
	let mockedApartment = {
		id: "",
		pictures: [],
		host: { name: "" },
		rating: "0",
		location: "",
		tags: [],
		description: "",
		equipments: [],
	};
	window.scrollTo(0, 0);
	const [apartement, setApartment] = useState(mockedApartment);
	const [isMounted, setIsMounted] = useState(false);
	const params = useParams();
	const id = params.id;
	const navigate = useNavigate();

	useEffect(() => {
		!isMounted && Services.getApartmentById(id, (datas) => {
			if (!!datas) {
				setApartment(datas);
				setIsMounted(true);
			} else {
				navigate('/404');
			}
		});
	});

	if (isMounted) {
		if (!!apartement && apartement.id === id) {
			return (
				<main role="main">
					<section id="apartmentPage">
						<Carroussel pictures={apartement.pictures} />
						<ApartInformations id={id} host={apartement.host} rating={apartement.rating} location={apartement.location} tags={apartement.tags} title={apartement.title} />
						<Description description={apartement.description} equipments={apartement.equipments} />
					</section>
				</main>
			);
		} else {
			// 	{console.log('REDIRECT !')}
			// <Navigate replace to="/404" />

		}
	}
}

export default Apartment;
