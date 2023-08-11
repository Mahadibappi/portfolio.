import React from "react";
import "./skill.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const Skill = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container container_skill">
        <div className="frontend_skill">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend_skill">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill_detail">
              <BsFillCheckCircleFill className="skill_icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
