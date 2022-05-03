import React from "react";
import { Link } from "react-router-dom";
import Utils from "../services/utils.js";

function ApartmentCard(props) {
	const id = props.apartId;
	const title = props.title;
	let encodedTitle = Utils.encodeToUrl(title);

	const apartmentUrl = `/details/${id}/${encodedTitle}`;
	const cover = props.cover;
	return (
		<Link className="card" apartId={id} to={apartmentUrl}>
			<img src={cover} alt="" />
			<div className="card__title">{title}</div>
		</Link>
	);
}

export default ApartmentCard;
