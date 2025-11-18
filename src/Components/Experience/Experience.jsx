import React from "react";
import "./Experience.css";
import {
  FaBriefcase,
  FaBuilding,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    role: "Programmer Analyst Trainee",
    company: "Cognizant (Full Time)",
    location: "Coimbatore, India",
    date: "July 2025 - Present",
    description: [
      "Working in the Java Full Stack domain with React, Spring Boot, Microservices, Docker, and AWS.",
      "Collaborating with a team of 4 to build an end-to-end Cab Booking Application.",
    ],
    tech: ["Java", "React", "Spring Boot", "AWS", "Docker", "Microservices"],
    icon: <FaBuilding />,
    color: "#00d2ff", // Cyan
  },
  {
    id: 2,
    role: "PRISM Intern",
    company: "Samsung R&D Institute",
    location: "Remote",
    date: "Oct 2023 - Aug 2024",
    description: [
      "Contributed to a Virtual Secure OS within AOSP, focusing on HPC and memory optimization.",
      "Collaborated with senior engineers following industry-standard workflows.",
    ],
    tech: ["AOSP", "Operating Systems", "C++", "Security", "HPC"],
    icon: <FaBriefcase />,
    color: "#ff00ff", // Magenta
  },
  {
    id: 3,
    role: "Research Intern",
    company: "Vellore Institute of Technology",
    location: "Chennai, Tamil Nadu",
    date: "May 2024 - July 2024",
    description: [
      "Developed a Machine Learning model for disease detection in tea leaves using image datasets.",
      "Applied advanced ML techniques to solve real-world agricultural challenges.",
    ],
    tech: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
    icon: <FaUniversity />,
    color: "#00ff9d", // --- CHANGED: Neon Mint Green ---
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 className="section-title">CAREER LOG</h2>
        <p className="section-subtitle">
          My journey through the tech industry.
        </p>
      </div>

      <div className="timeline">
        {/* The Vertical Line */}
        <div className="timeline-line"></div>

        {experienceData.map((item, index) => (
          <div className="timeline-item" key={item.id}>
            {/* The Dot on the line */}
            <div
              className="timeline-dot"
              style={{
                borderColor: item.color,
                boxShadow: `0 0 10px ${item.color}`,
              }}
            >
              <div
                className="dot-inner"
                style={{ background: item.color }}
              ></div>
            </div>

            {/* The Content Card */}
            <div className="timeline-content">
              <div className="job-header">
                <div className="role-company">
                  <h3 className="job-role">{item.role}</h3>
                  <h4 className="job-company">{item.company}</h4>
                </div>
                <div className="job-meta">
                  <span className="meta-tag">
                    <FaCalendarAlt /> {item.date}
                  </span>
                  <span className="meta-tag">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                </div>
              </div>

              <ul className="job-description">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className="job-tech">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-pill"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
