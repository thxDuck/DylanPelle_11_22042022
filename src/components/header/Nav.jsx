import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<Link to="/">
					<li>Accueil</li>
				</Link>
				<Link to="/a-propos">
					<li>à propos</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
