import React from "react";
import "./singleproject.scss"; // Import your SCSS styles

const Project = ({ name, description, image, link, skills }) => {
  return (
    <div className="singleproject row">
      <div className="col-lg-6 singleproject_image">
        <div className="computer-frame">
          <div className="stand"></div>
          <div className="base"></div>
          <div className="screen">
            <img src={image} alt={name} className="project-img" />
          </div>
        </div>
      </div>

      <div className="project-info col-lg-6">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="skills">
          <strong>Skills:</strong> {skills.join(", ")}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-project">
          <span>Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Project;
