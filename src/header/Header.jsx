import React from "react";
import "./header.css";
import Cta from "./Cta";
import profile from "../assets/profile-1.jpg";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="title">Mahadi Hasan</h1>
        <h5 className="text-light">Front End Developer (MERN)</h5>
        <Cta />
        <SocialMedia />
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
