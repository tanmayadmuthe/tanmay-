import React from "react";

const projects = [
  {
    title: "Minecraft Survival Series",
    desc: "Long-form series and worldbuilding with carefully planned base",
    img: "/assets/panel-1.jpg",
    link: "#",
    code: "#",
  },
  {
    title: "Mood Tracker (Feelio-inspired)",
    desc: "Emotion tracking web app with calm UX",
    img: "/assets/panel-2.jpg",
    link: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section launch-panels">
      {projects.map((p, i) => (
        <article className="panel" key={i}>
          <div
            className="panel-media"
            style={{ backgroundImage: `url(${p.img})` }}
          />
          <div className="panel-body container">
            <div className="panel-copy">
              <h2>{p.title}</h2>
              <p className="panel-sub">{p.desc}</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a className="btn btn-primary" href={p.link}>
                  View
                </a>
                <a className="btn btn-outline" href={p.code}>
                  Code
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
