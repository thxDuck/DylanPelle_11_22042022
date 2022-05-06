import React from "react";
import Banner from "../components/Banner";
import bannerSrc from "../assets/images/banners/home_banner.png";
import AppartmentList from "../components/appartments/AppartmentList.jsx";

export default function Home() {
	return (
		<React.Fragment>
			<Banner title="Chez vous, partout et ailleurs" bannerSrc={bannerSrc} />
			<AppartmentList page="0" />
		</React.Fragment>
	);
}
