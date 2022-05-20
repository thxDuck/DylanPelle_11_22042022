import React from "react";
import { useState, useEffect } from "react";

import carrousselArrowL from "../../assets/images/icons/carroussel-arrowL.svg";
import carrousselArrowR from "../../assets/images/icons/carroussel-arrowR.svg";

function Carroussel(props) {
	const pictures = props.pictures;
	let [i, setIndex] = useState(0);

	const updatePic = (i, type) => {
		i = type === "+" ? i + 1 : i - 1;
		if (!pictures[i]) {
			if (i > pictures.length - 1) i = 0;
			else i = pictures.length - 1;
		}

		let image = document.getElementById("carrousselImage");
		image.classList.add("blurLoading");
		setTimeout(() => {
			image.classList.remove("blurLoading");
		}, 500);
		setTimeout(() => {
			image.src = pictures[i];
		}, 250);
		setIndex(i);
		let pagination = document.getElementById("pagination");
		pagination.innerHTML = i - 1 + "/" + pictures.length - 1;
		pagination.innerHTML = `${i + 1}/${pictures.length}`;
	};

	const keyboardNavigation = (e) => {
		if (pictures.length > 1) {
			if (e.key === "ArrowRight") {
				updatePic(i, "+");
			} else if (e.key === "ArrowLeft") {
				updatePic(i, "-");
			}
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", keyboardNavigation);
		return () => {
			window.removeEventListener("keydown", keyboardNavigation);
		};
	});
	return (
		<div id="carroussel">
			<img id="carrousselImage" className="" src={pictures[0]} alt="" />
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
