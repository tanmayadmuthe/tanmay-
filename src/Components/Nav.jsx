import React from "react";

export default function Nav() {
  const links = [
    ["home", "Home"],
    ["about", "About"],
    ["education", "Education"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["skills", "Skills"],
    ["contact", "Contact"],
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner container">
          <a className="brand" href="#home">
            Tanmay
          </a>

          <nav className="top-links">
            <ul>
              {links.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* vertical right rail (social + section quick links) */}
      <aside className="right-rail" aria-hidden>
        <div className="rail-inner">
          <div className="rail-links">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="rail-social">
            <a href="#" aria-label="Github">
              GH
            </a>
            <a href="#" aria-label="Twitter">
              TW
            </a>
            <a href="#" aria-label="LinkedIn">
              LI
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
