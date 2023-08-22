// In EducationItem.js
import React from "react";
import "./education.scss";

const EducationItem = ({ degree, institution, year, index }) => {
  const animationClass =
    index % 2 === 0 ? "slide-from-left" : "slide-from-right";

  return (
    <div className={`education-item ${animationClass}`}>
      <h3>{degree}</h3>
      <p>{institution}</p>
      <p>{year}</p>
    </div>
  );
};

export default EducationItem;
