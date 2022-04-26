import React from "react";
import banner from "../assets/images/banners/home_banner.png";

function Banner(imageUrl) {
  return (
    <div className="banner">
      <div className="banner__title">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <img className="banner__img" src={banner} alt="Bannière" />
    </div>
  );
}
export default Banner;
