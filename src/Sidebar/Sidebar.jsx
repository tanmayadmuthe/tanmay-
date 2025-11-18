import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaUser, FaCode, FaEnvelope, FaBriefcase } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="/projects" className="nav-item item-1">
        <FaCode />
        <span className="tooltip">Projects</span>
      </Link>
      <Link to="/experience" className="nav-item item-2">
        <FaBriefcase />
        <span className="tooltip">Experience</span>
      </Link>
      <Link to="/" className="nav-trigger">
        <span className="trigger-text">T</span>
      </Link>
      <Link to="/about" className="nav-item item-3">
        <FaUser />
        <span className="tooltip">About</span>
      </Link>
      <Link to="/contact" className="nav-item item-4">
        <FaEnvelope />
        <span className="tooltip">Contact</span>
      </Link>
    </div>
  );
};

export default Sidebar;
