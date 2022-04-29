import React from "react";

function Banner(props) {
	const bannerSrc = props.bannerSrc;
	return (
		<div className="banner">
			<h1>Chez vous, partout et ailleurs</h1>
			<img className="banner__img" src={bannerSrc} alt="Bannière" />
		</div>
	);
}
export default Banner;
