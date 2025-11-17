import React, { useEffect } from "react";
// nav removed
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  // keep any scroll effects you need for hero (e.g., no nav scrolled toggler)
  useEffect(() => {
    // if you had a nav scroll toggler, remove it or keep other effects
  }, []);

  return (
    <div className="app dark">
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
