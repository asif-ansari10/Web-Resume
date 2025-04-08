import React from "react";
import "./Home.css";
import myimg from "./images/myimg.png";

export default function Home() {
  return (
    <div className="Home_container container-md" id="home">
      <div className="Home_content row align-items-center">
        {/* Image Section */}
        <div
          className="col-md-6 text-center mb-4 mb-md-0 position-relative"
          data-aos="fade-down"
        >
          <div className="image-background-animation"></div>
          <div className="HomeImgWrapper">
            <img className="HomeImg img-fluid" src={myimg} alt="Profile" />
          </div>
        </div>

        {/* Info Section */}
        <div className="col-md-6 text-white" data-aos="fade-right">
          <h1 className="Name typing ">Asif Naseem Ansari</h1>
          <h2 className="Profession">
            Software Engineer And Full Stack Developer
          </h2>
          <p className="Intro">
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. I have honed my skills in
            front-end technologies like React and Next.js, as well as back-end
            technologies like Node.js, MySQL, MongoDB, and Spring Boot.
          </p>

          {/* Buttons */}
          <div className="button-wrapper mt-4 d-flex gap-3 justify-content-md-start justify-content-center">
            <a href="#contacts" className="custom-btn primary-btn cta-pulse">
              Hire Me
            </a>
            <a
              href="/Asif's Resume.pdf"
              className="custom-btn outline-btn"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
