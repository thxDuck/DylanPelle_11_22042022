import React from "react";

import ApartmentCard from "../components/ApartmentCard";
import Tag from "../components/Tag";
import Banner from "../components/Banner";

function Tests() {
	return (
		<main>
			<div
				className="tests"
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}>
					<Banner />
			</div>
			
			<div
				className="tests"
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}>
				<ApartmentCard />
				<Tag />
			</div>
	</main>

		
	);
}

export default Tests;
