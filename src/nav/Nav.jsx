import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookHeart } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : " "}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : " "}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActive("#skills")}
        className={active === "#skills" ? "active" : " "}
      >
        <BiBookHeart />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : " "}
      >
        <BiSolidMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
