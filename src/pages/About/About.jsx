import React from "react";
import "./About.scss";
import "../../style.scss";
import profile from "../../images/profile.jpg";
import aboutbg2 from "../../images/aboutbg2.jpg";
import SkillBar from "../../components/skillbar/SkillBar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { ArrowForward, School } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const About = () => {
  const skillsData = [
    { skill: "HTML", percentage: 95 },
    { skill: "CSS", percentage: 95 },
    { skill: "JavaScript", percentage: 80 },
    { skill: "C++", percentage: 80 },
    { skill: "Python", percentage: 75 },
    { skill: "React Js", percentage: 80 },
    { skill: "Node Js", percentage: 80 },
    { skill: "PHP", percentage: 85 },
    { skill: "MySQL", percentage: 85 },
    { skill: "MongoDB", percentage: 80 },
  ];

  return (
    <div className="about">
      <div className="header">
        <div className="heading">About</div>
        <div
          className="about-image"
          style={{ backgroundImage: `url(${aboutbg2})` }}></div>
      </div>

      {/* About Me section */}
      <div className="about-me">
        <div className="about-me-content row ">
          <div className="about_card col-lg-4">
            <div className="about-card">
              <div className="about-card-content">
                <img src={profile} alt="Card" className="about-card-image" />
              </div>
            </div>
          </div>
          <div className="about-me-info1 col-lg-4">
            <h3>
              Crafting Captivating and User-Friendly Digital Experiences with a
              Creative Mindset
            </h3>
            <p>
              Hi I'm Nishant Nirmal a passionate web developer dedicated to
              creating captivating and user-friendly digital experiences,
              combining my technical expertise with a creative mindset to craft
              innovative solutions that leave a lasting impact.
            </p>

            <Link className="link" to="/Contact">
              Contact Me
            </Link>
          </div>
          <div className="about-me-info2 col-lg-4">
            <h3>Education and Focus</h3>
            <p>
              I'm pursuing an engineering degree in Artificial Intelligence and
              Data Science. Integrating AI into web development, I seek to
              create intelligent and personalized user experiences.
            </p>

            <div className="social-logo ">
              <a
                href="https://instagram.com/nishantnirmal2543"
                aria-label="Instagram">
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com/your_facebook_username"
                aria-label="Facebook">
                <FacebookIcon />
              </a>

              <a
                href="https://github.com/NishantNirmal2543"
                aria-label="GitHub">
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-nirmal-0aa703213"
                aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="skills-section">
        <div className="skills-container">
          <div className="skills-box row g-5">
            <div className="skill-intro col-lg-6">
              <div className="skill-intro-content">
                <h1>My Skills</h1>
                <p>
                  In the realm of software development, my skills forge lines of
                  code into digital symphonies, harmonizing innovation and
                  precision to bring transformative solutions to life.
                </p>
              </div>
            </div>
            <div className="skills col-lg-6">
              <div className="skill">
                {skillsData.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education section */}
      <div className="education">
        <h1>Education</h1>
        <div className="education-container">
          <VerticalTimeline lineColor="#ec5b53">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{
                background: "#cf332b",
                color: "#fff",
              }}
              icon={<School />}
              date="2008-2018">
              <h3>Secondary School Certificate</h3>
              <p>ST. John's School, Rahata</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{
                background: "#cf332b",
                color: "#fff",
              }}
              icon={<School />}
              date="2018-2020">
              <h3>Higher Secondary Certificate</h3>
              <p>Sanjivani Junior College, Kopargaon</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{
                background: "#cf332b",
                color: "#fff",
              }}
              icon={<School />}
              date="2020-2024">
              <h3>B.E (Artificial Intelligence and Data Science)</h3>
              <p>Dr. D.Y.Patil College of Engineering, Akurdi, Pune</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <div className="navigator">
        <h1>Portfolio</h1>
        <div style={{ marginLeft: "auto" }}>
          <Link className="link" to="/Portfolio">
            <ArrowForward className="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
