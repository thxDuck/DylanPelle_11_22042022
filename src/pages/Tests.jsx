import React from "react";

import ApartmentCard from "../components/ApartmentCard";
import Tag from "../components/Tag";
import Banner from "../components/Banner";
import homeBanner from "../assets/images/banners/home_banner.png";
import aboutBanner from "../assets/images/banners/about_banner.png";

function Tests() {
	return (
		<main>
			<div
				className="tests"
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}>
				<Banner bannerUrl={homeBanner} />
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
