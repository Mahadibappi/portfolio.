import React from "react";
import resume from "../assets/RESUME OF MAHADI.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        My Resume
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
