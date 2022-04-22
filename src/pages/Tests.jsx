import React from "react";

import ApartmentCard from "../components/ApartmentCard";
import Tag from "../components/Tag";

function Tests() {
	return (
		<div
			className="tests"
			style={{
				display: "flex",
				justifyContent: "space-around",
			}}>
			<ApartmentCard />
			<Tag />
		</div>
	);
}

export default Tests;
