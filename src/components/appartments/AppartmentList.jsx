import React from "react";
import ApartmentCards from "../ApartmentCard";
import Services from "../../services/Services.js";
import { useState, useEffect } from "react";

const placeholders = [];

function AppartmentList() {
	const [apartmentList, setApartments] = useState(placeholders);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		!isMounted &&
			Services.getApartmentList(1, (datas) => {
				const cardList = document.getElementById("cardList");
				if (!!cardList.classList.contains("blur")) cardList.classList.remove("blur");
				setApartments(datas);
				setIsMounted(true);
			});
	}, [isMounted]);

	return (
		<section id="cardList" className="blur" aria-labelledby="Liste des appartements">
			<ul id="list">
				{apartmentList.map((apartment, index) => (
					<li className={`${"item-" + index++}`} key={`${apartment.id}`}>
						<ApartmentCards apartid={apartment.id} title={apartment.title} order={index} cover={apartment.cover} />
					</li>
				))}
			</ul>
		</section>
	);
}
export default AppartmentList;
