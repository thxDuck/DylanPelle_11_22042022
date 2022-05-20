import React from "react";
import ApartmentCards from "./ApartmentCard";
import Services from "../../services/Services.js";
import { useState, useEffect } from "react";

const placeholders = [];

function AppartmentList() {
	const [ApartmentList, setApartments] = useState(placeholders);
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
		<main role="main">
			<section id="cardList" className="blur" aria-label="Liste des appartements">
				<ul id="list">
					{ApartmentList.map((apartment, index) => (
						<li className={`${"item-" + index++}`} key={`${apartment.id}`}>
							<ApartmentCards apartid={apartment.id} title={apartment.title} order={index} cover={apartment.cover} />
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
export default AppartmentList;
