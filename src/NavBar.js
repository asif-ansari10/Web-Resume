import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h1>Asif Ansari</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="nav justify-content-center">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contacts</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
  </nav>
      </div>
    )
  }
}

export default NavBar ; 