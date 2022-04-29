import React from "react";
import { Link } from "react-router-dom";
function ApartmentCard(props) {
	const id = props.apartId;
	const apartmentUrl = `/details/${id}`;
	const title = props.title;
	const cover = props.cover;
	return (
		<Link className="card" to={apartmentUrl}>
			<img src={cover} alt="" />
			<div className="card__title">{title}</div>
		</Link>
	);
}

export default ApartmentCard;
