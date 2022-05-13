import React from "react";
import { Link } from "react-router-dom";
import Utils from "../services/utils.js";

function ApartmentCard(props) {
	const id = props.apartid;
	const title = props.title;
	const order = props.order;
	let encodedTitle = Utils.encodeToUrl(title);

	const apartmentUrl = `/appartement/${id}/${encodedTitle}`;
	const cover = props.cover;
	return (
		<Link className={`card ${"item-" + order}`} apartid={id} to={apartmentUrl}>
			<img src={cover} alt="" />
			<div className="card__title">{title}</div>
		</Link>
	);
}

export default ApartmentCard;
