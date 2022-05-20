import React from "react";
import arrowIcon from "../assets/images/icons/dropdownArrow.svg";

const Dropdown = (props) => {
	const title = props.title;
	const content = props.content;
	const id = props.id;
	const size = props.size || "";

	const getDropDownIdByClick = (target) => {
		if (!!target.parentElement.id) return target.parentElement.id;
		if (!!target.parentElement.parentElement.id) return target.parentElement.parentElement.id;
		if (!!target.parentElement.parentElement.parentElement.id) return target.parentElement.parentElement.parentElement.id;
		return false;
	};
	const toggle = (e) => {
		let dropdownId = getDropDownIdByClick(e.target);
		let dropdown = document.querySelector("#" + dropdownId + "");
		let content = document.querySelector("#" + dropdownId + " .content");
		let icon = dropdown.childNodes[0].children[0].children[0];
		let isVisible = icon.classList.contains("init") ? false : icon.classList.contains("rotate");

		if (!isVisible) {
			icon.classList.remove("init");
			content.style.height = `${content.children[0].scrollHeight}px`;
			icon.classList.add("rotate");
		} else {
			content.style.height = `0px`;
			icon.classList.remove("rotate");
		}
	};

	return (
		<div className={`dropdown ${!!size ? "dropdown-" + size : ""}`} id={id}>
			<div className="title" onClick={toggle}>
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
