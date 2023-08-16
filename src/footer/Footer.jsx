/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Mahadi
      </a>
      <ul className="footer_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_icons">
        <a href="https://www.facebook.com/kazi.bappe.7/">
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/mahadi-bappe/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Mahadibappi?tab=repositories">
          <BsGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Mahadi 2023 , All Right Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
