import React from "react";
import "./Portfolio.scss";
import portfoliobg from "../../images/portfoliobg.jpg";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProjectOneImage from "../../images/project1.jpg";
import ProjectTwoImage from "../../images/project2.jpg";
import ProjectThreeImage from "../../images/project3.jpg";
import Project from "../../components/project/singleproject";

const Portfolio = () => {
  const projects = [
    {
      name: "Travel Agency Website",
      description:
        "I created a complete website for a travel agency called 'Sacred India Tours & Travels' allowing people to explore and book trips to various destinations in India.",
      image: ProjectOneImage,
      link: "https://sacredindiatravels.in/",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "BootStrap"],
    },
    {
      name: "Blogging Website",
      description:
        "I made a website where people who love talking about technology can write and share their articles. It's a place to read and learn about all things tech!",
      image: ProjectTwoImage,
      link: "https://github.com/NishantNirmal2543/Tech-Time",
      skills: [
        "React",
        "Node.js",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "BootStrap",
      ],
    },
    {
      name: "Portfolio Website",
      description:
        "I designed a personal portfolio website to showcase my skills, projects, and experiences, giving others a glimpse into my journey and capabilities.",
      image: ProjectThreeImage,
      link: "/",
      skills: ["React", "HTML", "CSS", "JavaScript", "BootStrap"],
    },
  ];

  return (
    <div className="portfolio">
      <div className="header">
        <div className="heading">Portfolio</div>
        <div
          className="portfolio-image"
          style={{ backgroundImage: `url(${portfoliobg})` }}></div>
      </div>

      <div className="project-section-portfolio">
        <h1>See My Latest Work</h1>
        <div className="projects-portfolio">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              skills={project.skills}
            />
          ))}
        </div>
      </div>

      <div className="navigator">
        <h1>Contact</h1>
        <div style={{ marginLeft: "auto" }}>
          <Link className="link" to="/Contact">
            <ArrowForward className="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
