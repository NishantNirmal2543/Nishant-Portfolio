import React, { useState } from "react";
import "./experience.scss";
import companylogo from "../../images/company-logo.png";

const Experience = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="experience">
      <div className="background-pattern"></div>
      <div className="content">
        <h1>Experience</h1>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img
                src={companylogo}
                alt="Company Logo"
                className="company-logo"
              />
              <h3>Web Developer</h3>
            </div>
            <div className="card-body">
              <p className="company-name">Gyan Eduversity</p>
              <p className="duration">3 Months (1 Feb 2023 - 30 Apr 2023)</p>
              <div
                className={`description ${showDescription ? "expanded" : ""}`}>
                Crafted a full-stack website from scratch during my web
                development internship. Led the project independently, designing
                and implementing front-end and back-end functionalities.
                Delivered a responsive, user-friendly site, showcasing expertise
                in project management and self-reliance.
              </div>
              <button
                className={`read-more ${showDescription ? "expanded" : ""}`}
                onClick={toggleDescription}>
                {showDescription ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
