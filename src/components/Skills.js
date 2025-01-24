import React from 'react';
import '../css/Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <section id="skills">
    <div className="skills">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-category">
          <div className="skills-card">
            <h2 className="skills-card-title">
              <i className="fas fa-cloud"></i> Cloud Technologies
            </h2>
            <div className="skill-level-bar">
              <div className="skill-bar" style={{ width: '90%' }}></div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fab fa-aws"></i> AWS</span>
              <span className="skill-tag"><i className="fab fa-docker"></i> Docker</span>
              <span className="skill-tag"><i className="fab fa-microsoft"></i> Azure</span>
              <span className="skill-tag"><i className="fas fa-tools"></i> Terraform</span>
              <span className="skill-tag"><i className="fas fa-tools"></i> Python</span>
              <span className="skill-tag"><i className="fas fa-tools"></i> Cloudflare</span>
            </div>
          </div>
          <div className="skills-card">
            <h2 className="skills-card-title">
              <i className="fas fa-laptop-code"></i> Web Development
            </h2>
            <div className="skill-level-bar">
              <div className="skill-bar" style={{ width: '85%' }}></div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fab fa-html5"></i> HTML</span>
              <span className="skill-tag"><i className="fab fa-css3-alt"></i> CSS</span>
              <span className="skill-tag"><i className="fab fa-js-square"></i> JavaScript</span>
              <span className="skill-tag"><i className="fab fa-react"></i> React.js</span>
              <span className="skill-tag"><i className="fab fa-next"></i> Next.js</span>
              <span className="skill-tag"><i className="fab fa-mongo"></i> Mongo DB</span>
            </div>
          </div>
          <div className="skills-card">
            <h2 className="skills-card-title">
              <i className="fas fa-mobile-alt"></i> App Development
            </h2>
            <div className="skill-level-bar">
              <div className="skill-bar" style={{ width: '75%' }}></div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fab fa-figma"></i> Figma</span>
              <span className="skill-tag"><i className="fab fa-flutter"></i> Flutter</span>
              <span className="skill-tag"><i className="fas fa-pencil-ruler"></i> UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Skills;
