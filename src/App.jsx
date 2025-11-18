import React, { useEffect } from "react";
import Homepage from "./components/Homepage/Homepage";
import useMousePosition from "../src/hooks/useMousePosition";
import NeonMeteors from "./Components/Meteor/NeonMeteors";

function App() {
  const { x: mouseX, y: mouseY } = useMousePosition();

  // --- CHANGED: Added a check for null ---
  useEffect(() => {
    // Only update the CSS variables if the mouse has moved
    if (mouseX !== null && mouseY !== null) {
      document.documentElement.style.setProperty("--mouseX", `${mouseX}px`);
      document.documentElement.style.setProperty("--mouseY", `${mouseY}px`);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="App">
      <NeonMeteors />
      <Homepage />
    </div>
  );
}

export default App;
