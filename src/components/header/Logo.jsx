import React from "react";
import logo from "../../assets/images/logos/Logo.svg";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default Logo;
