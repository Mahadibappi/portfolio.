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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            at in eum corrupti nisi eaque neque labore asperiores voluptates
            minima. Maiores eligendi quidem praesentium sed quia iusto aut
            repellendus ut eius eaque optio ducimus, accusantium odio alias esse
            adipisci, dolorum atque quo numquam! Molestias fuga esse numquam cum
            dolores. Atque!
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
