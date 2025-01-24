import React from 'react';
import '../css/Banner.css'; // Import the CSS file

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">SOFTWARE ENGINEER</h1>
        <h2 className="banner-subtitle">Cloud Infrastructure Engineer | Web Developer</h2>
        <p className="banner-summary">
          Dynamic professional with a degree in Electronics and Communication Engineering from Sastra Deemed University. Skilled in web development (HTML, CSS, JavaScript) and cloud technologies (AWS, Terraform, Azure, Docker). Proficient in UI/UX design and app development using Figma and Flutter. Passionate about leveraging technology to drive impactful projects and foster business growth.
        </p>
      </div>
    </div>
  );
}

export default Banner;
