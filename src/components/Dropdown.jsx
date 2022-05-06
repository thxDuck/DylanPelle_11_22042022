// https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7137536-mettez-en-place-votre-state-local-avec-usestate
import React from "react";
import { useState, useEffect } from "react";
import arrowIcon from "../assets/images/icons/dropdownArrow.svg";

// Todo Ajouter un modifier pour modal--sm ou alors -x-l
// WIP about texte

const Dropdown = (props) => {
	const title = props.title;
	const content = props.content;
	const [show, toggle] = useState(false);

	useEffect(() => {
		let content = document.querySelector(".dropdown .content");
		let icon = document.querySelector(".dropdown .title .icon");

		if (show) {
			icon.classList.remove("init");
			content.style.height = `${content.children[0].scrollHeight}px`;
			icon.classList.add("rotate");
		} else {
			content.style.height = `0px`;
			icon.classList.remove("rotate");
		}
	});
	return (
		<div className="dropdown">
			<div className="title" onClick={() => toggle(!show)}>
				{title}
				<button type="button" className="icon-toggle">
					<img className="icon init" src={arrowIcon} alt="arrow" />
				</button>
			</div>
			<div className="content">
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Dropdown;
