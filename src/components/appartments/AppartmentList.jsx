import React from "react";
import ApartmentCards from "../ApartmentCard";

import Services from "../../services/Services.js";
let page = 1;
const apartmentList = Services.getApartmentList(page);

console.log("apartmentList => ", apartmentList);

function AppartmentList(props) {
	return (
		<section id="cardList" aria-labelledby="Liste des appartements">
			<ul>
				{apartmentList.map((apartment) => (
					<li key={`${apartment.id}`}>
						<ApartmentCards apartId={apartment.id} title={apartment.title} cover={apartment.cover} />
					</li>
				))}
			</ul>
		</section>
	);
}
export default AppartmentList;
