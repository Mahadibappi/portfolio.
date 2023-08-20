import React from "react";
import "./about.css";
import profile from "../assets/profile-2.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_image">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="about_content">
          <article>
            As a dedicated front end focused MREN stack developer, My passion
            for clean, maintainable code drives me to seek up-to-date with the
            latest industry trends and best practices. My portfolio showcases a
            range of projects, from complex dashboard platforms to portfolio
            websites. Throughout my journey I encountered several significant
            challenges during various projects, each of which bring an
            opportunity for growth and innovation. One notable instance was when
            I faced a data synchronization issue between the front-end and the
            back-end API. With determination and a problem-solving mindset, I
            solved the issue through rigorous testing and debugging.
          </article>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
