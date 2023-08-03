import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="header_social">
      <a href="https://www.linkedin.com/in/mahadi-bappe/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mahadibappi">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/kazi.bappe.7">
        <BsFacebook />
      </a>
    </div>
  );
};

export default SocialMedia;
