import React from "react";
import "./Header.css";
import iiitNewLogo from "../assets/iiit-new.png";
import Image from "next/image";


function Header() {
  return (
    <div className="bigrowcolumn">
      <Image src={iiitNewLogo} alt="Logo" />
    </div>
  );
}

export default Header;
