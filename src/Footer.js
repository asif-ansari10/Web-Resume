import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h4>About Me</h4>
          <p>Asif Naseen Ansari</p>
          <p>
            Passionate full-stack developer with experience in React, Spring Boot etc.
            I enjoy building intuitive, responsive web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {['home' , 'about' , 'resume' , 'projects' , 'contacts'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="custom-scroll-link"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/asif-ansari10" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/asif-naseem-ansari-00260919a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
            <a href="mailto:asifnasimansari10@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Asif Ansari. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
