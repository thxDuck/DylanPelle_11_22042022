import React from "react";
import Banner from "../components/Banner.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Services from "../services/Services";
import aboutBanner from "../assets/images/banners/about_banner.png";

const getAboutText = () => {
	return Services.getAboutText();
};

const About = () => {
	const aboutTexts = getAboutText();
	document.getElementsByTagName("title")[0].innerHTML = `Kasa - A propos`;

	return (
		<React.Fragment>
			<Banner title="" bannerSrc={aboutBanner} />
			{aboutTexts.map((item, index) => (
				<Dropdown id={`about-item-${index}`} key={`about-item-${index}`} title={item.title} content={item.content} />
			))}
		</React.Fragment>
	);
};
export default About;
