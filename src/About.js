import React, { Component } from 'react';
import './About.css';
import { FaUser, FaCode, FaLightbulb, FaCloud, FaHandshake } from 'react-icons/fa';

export default class About extends Component {
  render() {
    return (
      <div className="about-container container-md" data-aos="fade-right">
        <h1 className="about-title text-center glow-text">About</h1>

        <p className="about-paragraph" data-aos="fade-up" data-aos-delay="100">
          <FaUser className="about-icon" />
          <strong> About Me:</strong><br />
          Hi! My name is <strong> Asif Naseem Ansari </strong>, welcome to my portfolio website. I am a passionate and dedicated web developer with a 
          strong foundation in both front-end and back-end technologies. With a background in Computer Science and Engineering, 
          I have honed my skills in creating responsive, user-friendly websites and web applications.
        </p>

        <p className="about-paragraph" data-aos="fade-up" data-aos-delay="200">
          <FaCode className="about-icon" />
          <strong> My Journey:</strong><br />
          My journey into web development began with a curiosity for how websites work and a desire to create my own. 
          Over the years, I have developed a keen eye for design and a deep understanding of coding principles. I have worked
          on various projects, ranging from small business websites to complex web applications, always striving to deliver clean, 
          efficient, and aesthetically pleasing solutions.
        </p>

        <p className="about-paragraph" data-aos="fade-up" data-aos-delay="300">
          <FaLightbulb className="about-icon" />
          <strong> Career Objective:</strong><br />
          As a dedicated and passionate web developer, I specialize in creating dynamic and responsive websites using the latest 
          technologies in front-end and back-end development. I possess a strong foundation in HTML, CSS, JavaScript, and various 
          frameworks such as React.js and Spring Boot. My problem-solving skills and eagerness to learn new technologies drive me 
          to continuously improve my skills in the field of web development.
        </p>

        <p className="about-paragraph" data-aos="fade-up" data-aos-delay="400">
          <FaCloud className="about-icon" />
          <strong> Interests:</strong><br />
          AWS, Cloud Computing, Artificial Intelligence, Machine Learning
        </p>

        <p className="about-paragraph" data-aos="fade-up" data-aos-delay="500">
          <FaLightbulb className="about-icon" />
          <strong> My Philosophy:</strong><br />
          I believe that a great web developer is not just someone who can write code but someone who can understand the user's 
          needs and create an intuitive experience. I am committed to continuous learning and staying updated with the latest industry 
          trends to ensure that my skills remain relevant and cutting-edge.
        </p>

        <p className="about-paragraph" data-aos="fade-up" data-aos-delay="600">
          <FaHandshake className="about-icon" />
          <strong> Let's Connect:</strong><br />
          I am always open to new opportunities and collaborations. If you have a project in mind, feel free to reach out to me.
          Let's create something amazing together!&nbsp;
          <a href="#contacts" className="about-link" data-aos="zoom-in" data-aos-delay="700">
            Click Here To Connect
          </a>
        </p>
      </div>
    );
  }
}
