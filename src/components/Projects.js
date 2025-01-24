import React from 'react';
import '../css/Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <section id="projects">
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="project-cards">
          <div className="project-card">
            <h2 className="project-card-title">
              <i className="fas fa-cloud"></i> Developed AI-powered QnA Chatbot
            </h2>
            <p className="project-card-description">
              Developed an AI-driven Chatbot using Azure AI to improve FAQ management and integrated with Microsoft Teams
            </p>
            <div className="project-card-footer">
              <a
                href="https://github.com/vpsubhash1302/Developing-an-AI-Powered-QnA-Chatbot-with-Azure-AI-and-Microsoft-Teams-Integration"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                <i className="fas fa-arrow-right"></i> Learn More
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-card-title">
              <i className="fas fa-cloud"></i> Hands-On AWS Solutions
            </h2>
            <p className="project-card-description">
              Completed 35+ projects on AWS services, demonstrating comprehensive experience with core and advanced AWS offerings.
            </p>
            <div className="project-card-footer">
              <a
                href="https://github.com/vpsubhash1302/Mastering-AWS-Services-35-Hands-On-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                <i className="fas fa-arrow-right"></i> Learn More
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-card-title">
              <i className="fas fa-code"></i> CI/CD Pipeline for Dockerized Apps
            </h2>
            <p className="project-card-description">
              Established a robust CI/CD pipeline to automate building, testing, and deploying Dockerized applications on AWS.
            </p>
            <div className="project-card-footer">
              <a
                href="https://github.com/vpsubhash1302/-CI-CD-Pipeline-for-Dockerized-Applications-on-AWS"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                <i className="fas fa-arrow-right"></i> Learn More
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-card-title">
              <i className="fas fa-pencil-ruler"></i> UI/UX Design Projects
            </h2>
            <p className="project-card-description">
              Created 6+ projects focusing on UI/UX design using Figma, showcasing intuitive and visually appealing interfaces.
            </p>
            <div className="project-card-footer">
              <a
                href="https://github.com/vpsubhash1302/Figma-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                <i className="fas fa-arrow-right"></i> Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Projects;
