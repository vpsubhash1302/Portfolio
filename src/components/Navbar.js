import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Clicking on this will scroll to the banner */}
      <a href="#banner" className="navbar-name">Subhash V P</a>
      <ul className="navbar-menu">
        <li><a href="#education">Education</a></li>
        <li><a href="#work-experience">Work Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
