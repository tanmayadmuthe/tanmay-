import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <div className="two-col">
          <div>
            <p>
              I'm a frontend developer focused on clean design, performant UIs,
              and delightful micro-interactions.
            </p>
            <p>
              I create polished single-page experiences, work with React + Vite,
              and make content about Minecraft, UI, and web dev.
            </p>
          </div>

          <aside className="card">
            <h3>Quick facts</h3>
            <ul>
              <li>Location: India</li>
              <li>Stack: React, JavaScript, CSS</li>
              <li>Interests: Games, anime, design</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
