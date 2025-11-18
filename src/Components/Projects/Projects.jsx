import React from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaLeaf,
  FaCloud,
  FaMicrochip,
} from "react-icons/fa";

const projectsData = [
  {
    title: "Interview Easy",
    tech: ["Python", "React", "PostgreSQL", "Azure", "Twilio"],
    description:
      "AI-powered automated interview screening platform with real-time voice calls, Azure TTS/STT, and multi-metric candidate scoring.",
    icon: <FaRobot />,
    link: "#",
    github: "#",
  },
  {
    title: "Video Calling App",
    tech: ["Next.js", "TypeScript", "Tailwind", "Clerk", "Stream SDK"],
    description:
      "Feature-rich video conferencing app with screen sharing, recording, and secure authentication via Clerk.",
    icon: <FaLaptopCode />,
    link: "#",
    github: "#",
  },
  {
    title: "AI Web Scraper",
    tech: ["Python", "Selenium", "Streamlit", "Gemini Flash 2.0"],
    description:
      "Dynamic scraper handling JS content, enriched with Gemini LLM for semantic HTML parsing and summarization.",
    icon: <FaCode />,
    link: "#",
    github: "#",
  },
  {
    title: "Gestational Diabetes AI",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    description:
      "Predictive models (Random Forest, SVM) for maternal health with 97% accuracy after hyperparameter tuning.",
    icon: <FaMicrochip />,
    link: "#",
    github: "#",
  },
  {
    title: "Avian Climate Response",
    tech: ["R", "ggplot2", "Caret", "Random Forest"],
    description:
      "Analyzed 40 years of data to model avian habitat shifts under IPCC climate scenarios using ML in R.",
    icon: <FaCloud />,
    link: "#",
    github: "#",
  },
  {
    title: "Tea Leaf Disease ML",
    tech: ["Python", "TensorFlow", "OpenCV"],
    description:
      "Machine learning model for detecting diseases in tea leaves using image-based datasets for agricultural aid.",
    icon: <FaLeaf />,
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="section-title">MY WORK</h2>
        <p className="section-subtitle">
          A collection of my recent experiments and builds.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-icon">{project.icon}</div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="card-links">
                <a href={project.github} className="link-btn">
                  <FaGithub /> Code
                </a>
                <a href={project.link} className="link-btn">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
