import React from 'react';
import './Project.css';
import projectData from './projectData.json';
import news_india from './images/News - India screeenshot.png';
import portfolio_resume_image from './images/portfolio_resume_image.png';
import communion_hub_image from './images/communion_hub_image.png';
import game_night_image from './images/Game_Night_image.png';
import chat_app_image from './images/chat_app_image.png'
import ecommerce_image from './images/ecommerce_image.png';

const imageMap = {
  news_india: news_india,
  portfolio_resume_image: portfolio_resume_image,
  communion_hub_image: communion_hub_image,
  game_night_image : game_night_image,
  chat_app_image : chat_app_image,
  ecommerce_image: ecommerce_image,
};

export default function Projects() {
  return (
    <div className="projects-section" data-aos="fade-right">

     <h2 className="project-title glow-text" data-aos="zoom-in">
  My Projects
  <span className="underline"></span>
</h2>


      <div className="project-grid" data-aos="fade-down">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={imageMap[project.img]}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h5 className="project-heading">{project.title}</h5>
              <p className="project-desc">{project.description}</p>
              <div className="tech-used">
                <strong>Technologies:</strong>{' '}
                {project.technologies.join(', ')}
              </div>
              <div className="button-group">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
