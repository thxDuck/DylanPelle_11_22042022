import React from "react";
import Banner from "../components/Banner";
import ApartmentList from "../components/appartments/ApartmentList.jsx";
import bannerSrc from "../assets/images/banners/home_banner.png";

export default function Home() {
	document.getElementsByTagName("title")[0].innerHTML = `Kasa - Accueil`;
	window.scrollTo(0, 0);
	return (
		<React.Fragment>
			<Banner title="Chez vous, partout et ailleurs" bannerSrc={bannerSrc} />
			<ApartmentList page="1" />
		</React.Fragment>
	);
}
