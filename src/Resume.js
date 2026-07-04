// import React from "react";
// import "./Resume.css";

// import windows from "./images/windows.png";
// import linux from "./images/linux.png";
// import java from "./images/Java.png";
// import python from "./images/python.jpg";
// import html from "./images/html.png";
// import css from "./images/css.png";
// import JavaScript from "./images/javascript.jpg";
// import react from "./images/react.png";
// import springBoot from "./images/springBoot.png";
// import git from "./images/git.png";
// import github from "./images/github.jpeg";
// import mysql from "./images/mysql.png";
// import mongodb from "./images/mongodb.png";
// import nodejs from "./images/nodejs.jpg";
// import expressjs from "./images/expressjs.png";
// import kafka from "./images/kafka.png";

// const Resume = () => {
//   const onButtonClick = () => {
//     const pdfUrl = "Asif_Resume.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Asif_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const SkillBar = ({ label, width }) => (
//     <div className="progress-skill" data-aos="fade-right">
//       <div className="skill-label">{label}</div>
//       <div className="progress-bar">
//         <div className="progress-fill" style={{ width }}></div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="resume-container container-md" data-aos="fade-right">
//       <h2 className="section-title glow-text" data-aos="zoom-in">
//         My Knowledge
//       </h2>

//       <div className="glass-card-container">
//         <div className="glass-card">
//           <p className="intro-text" data-aos="fade-up" data-aos-delay="100">
//             As a passionate and dedicated Full Stack Web Developer, I specialize
//             in building dynamic, responsive, and user-friendly applications.
//             With hands-on experience in React.js, Node.js, Spring Boot, MySQL
//             and Docker.
//             <br />
//             <br />
//             My expertise spans both frontend and backend development, utilizing
//             technologies like HTML, CSS, JavaScript, MongoDB, and REST APIs. I
//             focus on creating scalable solutions with clean architecture and
//             efficient performance.
//             <br />
//             <br />
//             Currently, I am working at The Web Trix as a Full Stack Developer,
//             continuously enhancing my technical and problem-solving skills while
//             contributing to innovative web solutions.
//           </p>

//           <div className="resume-section">
//             <div className="resume-subsection" data-aos="fade-left">
//               <h3>🎓 Education</h3>
//               <div className="resume-item">
//                 <h4>Bachelor of Technology in Computer Science</h4>
//                 <p className="resume-college">
//                   Guru Nanak Institute of Technology
//                 </p>
//                 <p className="resume-date">2021 - 2025</p>
//               </div>
//             </div>

//             {/* Experience */}

//             <div className="resume-subsection" data-aos="fade-left">
//               <h3>💼 Experience</h3>
//               <div className="resume-item">
//                 <h4> Web Developer Intern</h4>
//                 <h6>
//                   {" "}
//                   <bold> At Unified Mentor</bold>
//                 </h6>
//                 <p className="resume-date">July 2024 - September 2024</p>
//                 <p className="resume-desc">Worked on MERN development.</p>
//               </div>
//               <div className="resume-item">
//                 <h4>Full Stack Web Developer Intern</h4>
//                 <h6>
//                   {" "}
//                   <bold>At Pandora Softwares</bold>
//                 </h6>
//                 <p className="resume-date">September 2025 - October 2025</p>
//                 <p className="resume-desc">Worked on MERN development.</p>
//               </div>
//               <div className="resume-item">
//                 <h4> Full Stack Web Developer</h4>
//                 <h6>
//                   {" "}
//                   <bold> At The Web Trix</bold>
//                 </h6>
//                 <p className="resume-date">November 2025 - Present</p>
//                 <p className="resume-desc">
//                   Worked on MERN and SpringBoot development.
//                 </p>
//               </div>
//             </div>

//             {/* Certifications */}

//             <div className="resume-subsection" data-aos="fade-left">
//               <h3>📜 Certifications</h3>
//               <div className="certification-list">
//                 <div className="certification-item">
//                   <span className="cert-icon">🎓</span>
//                   <p>Full Stack Web Development</p>
//                 </div>
//                 <div className="certification-item">
//                   <span className="cert-icon">🎓</span>
//                   <p>Data Structures – Coursera</p>
//                 </div>
//                 <div className="certification-item">
//                   <span className="cert-icon">🎓</span>
//                   <p>JAVA Backend Development – GeeksForGeeks</p>
//                 </div>
//                 <div className="certification-item">
//                   <span className="cert-icon">🎓</span>
//                   <p>Generative AI – Outskill</p>
//                 </div>
//                 <div className="certification-item">
//                   <span className="cert-icon">🎓</span>
//                   <p>
//                     Oracle Certified Foundations Associate, Developer, DevOps,
//                     Architect – Oracle
//                   </p>
//                 </div>
//                 <div className="certification-item">
//                   <span className="cert-icon">🎓</span>
//                   <p>Oracle Certified AI Foundations Associate – Oracle</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Programming Languages */}
//           <div
//             className="skill-section"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <strong className="skill-title">
//               <span className="about-icon">💻</span> Programming Languages
//             </strong>
//             <div className="skill-grid">
//               {[java, python, html, css, JavaScript].map((img, i) => (
//                 <img key={i} src={img} alt="skill" className="skill-icon" />
//               ))}
//             </div>

//             {/* progress bar */}
//             <div className="progress-skill-section">
//               <SkillBar label="Java" width="85%" />
//               <SkillBar label="Python" width="75%" />
//               <SkillBar label="HTML / CSS" width="90%" />
//               <SkillBar label="JavaScript" width="80%" />
//             </div>
//           </div>

//           {/* Frameworks */}
//           <div
//             className="skill-section"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <strong className="skill-title">
//               <span className="about-icon">🧩</span> Frameworks
//             </strong>
//             <div className="skill-grid">
//               <img src={react} alt="React" className="skill-icon" />
//               <img
//                 src={expressjs}
//                 alt="expressjs"
//                 className="skill-icon wide-icon"
//               />
//               <img
//                 src={springBoot}
//                 alt="Spring Boot"
//                 className="skill-icon wide-icon"
//               />
//             </div>

//             {/* progress bar */}
//             <div className="progress-skill-section">
//               <SkillBar label="React" width="85%" />
//               <SkillBar label="Express Js" width="85%" />
//               <SkillBar label="Spring Boot" width="70%" />
//             </div>
//           </div>

//           {/* Technologies */}
//           <div
//             className="skill-section"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <strong className="skill-title">
//               <span className="about-icon">🧩</span> Technologies
//             </strong>
//             <div className="skill-grid">
//               <img src={kafka} alt="kafka" className="skill-icon" />
//               <img src={nodejs} alt="nodejs" className="skill-icon wide-icon" />
//             </div>

//             {/* progress bar */}
//             <div className="progress-skill-section">
//               <SkillBar label="Kafka" width="70%" />
//               <SkillBar label="Node Js" width="85%" />
//             </div>
//           </div>

//           {/* Databases */}
//           <div
//             className="skill-section"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <strong className="skill-title">
//               <span className="about-icon">🗄️</span> Databases
//             </strong>
//             <div className="skill-grid">
//               <img src={mysql} alt="MySQL" className="skill-icon wide-icon" />
//               <img
//                 src={mongodb}
//                 alt="MongoDB"
//                 className="skill-icon wide-icon"
//               />
//             </div>

//             {/* progress bar */}
//             <div className="progress-skill-section">
//               <SkillBar label="MySQL" width="80%" />
//               <SkillBar label="MongoDB" width="75%" />
//             </div>
//           </div>

//           {/* Git labs */}
//           <div
//             className="skill-section"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             <strong className="skill-title">
//               <span className="about-icon">🔀</span> Version Control Tools
//             </strong>

//             <div className="skill-grid">
//               <img src={git} alt="git" className="skill-icon" />
//               <img src={github} alt="github" className="skill-icon wide-icon" />
//             </div>

//             {/* progress bar */}
//             <div className="progress-skill-section">
//               <SkillBar label="Git" width="70%" />
//               <SkillBar label="GitHub" width="85%" />
//             </div>
//           </div>

//           {/* Operating Systems */}
//           <div
//             className="skill-section"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             <strong className="skill-title">
//               <span className="about-icon">🖥️</span> Operating Systems
//             </strong>
//             <div className="skill-grid">
//               <img src={windows} alt="Windows" className="skill-icon" />
//               <img src={linux} alt="Linux" className="skill-icon wide-icon" />
//             </div>

//             {/* progress bar */}
//             <div className="progress-skill-section">
//               <SkillBar label="Windows" width="90%" />
//               <SkillBar label="Linux" width="75%" />
//             </div>
//           </div>

//           {/* Resume Download Button */}
//           <div
//             className="resume-button-wrapper"
//             data-aos="zoom-in"
//             data-aos-delay="600"
//           >
//             <button className="resume-button" onClick={onButtonClick}>
//               <i className="fas fa-download"></i> Download Resume
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;


import React from "react";
import "./Resume.css";

import java from "./images/Java.png";
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
    const pdfUrl = "Asif_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Asif_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // width e.g. "85%" — percentage label is derived automatically
  const SkillBar = ({ label, width }) => (
    <div className="progress-skill" data-aos="fade-right">
      <div className="progress-skill-header">
        <span className="skill-label">{label}</span>
        <span className="skill-percent">{width}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width }}></div>
      </div>
    </div>
  );

  // Logo-backed chip, for skills that already have an image asset
  const SkillChip = ({ icon, label }) => (
    <div className="skill-chip">
      <img src={icon} alt={label} className="skill-chip-icon" />
      <span className="skill-chip-label">{label}</span>
    </div>
  );

  // Colour-coded chip, for skills that don't have a logo file yet
  const SkillTag = ({ label, color }) => (
    <div className="skill-chip skill-chip--tag" style={{ "--tag-color": color }}>
      <span className="skill-chip-dot" />
      <span className="skill-chip-label">{label}</span>
    </div>
  );

  const StatCard = ({ value, label }) => (
    <div className="stat-card" data-aos="zoom-in">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );

  return (
    <div className="resume-container container-md" data-aos="fade-right">
      <h2 className="section-title glow-text" data-aos="zoom-in">
        My Knowledge
      </h2>

      <div className="glass-card-container">
        {/* Professional Summary */}
        <div className="summary-card" data-aos="fade-up">
          <h3>👨‍💻 Professional Summary</h3>

          <p>
            I'm <strong>Asif Naseem Ansari</strong>, a Full Stack Software
            Engineer with <strong>1+ years of professional and freelance
            experience</strong> building scalable web applications using the
            MERN Stack, Java Spring Boot, cloud technologies, and AI-powered
            solutions.
          </p>

          <p>
            I have collaborated with startups and businesses to deliver
            production-ready applications ranging from business websites and
            SaaS platforms to AI-enabled software. My focus is on clean
            architecture, responsive UI, secure backend development, and
            high-performance applications.
          </p>

          <p>
            Currently expanding my expertise in{" "}
            <strong>
              AWS Cloud, Oracle Cloud Infrastructure (OCI), Docker, Kafka,
              DevOps, and Generative AI
            </strong>{" "}
            while continuously learning modern software engineering
            practices.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="stats-grid" data-aos="fade-up" data-aos-delay="100">
          <StatCard value="1+" label="Years Experience" />
          <StatCard value="10+" label="Projects Delivered" />
          <StatCard value="5+" label="Professional Clients" />
          <StatCard value="25+" label="Technologies" />
          <StatCard value="3" label="Companies Worked With" />
        </div>

        <div className="glass-card">
          <div className="resume-section">
            <div className="resume-subsection" data-aos="fade-left">
              <h3>🎓 Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Technology in Computer Science &amp; Engineering</h4>
                <p className="resume-college">
                  Guru Nanak Institute of Technology
                </p>
                <p className="resume-date">2021 - 2025 · CGPA: 8.45</p>
              </div>
            </div>

            {/* Experience */}

            <div className="resume-subsection" data-aos="fade-left">
              <h3>💼 Experience</h3>

              {/* Internship */}
              <div className="resume-item">
                <h4>Software Developer Intern</h4>
                <h6>
                  {" "}
                  <bold>At Unified Mentor Private Limited</bold>
                </h6>
                <p className="resume-date">July 2024 - September 2024</p>
                <p className="resume-desc">
                  Built Chat-App, a real-time messaging platform with media
                  sharing and social media integration, using the MERN stack.
                </p>
              </div>

              {/* Freelance career, with companies nested underneath */}
              <div className="resume-item">
                <h4>Freelance Full Stack Developer</h4>
                <h6>
                  {" "}
                  <bold>Via Upwork &amp; LinkedIn</bold>
                </h6>
                <p className="resume-date">November 2024 - Present</p>
                <p className="resume-desc">
                  Working independently as a freelancer, partnering with
                  multiple companies and clients on production full stack
                  web applications.
                </p>

                <div className="freelance-sublist">
                  <div className="freelance-item">
                    <h5>The Web Trix</h5>
                    <p className="resume-date">
                      November 2024 - September 2025
                    </p>
                    <p className="resume-desc">
                      Worked on MERN and Spring Boot based development,
                      including projects like Trading Portfolio Manager and
                      RentFlow.
                    </p>
                  </div>

                  <div className="freelance-item">
                    <h5>Pandora Softwares</h5>
                    <p className="resume-date">
                      September 2025 - November 2025
                    </p>
                    <p className="resume-desc">
                      Built CodeMeet, a coding competition and event
                      management platform, focusing on responsive UI,
                      authentication flow, and scalable frontend architecture.
                    </p>
                  </div>

                  <div className="freelance-item">
                    <h5>VisaNauta</h5>
                    <p className="resume-date">December 2025 - May 2026</p>
                    <p className="resume-desc">
                      Contributed to a production Canadian immigration
                      marketplace platform — building scalable frontend
                      modules, client-facing features, and payment
                      integrations for a SaaS product.
                    </p>
                  </div>
                </div>
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
                  <p>Java Backend Development</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>MongoDB Java Developer – MongoDB</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>Generative AI – Outskill</p>
                </div>
                <div className="certification-item">
                  <span className="cert-icon">🎓</span>
                  <p>
                    Oracle Certified Foundations Associate, Developer,
                    DevOps, Architect – Oracle
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
          <div className="skill-section" data-aos="fade-up" data-aos-delay="150">
            <strong className="skill-title">
              <span className="about-icon">💻</span> Programming Languages
            </strong>
            <div className="skill-grid">
              <SkillChip icon={java} label="Java" />
              <SkillChip icon={JavaScript} label="JavaScript" />
              <SkillTag label="TypeScript" color="#3178c6" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="Java" width="85%" />
              <SkillBar label="JavaScript" width="85%" />
              <SkillBar label="TypeScript" width="70%" />
            </div>
          </div>

          {/* Frameworks */}
          <div className="skill-section" data-aos="fade-up" data-aos-delay="250">
            <strong className="skill-title">
              <span className="about-icon">🧩</span> Frameworks
            </strong>
            <div className="skill-grid">
              <SkillChip icon={react} label="React.js" />
              <SkillTag label="Next.js" color="#8b8b8b" />
              <SkillChip icon={expressjs} label="Express.js" />
              <SkillChip icon={springBoot} label="Spring Boot" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="React.js" width="85%" />
              <SkillBar label="Next.js" width="80%" />
              <SkillBar label="Express.js" width="85%" />
              <SkillBar label="Spring Boot" width="70%" />
            </div>
          </div>

          {/* Technologies & Tools */}
          <div className="skill-section" data-aos="fade-up" data-aos-delay="300">
            <strong className="skill-title">
              <span className="about-icon">🛠️</span> Technologies &amp; Tools
            </strong>
            <div className="skill-grid">
              <SkillChip icon={nodejs} label="Node.js" />
              <SkillChip icon={kafka} label="Kafka" />
              <SkillTag label="REST API" color="#22c55e" />
              <SkillTag label="Docker" color="#2496ed" />
              <SkillTag label="Tailwind CSS" color="#38bdf8" />
              <SkillTag label="OAuth 2.0" color="#a855f7" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="Node.js" width="85%" />
              <SkillBar label="Kafka" width="70%" />
              <SkillBar label="REST API" width="85%" />
              <SkillBar label="Docker" width="70%" />
              <SkillBar label="Tailwind CSS" width="80%" />
              <SkillBar label="OAuth 2.0" width="70%" />
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="skill-section" data-aos="fade-up" data-aos-delay="350">
            <strong className="skill-title">
              <span className="about-icon">☁️</span> Cloud Platforms
            </strong>
            <div className="skill-grid">
              <SkillTag label="AWS" color="#ff9900" />
              <SkillTag label="Oracle Cloud" color="#f80000" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="AWS" width="60%" />
              <SkillBar label="Oracle Cloud" width="65%" />
            </div>
          </div>

          {/* GenAI & AI Technologies */}
          <div className="skill-section" data-aos="fade-up" data-aos-delay="400">
            <strong className="skill-title">
              <span className="about-icon">🤖</span> GenAI &amp; AI Technologies
            </strong>
            <div className="skill-grid">
              <SkillTag label="OpenAI API" color="#10a37f" />
              <SkillTag label="Gemini API" color="#4285f4" />
              <SkillTag label="AI Integrations" color="#7c3aed" />
              <SkillTag label="Prompt Engineering" color="#db2777" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="OpenAI API" width="75%" />
              <SkillBar label="Gemini API" width="70%" />
              <SkillBar label="AI Integrations" width="75%" />
              <SkillBar label="Prompt Engineering" width="80%" />
            </div>
          </div>

          {/* Databases */}
          <div className="skill-section" data-aos="fade-up" data-aos-delay="450">
            <strong className="skill-title">
              <span className="about-icon">🗄️</span> Database &amp; Persistence
            </strong>
            <div className="skill-grid">
              <SkillChip icon={mysql} label="MySQL" />
              <SkillChip icon={mongodb} label="MongoDB" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="MySQL" width="80%" />
              <SkillBar label="MongoDB" width="75%" />
            </div>
          </div>

          {/* Version Control */}
          <div className="skill-section" data-aos="fade-up" data-aos-delay="500">
            <strong className="skill-title">
              <span className="about-icon">🔀</span> Version Control Tools
            </strong>
            <div className="skill-grid">
              <SkillChip icon={git} label="Git" />
              <SkillChip icon={github} label="GitHub" />
            </div>
            <div className="progress-skill-section">
              <SkillBar label="Git" width="70%" />
              <SkillBar label="GitHub" width="85%" />
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