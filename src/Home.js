import React from "react";
import "./Home.css";
import myimg from "./images/myimg.png";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const scrollToContacts = (e) => {
    e.preventDefault();
    const target = document.getElementById("contacts");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Home_container container-md" id="home">
      <div className="Home_content row align-items-center">
        {/* Info Section — order-1 on mobile so visitors read who you are before the photo loads */}
        <div
          className="col-md-6 text-white order-2 order-md-1"
          data-aos="fade-right"
        >
          <span className="availability-badge">
            <span className="dot" aria-hidden="true"></span>
            Open to freelance &amp; full-time opportunities
          </span>

<h1 className="Name">
  <Typewriter
    words={["Asif Naseem Ansari"]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={150}
    deleteSpeed={0}
    delaySpeed={1500}
  />
</h1>
          <h2 className="Profession">
            Software Engineer &amp; Full Stack Developer
          </h2>
          <p className="Intro">
            I build robust, scalable web applications end-to-end — from
            responsive front-ends in React and Next.js to secure back-ends in
            Node.js, Spring Boot, MySQL, and MongoDB. Currently freelancing
            with companies to ship production-ready software.
          </p>

          {/* Buttons */}
          <div className="button-wrapper mt-4 d-flex gap-3 justify-content-md-start justify-content-center">
            <a
              href="#contacts"
              className="custom-btn primary-btn cta-pulse"
              onClick={scrollToContacts}
            >
              Hire Me
            </a>
            <a
              href="/Asif_Resume.pdf"
              className="custom-btn outline-btn"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="col-md-6 text-center mb-4 mb-md-0 position-relative order-1 order-md-2"
          data-aos="fade-down"
        >
          <div className="image-background-animation" aria-hidden="true"></div>
          <div className="HomeImgWrapper">
            <img className="HomeImg img-fluid" src={myimg} alt="Asif Naseem Ansari" />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}