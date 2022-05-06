import React from "react";
import Banner from "../components/Banner.jsx";
import Dropdown from "../components/Dropdown.jsx";

import aboutBanner from "../assets/images/banners/about_banner.png";
const About = () => {
	return (
		<React.Fragment>
			<Banner title="" bannerSrc={aboutBanner} />
			<Dropdown title={"Title of dropdown"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."} />
		</React.Fragment>
	);
};
export default About;
