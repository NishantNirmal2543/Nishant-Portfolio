import React, { useEffect, useRef, useState, useCallback } from "react";
import "./SkillBar.scss";

const SkillBar = ({ skill, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);
  const observerCleanup = useCallback((node) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold value as needed
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    observerCleanup(skillRef.current);
  }, [observerCleanup]);

  return (
    <div
      className={`skill-bar ${isVisible ? "animate filled" : ""}`}
      ref={skillRef}>
      <div className="skill-name">{skill}</div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${isVisible ? percentage : 0}%` }}>
          {/* Display the percentage on hover */}
          <div className="percentage">{isVisible ? `${percentage}%` : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
