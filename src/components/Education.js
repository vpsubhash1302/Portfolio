import React from 'react';
import '../css/Education.css'; // Import the CSS file

const Education = () => {
  return (
    <section id="education">
      <div className="education">
        <div className="education-container">
          <h1 className="education-title">Education</h1>
          <div className="education-details">
            <div className="education-item">
              <h3 className="university-name">Higher Secondary Education</h3>
              <p className="degree">Kendriya Vidyalaya, Madurai</p>
              <p className="cgpa">Percentage: 84.4%</p>
            </div>
          </div>
          <div className="education-details">
            <div className="education-item">
              <h3 className="university-name">B.Tech Electronics and Communication Engineering</h3>
              <p className="degree">Sastra Deemed University</p>
              <p className="cgpa">CGPA: 7.8</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
