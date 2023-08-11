import React from "react";
import "./portfolio.css";
import project1 from "../assets/project-01.png";
import project2 from "../assets/project-02.png";
import project3 from "../assets/project-03.png";
import project4 from "../assets/project-4.png";
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
    id: 1,
    title: "A Social Media Web App",
    image: project2,
    github: "https://github.com/Mahadibappi/social-media-client",
    demo: "https://social-media-client-one.vercel.app/home",
  },
  {
    id: 1,
    title: "An Inventory Management App",
    image: project3,
    github: "https://github.com/Mahadibappi/inventory-frontend",
    demo: "https://inventory-client-flame.vercel.app/dashboard",
  },
  {
    id: 1,
    title: "A Product Selling App",
    image: project4,
    github: "https://github.com/Mahadibappi/full-stack-ecommerce-app-client",
    demo: "https://full-stack-ecommerce-app-client-lac.vercel.app",
  },
  {
    id: 1,
    title: "Travel Booking App",
    image: project5,
    github: "https://github.com/Mahadibappi/tour-exploer-app-client",
    demo: "https://tour-exploer-app-client.vercel.app/login",
  },
  {
    id: 1,
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
                <a href={github} className="btn">
                  Code
                </a>
                <a href={demo} className="btn">
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
