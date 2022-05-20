import React from "react";
import logo from "../../assets/images/logos/Logo-white.svg";

function Footer() {
	return (
		<footer role="contentinfo">
			<img src={logo} alt="Logo de Kasa" />
			<p> &copy; 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
