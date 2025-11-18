import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import NeonMeteors from "./Components/Meteor/NeonMeteors";
import Sidebar from "./Sidebar/Sidebar";
import useMousePosition from "./hooks/useMousePosition";
import Projects from "./Components/Work/Projects";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";

function App() {
  const { x: mouseX, y: mouseY } = useMousePosition();

  useEffect(() => {
    if (mouseX !== null && mouseY !== null) {
      document.documentElement.style.setProperty("--mouseX", `${mouseX}px`);
      document.documentElement.style.setProperty("--mouseY", `${mouseY}px`);
    }
  }, [mouseX, mouseY]);

  return (
    <Router>
      <div className="App">
        {/* Persistent Background Elements */}
        <NeonMeteors />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
