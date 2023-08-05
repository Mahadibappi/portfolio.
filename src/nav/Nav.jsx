import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookHeart } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
const Nav = () => {
  return (
    <div>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <BiBookHeart />
      </a>
      <a href="#contact">
        <BiSolidMessageDetail />
      </a>
    </div>
  );
};

export default Nav;
