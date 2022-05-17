import React from "react";
import HostInfo from "./HostInfo.jsx";
import ApartInfos from "./ApartInfos.jsx";

function ApartInformations(props) {
	const host = props.host;
	const location = props.location;
	const tags = props.tags;
	const title = props.title;
	const rating = props.rating;

	return (
		<div id="apartInformations">
			<ApartInfos location={location} tags={tags} title={title} />
			<HostInfo host={host} rating={rating} />
		</div>
	);
}

export default ApartInformations;
