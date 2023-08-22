import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social row g-5">
        <div className="social-logo col-lg-4 col-md-12">
          <a
            href="https://instagram.com/nishantnirmal2543"
            aria-label="Instagram">
            <InstagramIcon className="social-icon-logof" />
          </a>

          <a
            href="https://www.facebook.com/your_facebook_username"
            aria-label="Facebook">
            <FacebookIcon className="social-icon-logof" />
          </a>

          <a href="https://github.com/NishantNirmal2543" aria-label="GitHub">
            <GitHubIcon className="social-icon-logof" />
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-nirmal-0aa703213"
            aria-label="LinkedIn">
            <LinkedInIcon className="social-icon-logof" />
          </a>
        </div>
        <div className="main_logo col-lg-4 col-md-12">
          <h1>N</h1>
        </div>
        <div className="mail col-lg-4 col-md-12">
          nishantnirmal2543@gmail.com
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 Nishant Nirmal</p>
      </div>
    </div>
  );
};

export default Footer;
