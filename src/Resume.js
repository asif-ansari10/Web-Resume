import React from "react";
import "./Resume.css";

import windows from "./images/windows.png";
import linux from "./images/linux.png";
import java from "./images/Java.png";
import python from "./images/python.jpg";
import html from "./images/html.png";
import css from "./images/css.png";
import JavaScript from "./images/javascript.jpg";
import react from "./images/react.png";
import springBoot from "./images/springBoot.png";
import git from "./images/git.png";
import github from "./images/github.jpeg";
import mysql from "./images/mysql.png";
import mongodb from "./images/mongodb.png";
import nodejs from "./images/nodejs.jpg";
import expressjs from "./images/expressjs.png";
import kafka from "./images/kafka.png";

const Resume = () => {
  const onButtonClick = () => {
    const pdfUrl = "Asif's Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Asif's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const SkillBar = ({ label, width }) => (
    <div className="progress-skill" data-aos="fade-right">
      <div className="skill-label">{label}</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width }}></div>
      </div>
    </div>
  );

  return (
    <div className="resume-container container-md" data-aos="fade-right">
      <h2 className="section-title glow-text" data-aos="zoom-in">
        My Knowledge
      </h2>

      <div className="glass-card-container">
        <div className="glass-card">
          <p className="intro-text" data-aos="fade-up" data-aos-delay="100">
            As a passionate and dedicated Full Stack Web Developer, I specialize
            in building dynamic, responsive, and user-friendly applications.
            With hands-on experience in React.js, Node.js, Spring Boot, MySQL
            and Docker.
            <br />
            <br />
            My expertise spans both frontend and backend development, utilizing
            technologies like HTML, CSS, JavaScript, MongoDB, and REST APIs. I
            focus on creating scalable solutions with clean architecture and
            efficient performance.
            <br />
            <br />
            Currently, I am working at The Web Trix as a Full Stack Developer,
            continuously enhancing my technical and problem-solving skills while
            contributing to innovative web solutions.
          </p>

          <div className="resume-section">
            <div className="resume-subsection" data-aos="fade-left">
              <h3>🎓 Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Technology in Computer Science</h4>
                <p className="resume-college">
                  Guru Nanak Institute of Technology
                </p>
                <p className="resume-date">2021 - 2025</p>
              </div>
            </div>

            {/* Experience */}

            <div className="resume-subsection" data-aos="fade-left">
              <h3>💼 Experience</h3>
              <div className="resume-item">
                <h4> Web Developer Intern</h4>
                <h6>
                  {" "}
                  <bold> At Unified Mentor</bold>
                </h6>
                <p className="resume-date">July 2024 - September 2024</p>
                <p className="resume-desc">Worked on MERN development.</p>
              </div>
              <div className="resume-item">
                <h4>Full Stack Web Developer Intern</h4>
                <h6>
                  {" "}
                  <bold>At Pandora Softwares</bold>
                </h6>
                <p className="resume-date">September 2025 - October 2025</p>
                <p className="resume-desc">Worked on MERN development.</p>
              </div>
              <div className="resume-item">
                <h4> Full Stack Web Developer</h4>
                <h6>
                  {" "}
                  <bold> At The Web Trix</bold>
                </h6>
                <p className="resume-date">November 2025 - Present</p>
                <p className="resume-desc">
                  Worked on MERN and SpringBoot development.
                </p>
              </div>
            </div>

            {/* Certifications */}

            <div className="resume-subsection" data-aos="fade-left">
              <h3>📜 Certifications</h3>
              <div className="certification-list">
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>Full Stack Web Development</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>Data Structures – Coursera</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>JAVA Backend Development – GeeksForGeeks</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>Generative AI – Outskill</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>
                    Oracle Certified Foundations Associate, Developer, DevOps,
                    Architect – Oracle
                  </p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>Oracle Certified AI Foundations Associate – Oracle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div
            className="skill-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <strong className="skill-title">
              <span className="about-icon">💻</span> Programming Languages
            </strong>
            <div className="skill-grid">
              {[java, python, html, css, JavaScript].map((img, i) => (
                <img key={i} src={img} alt="skill" className="skill-icon" />
              ))}
            </div>

            {/* progress bar */}
            <div className="progress-skill-section">
              <SkillBar label="Java" width="85%" />
              <SkillBar label="Python" width="75%" />
              <SkillBar label="HTML / CSS" width="90%" />
              <SkillBar label="JavaScript" width="80%" />
            </div>
          </div>

          {/* Frameworks */}
          <div
            className="skill-section"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <strong className="skill-title">
              <span className="about-icon">🧩</span> Frameworks
            </strong>
            <div className="skill-grid">
              <img src={react} alt="React" className="skill-icon" />
              <img
                src={expressjs}
                alt="expressjs"
                className="skill-icon wide-icon"
              />
              <img
                src={springBoot}
                alt="Spring Boot"
                className="skill-icon wide-icon"
              />
            </div>

            {/* progress bar */}
            <div className="progress-skill-section">
              <SkillBar label="React" width="85%" />
              <SkillBar label="Express Js" width="85%" />
              <SkillBar label="Spring Boot" width="70%" />
            </div>
          </div>

          {/* Technologies */}
          <div
            className="skill-section"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <strong className="skill-title">
              <span className="about-icon">🧩</span> Technologies
            </strong>
            <div className="skill-grid">
              <img src={kafka} alt="kafka" className="skill-icon" />
              <img src={nodejs} alt="nodejs" className="skill-icon wide-icon" />
            </div>

            {/* progress bar */}
            <div className="progress-skill-section">
              <SkillBar label="Kafka" width="70%" />
              <SkillBar label="Node Js" width="85%" />
            </div>
          </div>

          {/* Databases */}
          <div
            className="skill-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <strong className="skill-title">
              <span className="about-icon">🗄️</span> Databases
            </strong>
            <div className="skill-grid">
              <img src={mysql} alt="MySQL" className="skill-icon wide-icon" />
              <img
                src={mongodb}
                alt="MongoDB"
                className="skill-icon wide-icon"
              />
            </div>

            {/* progress bar */}
            <div className="progress-skill-section">
              <SkillBar label="MySQL" width="80%" />
              <SkillBar label="MongoDB" width="75%" />
            </div>
          </div>

          {/* Git labs */}
          <div
            className="skill-section"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <strong className="skill-title">
              <span className="about-icon">🔀</span> Version Control Tools
            </strong>

            <div className="skill-grid">
              <img src={git} alt="git" className="skill-icon" />
              <img src={github} alt="github" className="skill-icon wide-icon" />
            </div>

            {/* progress bar */}
            <div className="progress-skill-section">
              <SkillBar label="Git" width="70%" />
              <SkillBar label="GitHub" width="85%" />
            </div>
          </div>

          {/* Operating Systems */}
          <div
            className="skill-section"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <strong className="skill-title">
              <span className="about-icon">🖥️</span> Operating Systems
            </strong>
            <div className="skill-grid">
              <img src={windows} alt="Windows" className="skill-icon" />
              <img src={linux} alt="Linux" className="skill-icon wide-icon" />
            </div>

            {/* progress bar */}
            <div className="progress-skill-section">
              <SkillBar label="Windows" width="90%" />
              <SkillBar label="Linux" width="75%" />
            </div>
          </div>

          {/* Resume Download Button */}
          <div
            className="resume-button-wrapper"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <button className="resume-button" onClick={onButtonClick}>
              <i className="fas fa-download"></i> Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
