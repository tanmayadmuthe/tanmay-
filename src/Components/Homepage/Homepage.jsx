import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { FaCode, FaCoffee, FaGamepad } from "react-icons/fa";
import { MdMovieFilter, MdOutlineModeOfTravel } from "react-icons/md";

const titlesData = [
  { icon: <FaCode />, text: "Developer" },
  { icon: <MdMovieFilter />, text: "Anime Nerd" },
  { icon: <FaCoffee />, text: "Coffee Addict" },
  { icon: <FaGamepad />, text: "Gamer" },
  { icon: <MdOutlineModeOfTravel />, text: "Traveler" },
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
        <h1>I am Tanmay</h1>
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
      </div>
    </div>
  );
};

export default Homepage;
