import React from "react";
import "./header.css";
import Cta from "./Cta";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mahadi Hasan</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <Cta />
      </div>
    </header>
  );
};

export default Header;
