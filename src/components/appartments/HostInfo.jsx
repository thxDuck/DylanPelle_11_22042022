import React from "react";

import starCheck from "../../assets/images/icons/star-checked.svg";
import starUncheck from "../../assets/images/icons/star-unchecked.svg";

function HostInfo(props) {
	const host = props.host;
	let nameSplited = host.name.split(" ");

	let rating = props.rating;
	rating = parseInt(rating);
	let ratingTab = [];
	for (let i = 0; i < 5; i++) {
		ratingTab.push(i < rating ? starCheck : starUncheck);
	}
	return (
		<div className="host">
			<div className="host__info">
				<div className="host__info__name">
					{nameSplited.map((item, i) => (
						<span key={i}>{item}</span>
					))}
				</div>
				<div className="host__info__picture">
					<img className="profilePic" src={host.picture} alt={host.name} />
				</div>
			</div>
			<div className="host__rating">
				{ratingTab.map((star, i) => (
					<img className="star" key={i} src={star} alt="star" />
				))}
			</div>
		</div>
	);
}

export default HostInfo;
