import React from "react";
import "./project.scss";
import ProjectOneImage from "../../images/project1.jpg";
import ProjectTwoImage from "../../images/project2.jpg";
import ProjectThreeImage from "../../images/project3.jpg";
import LaunchIcon from "@mui/icons-material/Launch";

const Project = () => {
  const projects = [
    {
      title: "Travel Agency Website",
      description:
        "I created a complete website for a travel agency called 'Sacred India Tours & Travels' allowing people to explore and book trips to various destinations in India.",
      image: ProjectOneImage,
      url: "https://sacredindiatravels.in/",
    },
    {
      title: "Blogging Website",
      description:
        "I made a website where people who love talking about technology can write and share their articles. It's a place to read and learn about all things tech!",
      image: ProjectTwoImage,
      url: "https://github.com/NishantNirmal2543/Tech-Time",
    },
    {
      title: "Personal Portfolio",
      description:
        "I designed a personal portfolio website to showcase my skills, projects, and experiences, giving others a glimpse into my journey and capabilities.",
      image: ProjectThreeImage,
      url: "/",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-section">
        <h1 className="section-title">Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link">
                    <LaunchIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
