import Project from "../Project";
import React from "react";
// import { render } from "react-dom";


function Portfolio() {
  const portfolio = [
    {
      id: 1,
      title: "The Gun Show",
      link: "https://thawing-plains-49978.herokuapp.com/",
      github: "https://github.com/thecatwest/JustTechGunShow",
      image:require('../../assets/portfolio/gun-show.png').default,
      description:
        "A social media app designed specifically with workouts in mind.",
    },
    {
      id: 2,
      title: "Daily Planner",
      link: "https://github.com/thecatwest/team-generator",
      github: "https://github.com/thecatwest/weather-dashboard",
      image:require('../../assets/portfolio/weather-dash.png').default,
      description:
        "An app that allows users to search the local weather by city.",
    },
    {
      id: 3,
      title: "Trade Secret",
      link: "http://shawnlittrel-trade-secret.herokuapp.com/",
      github: "https://github.com/shawnlittrel/CRM-Tools",
      image:require('../../assets/portfolio/crm-tools.png').default,
      description:
        "A CRM tool that allows companies to control service calls, etc from a single app.",
    },
    {
      id: 4,
      title: "Daily Planner",
      link: "https://thecatwest.github.io/weather-dashboard/",
      github: "https://github.com/thecatwest/weather-dashboard",
      image:require('../../assets/portfolio/weather-dash.png').default,
      description:
        "An app that allows users to search the local weather by city.",
    }
  ];

  const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  };

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div style={style}>
      {portfolio.map((project) => (
        <Project
          id={project.id}
          title={project.title}
          link={project.link}
          github={project.github}
          image={project.image}
          description={project.description}
          key={project.id}
        />
      ))}
      </div>
    </section>
  );
}

export default Portfolio;
