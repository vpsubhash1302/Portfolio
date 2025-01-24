import React from 'react';
import '../css/WorkExperience.css'; // Import the CSS file

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <div className="work-experience">
        <div className="work-experience-container">
          <h1 className="work-experience-title">Work Experience</h1>
          <div className="work-cards">
            {/* First Card */}
            <div className="work-card">
              <h2 className="work-card-title">Intern</h2>
              <p className="work-card-date">01/2023 - 07/2023</p>
              <div className="work-card-description">
                <ul>
                  <li>Completed projects using HTML, CSS, JavaScript, React.js, and MongoDB.</li>
                  <li>Gained practical skills through real-world applications.</li>
                  <li>Developed a strong foundation in web development.</li>
                </ul>
              </div>
            </div>

            {/* Arrow */}
            <div className="arrow-container">
              <div className="arrow"></div>
            </div>

            {/* Second Card */}
            <div className="work-card">
              <h2 className="work-card-title">Software Engineer</h2>
              <p className="work-card-date">07/2023 - Present</p>
              <div className="work-card-description">
                <ul>
                  <li>Managed multiple AWS services and implemented Terraform for IaC.</li>
                  <li>Addressed security incidents on Cloudflare, including credential attacks.</li>
                  <li>Explored Docker and Azure to enhance business operations.</li>
                  <li>Integrated Python scripts into Bitbucket pipelines for automation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
