import React from "react";

import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<Link to="/">
					<li>Accueil</li>
				</Link>
				<Link to="/thisIsALie">
					<li>A propos</li>
				</Link>
				<Link to="/details/JulienTest">
					<li>A propos</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
