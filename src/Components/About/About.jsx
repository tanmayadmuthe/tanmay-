import React from "react";
import "./About.css";
import { FaJava, FaReact, FaDocker, FaAws, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-visual">
        <div className="image-card">
          <img src="./profile.jpg" alt="Tanmay" className="profile-img" />
          <div className="glow-border"></div>
        </div>
      </div>

      <div className="about-content">
        <h2 className="section-title">WHO I AM</h2>

        <div className="glass-card">
          <p className="bio-text">
            I'm <span className="highlight">Tanmay</span>, a Full-Stack
            Developer with a passion for building scalable software and
            immersive web experiences.
            <br />
            <br />
            When I’m not wrestling with <b>Spring Boot</b> bugs or polishing{" "}
            <b>React</b> UIs, I’m probably at the gym, sweating it out — or on a
            trip, discovering something new. And yes, Valorant always finds a
            way into my schedule.
            <br />
            <br />I believe in clean code, dark mode, spontaneous trips, and the
            power of caffeine.
          </p>
        </div>

        {/* --- TECH STACK --- */}
        <h3 className="sub-title">MY ARSENAL</h3>
        <div className="tech-grid">
          <div className="tech-item">
            <FaJava /> <span>Java</span>
          </div>
          <div className="tech-item">
            <SiSpringboot /> <span>Spring</span>
          </div>
          <div className="tech-item">
            <FaReact /> <span>React</span>
          </div>
          <div className="tech-item">
            <SiTypescript /> <span>TS</span>
          </div>
          <div className="tech-item">
            <FaDatabase /> <span>SQL</span>
          </div>
          <div className="tech-item">
            <FaAws /> <span>AWS</span>
          </div>
          <div className="tech-item">
            <FaDocker /> <span>Docker</span>
          </div>
          <div className="tech-item">
            <SiTailwindcss /> <span>Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
