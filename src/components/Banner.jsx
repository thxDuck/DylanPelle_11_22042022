import React from "react";

function Banner(props) {
	const bannerSrc = props.bannerSrc;
	const title = props.title;
	return (
		<div className="banner">
			<h1>{title}</h1>
			<img className="banner__img" src={bannerSrc} alt="Bannière" />
		</div>
	);
}
export default Banner;
