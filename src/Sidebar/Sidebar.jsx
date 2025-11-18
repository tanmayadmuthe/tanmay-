import React from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* --- TOP ITEMS (Initially Hidden) --- */}
      <a href="#home" className="nav-item item-1">
        <FaHome />
        <span className="tooltip">Home</span>
      </a>
      <a href="#about" className="nav-item item-2">
        <FaUser />
        <span className="tooltip">About</span>
      </a>

      {/* --- THE TRIGGER (The "T") --- */}
      <div className="nav-trigger">
        <span className="trigger-text">T</span>
      </div>

      {/* --- BOTTOM ITEMS (Initially Hidden) --- */}
      <a href="#projects" className="nav-item item-3">
        <FaCode />
        <span className="tooltip">Work</span>
      </a>
      <a href="#contact" className="nav-item item-4">
        <FaEnvelope />
        <span className="tooltip">Contact</span>
      </a>
    </div>
  );
};

export default Sidebar;
