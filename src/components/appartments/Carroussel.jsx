import React from "react";
import { useState, useEffect } from "react";

import carrousselArrowL from "../../assets/images/icons/carroussel-arrowL.svg";
import carrousselArrowR from "../../assets/images/icons/carroussel-arrowR.svg";

function Carroussel(props) {
	const pictures = props.pictures;
	let [i, setIndex] = useState(0);

	const keyboardNavigation = (e) => {
		if (pictures.length > 1) {
			if (e.key === "ArrowRight") {
				updatePic(i, "+");
			} else if (e.key === "ArrowLeft") {
				updatePic(i, "-");
			}
		}
	};
	const switchImage = (currentImage, nextImage) => {
		setTimeout(() => {
			currentImage.classList.toggle("disapear");
			currentImage.classList.toggle("d-none");

			nextImage.classList.remove("d-none");
			nextImage.classList.toggle("appear");
		}, 300);
	};
	const updatePic = (i, type) => {
		const currentImage = document.querySelector(`img[data-index="${i}"]`);
		i = type === "+" ? i + 1 : i - 1;
		if (!pictures[i]) {
			if (i > pictures.length - 1) i = 0;
			else i = pictures.length - 1;
		}
		setIndex(i);
		const nextImage = document.querySelector(`img[data-index="${i}"]`);
		currentImage.classList.toggle("disapear");
		switchImage(currentImage, nextImage);

		const pagination = document.getElementById("pagination");
		console.log("i => ", i);
		pagination.innerHTML = `${i + 1}/${pictures.length}`;
	};

	useEffect(() => {
		window.addEventListener("keydown", keyboardNavigation);
		return () => {
			window.removeEventListener("keydown", keyboardNavigation);
		};
	});

	return (
		<div id="carroussel">
			{pictures.map((src, i) => (
				<img data-index={i} src={src} key={i} alt="" className={`carrousselImage ${i !== 0 ? "d-none" : ""}`} />
			))}
			<div className={`buttons ${pictures.length <= 1 ? "hide" : ""}`}>
				<button type="button" aria-label="Précédant" className="buttons--previous btn" tabIndex={1} onClick={() => updatePic(i, "-")}>
					<img src={carrousselArrowL} alt="" />
				</button>
				<button type="button" aria-label="Suivant" className="buttons--next btn lol" tabIndex={2} onClick={() => updatePic(i, "+")}>
					<img src={carrousselArrowR} alt="" />
				</button>
			</div>
			<div id="pagination" aria-label="Pagination" className="pagination">
				{`1/${pictures.length}`}
			</div>
		</div>
	);
}

export default Carroussel;
