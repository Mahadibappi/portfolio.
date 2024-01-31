import React from "react";
import "./portfolio.css";
import project1 from "../assets/project-01.png";
import project2 from "../assets/project-02.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-04.png";
import project5 from "../assets/project-05.png";
import project6 from "../assets/project-06.png";

const data = [
  {
    id: 1,
    title: "A Dashboard for Sales Tracking",
    image: project1,
    github: "https://github.com/Mahadibappi/admin-client",
    demo: "https://admin-client-xi.vercel.app/dashboard",
  },
  {
    id: 2,
    title: "A Real Estate App",
    image: project2,
    github: "https://github.com/Mahadibappi/MERN-Real-Estate",
    demo: "https://mern-real-estate.vercel.app/",
  },
  {
    id: 3,
    title: "An Inventory Management App",
    image: project3,
    github: "https://github.com/Mahadibappi/inventory-frontend",
    demo: "https://inventory-client-flame.vercel.app/dashboard",
  },

  {
    id: 4,
    title: "Travel Booking App",
    image: project4,
    github: "https://github.com/Mahadibappi/tour-exploer-app-client",
    demo: "https://tour-exploer-app-client.vercel.app/login",
  },
  {
    id: 5,
    title: "A Social Media App",
    image: project5,
    github: "https://github.com/Mahadibappi/social-media-client",
    demo: "https://social-media-client-one.vercel.app/home",
  },
  {
    id: 6,
    title: "Expense Tracking App",
    image: project6,
    github: "https://github.com/Mahadibappi/react-expense-tracker",
    demo: "https://react-expense-tracker-opal.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_link">
                <a href={github} className="btn" target="_blank">
                  Code
                </a>

                <a href={demo} className="btn" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
