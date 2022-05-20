import React from "react";
import Dropdown from "../Dropdown";

function Description(props) {
	const description = props.description;
	const equipments = props.equipments;

	return (
		<section id="description">
			<Dropdown id="desc" size="sm" title="Description" content={description} />
			<Dropdown
				id="equip"
				size="sm"
				title="Equipements"
				content={equipments.map((item, i) => (
					<li key={`equipmentItem-${i}`}>{item}</li>
				))}
			/>
		</section>
	);
}

export default Description;
