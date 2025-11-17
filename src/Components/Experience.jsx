import React from "react";

export default function Experience() {
  const exps = [
    {
      title: "Frontend Developer (Freelance)",
      company: "Self",
      time: "2023 - Present",
      bullets: ["React sites", "Responsive UI", "Performance tuning"],
    },
    {
      title: "AOSP Intern",
      company: "Samsung PRISM",
      time: "2022",
      bullets: ["Android OS intern work", "System debugging"],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="cards-grid">
          {exps.map((e, i) => (
            <article className="card" key={i}>
              <h3>{e.title}</h3>
              <small style={{ color: "var(--muted)" }}>
                {e.company} · {e.time}
              </small>
              <ul>
                {e.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
