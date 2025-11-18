import React, { useState, useEffect } from "react";
import "./Homepage.css";
import {
  FaCode,
  FaCoffee,
  FaGamepad,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import SplineScene from "../SplineScene/SplineScene";

const titlesData = [
  { icon: <FaCode />, text: "Developer" },
  { icon: <MdMovieFilter />, text: "Anime Nerd" },
  { icon: <FaCoffee />, text: "Coffee Addict" },
  { icon: <FaGamepad />, text: "Gamer" },
];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (currentIndex === titlesData.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="homepage-container">
      <div className="hero-content">
        <p className="hero-overline">HELLO, I'M</p>
        <h1 className="main-title">TANMAY</h1>

        <div className="title-slider">
          <div
            className="title-wrapper"
            style={{
              transform: `translateY(calc(-${currentIndex} * var(--title-height)))`,
              transition: isTransitioning
                ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : "none",
            }}
          >
            {titlesData.map((title, index) => (
              <div className="title-item" key={index}>
                {title.icon}
                <span>{title.text}</span>
              </div>
            ))}
            <div className="title-item" key="clone">
              {titlesData[0].icon}
              <span>{titlesData[0].text}</span>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <a
            href="https://drive.google.com/file/d/1wTHA2LWoKGw8JKcEJiZabua2zllL0oLC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn primary">Resume</button>
          </a>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tanmay-admuthe/" target="blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tanmayadmuthe" target="blank">
            <FaGithub />
          </a>
          <a href="https://x.com/TanmayAdmuthe" target="blank">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/blexed.tanmay/" target="blank">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <SplineScene />
      </div>
    </div>
  );
};

export default Homepage;
