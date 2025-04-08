// ParticlesBackground.jsx
import React from "react";
import { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    // Only load the basic presets
    await loadBasic(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00bcd4",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outMode: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
}
