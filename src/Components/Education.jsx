import React from "react";

export default function Education() {
  const items = [
    {
      title: "B.Sc. Computer Science",
      place: "Your University",
      time: "2019 - 2023",
      note: "Focus: Systems, Algorithms, OS",
    },
    {
      title: "PRISM Internship",
      place: "Samsung R&D",
      time: "Summer 2022",
      note: "AOSP & OS development",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          {items.map((it, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-point" />
              <div className="timeline-content">
                <h3>{it.title}</h3>
                <small style={{ color: "var(--muted)" }}>
                  {it.place} · {it.time}
                </small>
                <p>{it.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
