import React from 'react';
import '../css/Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-container">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <a href="mailto:vpsubhash2002@gmail.com" className="contact-link">vpsubhash2002@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt contact-icon"></i>
            <span className="contact-link">9444474126</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <span className="contact-link">Chennai, India</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin contact-icon"></i>
            <a href="https://www.linkedin.com/in/subhashvp" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github contact-icon"></i>
            <a href="https://github.com/vpsubhash1302" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          <a href="mailto:vpsubhash2002@gmail.com" className="contact-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
