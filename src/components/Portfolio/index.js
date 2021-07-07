import Project from "../Project";
import React from "react";



function Portfolio() {
  const portfolio = [
    {
      id: 1,
      title: "The Gun Show",
      link: "https://thawing-plains-49978.herokuapp.com/",
      github: "https://github.com/thecatwest/JustTechGunShow",
      image: "../../assets/portfolio/gun-show.png",
      description: "A social media app designed specifically with workouts in mind. Users can connect with other clients, create workout routines to share, and comment on other posts by users."
    },
    {
      id: 2,
      title: "Daily Planner",
      link: "https://thecatwest.github.io/weather-dashboard/",
      github: "https://github.com/thecatwest/weather-dashboard",
      image: "../../assets/portfolio/weather-dash.png",
      description: "An app that allows users to search the local weather by city."
    },
    {
      id: 3,
      title: "The Gun Show",
      link: "https://thawing-plains-49978.herokuapp.com/",
      github: "https://github.com/thecatwest/JustTechGunShow",
      image: "../../assets/portfolio/gun-show.png",
      description: "A social media app designed specifically with workouts in mind. Users can connect with other clients, create workout routines to share, and comment on other posts by users."
    },
    {
      id: 4,
      title: "Daily Planner",
      link: "https://thecatwest.github.io/weather-dashboard/",
      github: "https://github.com/thecatwest/weather-dashboard",
      image: "../../assets/portfolio/weather-dash.png",
      description: "An app that allows users to search the local weather by city."
    },
  ];
  return (
    <div>
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
  );
}

export default Portfolio;
