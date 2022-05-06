// https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7137536-mettez-en-place-votre-state-local-avec-usestate
import React from "react"
import {useState, useEffect} from "react"
import arrowIcon from "../assets/images/icons/dropdownArrow.svg"

// Todo Ajouter un modifier pour modal--sm ou alors -x-l

const toggleDropdown = (nbToggle) => {
	console.log("Hi there ! ", nbToggle)
}

const Dropdown = (props) => {
	const title = props.title
	const content = props.content
	const [show, toggle] = useState(0)
	// console.log("Log => ", show);

	useEffect(() => {
		console.log(`${show} dropdown`)
		let content = document.querySelector(".dropdown__content")
		let icon = document.querySelector(".dropdown__title img")

		if (show) {
			icon.classList.remove("icon-open")
			content.classList.remove("hidden")

			icon.classList.add("icon-close")
			content.classList.add("show")
		} else {
			icon.classList.remove("icon-close")
			content.classList.remove("show")

			icon.classList.add("icon-open")
			content.classList.add("hidden")
		}
	})
	return (
		<div className="dropdown--closed">
			<div className="dropdown__title">
				{title}
				<button type="button" onClick={() => toggle(!show)}>
					<img src={arrowIcon} alt="arrow" />
				</button>
			</div>
			<div className="dropdown__content">{content}</div>
		</div>
	)
}

export default Dropdown
