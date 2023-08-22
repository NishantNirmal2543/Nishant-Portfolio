import React from "react";
import "../../style.scss";
import "./Home.scss";
import Experience from "../../components/experience/experience";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "./profile.png";
import aboutbg from "../../images/aboutus.jpg";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Project from "../../components/projects/project";

const handleDownload = () => {
  const resumePath = "/resume.pdf";
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "NishantResume.pdf";
  link.click();
};

const Home = () => {
  return (
    <div className="Home">
      <div className="home-header fade-in">
        <div className="head row g-5">
          <div className="social-icons col-lg-1 col-md-12">
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

            <a href="https://github.com/NishantNirmal2543" aria-label="GitHub">
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/nishant-nirmal-0aa703213"
              aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>

          <div className="header-name col-lg-6 col-md-12">
            <h1>I'm Nishant Nirmal</h1>
            <h1>a Web Developer</h1>

            <button onClick={handleDownload} className="hire-me-button">
              Download Resume
            </button>
          </div>

          <div className="header-image col-lg-5 col-mb-12">
            <img src={profile} alt="profile" className="profile-img"></img>
          </div>
        </div>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <p className="colored-line"></p>

        <div className="home-about-me row g-4">
          <div className="about-content col-lg-8">
            <h3>
              Discover the World of Creative Possibilities: Welcome to My
              Portfolio
            </h3>

            <p>
              I'm Nishant Nirmal, a passionate web developer based in Pune. With
              a flair for crafting captivating websites, I bring ideas to life
              through elegant front-end designs and powerful back-end
              functionalities. Let's build something extraordinary together!
            </p>
          </div>
          <div className="about-card col-lg-4">
            <div className="home-card">
              <div className="card-content">
                <img src={aboutbg} alt="Card" className="home-card-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <Experience />
      </div>

      <div className="project">
        <Project />
      </div>

      <div className="navigator">
        <h1>About</h1>
        <div style={{ marginLeft: "auto" }}>
          <Link className="link" to="/About">
            <ArrowForward className="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
