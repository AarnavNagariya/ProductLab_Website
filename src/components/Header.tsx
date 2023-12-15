import React from "react";
import "./Header.css";
import iiitNewLogo from "../assets/iiit-new.png";


function Header() {
  return (
    <>
        <div className="bigrowcolumn">
            <img src={iiitNewLogo} alt="Logo" />
        </div>
    </>
  );
}

export default Header;
