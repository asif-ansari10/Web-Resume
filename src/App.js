import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer'; 
import "./animation.css";
import ParticlesBackground from "./ParticlesBackground";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{
      backgroundColor: '#111c37',
      width: "100%",
      overflowX: 'hidden',
    }}>

    <div className='Home_content'>
      {/* Particle effect */}
      <ParticlesBackground />
      <NavBar />
      <main>
        <section id="home" className="section"><Home /></section>
        <section id="about" className="section"><About /></section>
        <section id="resume" className="section"><Resume /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contacts" className="section"><Contacts /></section>
      </main>
      </div>
      <Footer/>
    </div>
  );
}
