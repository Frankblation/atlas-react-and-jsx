import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/frankblation" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/frankblation/atlas-react-and-jsx" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;
