import React from "react";
import Banner from "../components/Banner";
import bannerSrc from "../assets/images/banners/home_banner.png";
import ApartmentList from "../components/appartments/ApartmentList.jsx";

export default function Home() {
	return (
		<React.Fragment>
			<Banner title="Chez vous, partout et ailleurs" bannerSrc={bannerSrc} />
			<ApartmentList page="0" />
		</React.Fragment>
	);
}
