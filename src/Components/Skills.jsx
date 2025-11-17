import React from "react";

export default function Skills() {
  const skills = ["React", "JavaScript", "HTML/CSS", "Git", "Vite", "Pygame"];
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-row">
          {skills.map((s, i) => (
            <div className="skill-pill" key={i}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
