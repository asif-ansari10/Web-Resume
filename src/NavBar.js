import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark transparent-navbar">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    
    <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-brand mb-0"
          >
            Asif Naseem Ansari
          </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
      <ul className="navbar-nav custom-center-nav">
        {['home', 'about', 'resume', 'projects', 'contacts'].map((section) => (
          <li className="nav-item mx-2" key={section}>
            <Link
              className="nav-link custom-link"
              activeClass="active-link"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

    );
  }
}

export default NavBar;
