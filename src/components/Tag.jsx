import React from "react";

function Tag(props) {
	const title = props.title;
	return <div className="tag">{title}</div>;
}

export default Tag;
