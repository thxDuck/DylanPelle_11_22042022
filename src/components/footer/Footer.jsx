import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/Logo-white.svg";

function Footer() {
	return (
		<footer role="contentinfo">
			<Link to="/">
				<img src={logo} alt="Logo de Kasa" />
			</Link>
			<p> &copy; 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
