import React from "react";
import Tag from "./Tag";

function ApartInfos(props) {
	const location = props.location;
	const tags = props.tags;
	const title = props.title;

	return (
		<div className="info">
			<div className="info__location">
				<h1>{title}</h1>
				<p>{location}</p>
				<span className="tagList">
					{tags.map((tag, i) => (
						<Tag key={i} title={tag} />
					))}
				</span>
			</div>
		</div>
	);
}

export default ApartInfos;
