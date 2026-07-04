// import React from 'react';
// import './Project.css';
// import projectData from './projectData.json';
// import news_india from './images/News - India screeenshot.png';
// import portfolio_resume_image from './images/portfolio_resume_image.png';
// import communion_hub_image from './images/communion_hub_image.png';
// import game_night_image from './images/Game_Night_image.png';
// import chat_app_image from './images/chat_app_image.png'
// import ecommerce_image from './images/ecommerce_image.png';
// import webdrive_image from './images/webdrive_image.png'
// import issuetracker_image from './images/issuetracker_image.png'

// const imageMap = {
//   news_india: news_india,
//   portfolio_resume_image: portfolio_resume_image,
//   communion_hub_image: communion_hub_image,
//   game_night_image : game_night_image,
//   chat_app_image : chat_app_image,
//   ecommerce_image: ecommerce_image,
//   webdrive_image: webdrive_image,
//   issuetracker_image: issuetracker_image,
// };

// export default function Projects() {
//   return (
//     <div className="projects-section" data-aos="fade-right">

//      <h2 className="project-title glow-text" data-aos="zoom-in">
//   My Projects
//   <span className="underline"></span>
// </h2>


//       <div className="project-grid" data-aos="fade-down">
//         {projectData.map((project, index) => (
//           <div className="project-card" key={index}>
//             <img
//               src={imageMap[project.img]}
//               alt={project.title}
//               className="project-img"
//             />
//             <div className="project-content">
//               <h5 className="project-heading">{project.title}</h5>
//               <p className="project-desc">{project.description}</p>
//               <div className="tech-used">
//                 <strong>Technologies:</strong>{' '}
//                 {project.technologies.join(', ')}
//               </div>
//               <div className="button-group">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="github-btn"
//                 >
//                   View on GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./Project.css";
import projectData from "./projectData.json";
import freelanceData from "./freelanceData.json";

import news_india from "./images/News - India screeenshot.png";
import portfolio_resume_image from "./images/portfolio_resume_image.png";
import communion_hub_image from "./images/communion_hub_image.png";
import game_night_image from "./images/Game_Night_image.png";
import chat_app_image from "./images/chat_app_image.png";
import ecommerce_image from "./images/ecommerce_image.png";
import webdrive_image from "./images/webdrive_image.png";
import issuetracker_image from "./images/issuetracker_image.png";

const imageMap = {
  news_india: news_india,
  portfolio_resume_image: portfolio_resume_image,
  communion_hub_image: communion_hub_image,
  game_night_image: game_night_image,
  chat_app_image: chat_app_image,
  ecommerce_image: ecommerce_image,
  webdrive_image: webdrive_image,
  issuetracker_image: issuetracker_image,
};

// Small reusable chip for a technology name
const TechChip = ({ name }) => <span className="tech-chip">{name}</span>;

// Shared button row — only renders the buttons that actually have a URL
const ProjectLinks = ({ live, github }) => {
  if (!live && !github) return null;
  return (
    <div className="button-group">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="live-btn"
        >
          🔴 Live Demo
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="projects-section" data-aos="fade-right">
      <h2 className="project-title glow-text" data-aos="zoom-in">
        My Projects
        <span className="underline"></span>
      </h2>
      <p className="project-subtitle" data-aos="fade-up">
        Personal builds where I explored ideas end-to-end, from UI to deployment.
      </p>

      <div className="project-grid" data-aos="fade-down">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              <img
                src={imageMap[project.img]}
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-content">
              <h5 className="project-heading">{project.title}</h5>
              <p className="project-desc">{project.description}</p>

              <div className="tech-used">
                {project.technologies.map((tech, i) => (
                  <TechChip key={i} name={tech} />
                ))}
              </div>

              <ProjectLinks live={project.live} github={project.github} />
            </div>
          </div>
        ))}
      </div>

      {/* Freelance / Client Work */}
      <div className="freelance-header" data-aos="fade-up">
        <h2 className="project-title glow-text">
          Freelance Projects
          <span className="underline"></span>
        </h2>
        <p className="project-subtitle">
          Production applications delivered for real clients since November
          2024, via Upwork &amp; LinkedIn.
        </p>
      </div>

      <div className="freelance-grid" data-aos="fade-down">
        {freelanceData.map((project, index) => (
          <div className="freelance-card" key={index}>
            <div className="freelance-card-header">
              <h5 className="project-heading">{project.title}</h5>
              <span className="role-badge">{project.role}</span>
            </div>

            {project.client && (
              <p className="freelance-client">For {project.client}</p>
            )}

            <p className="project-desc">{project.description}</p>

            <div className="tech-used">
              {project.technologies.map((tech, i) => (
                <TechChip key={i} name={tech} />
              ))}
            </div>

            <ProjectLinks live={project.live} github={project.github} />
          </div>
        ))}
      </div>
    </div>
  );
}