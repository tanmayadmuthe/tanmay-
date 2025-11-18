import React, { useEffect } from "react";
import Homepage from "./components/Homepage/Homepage";
import useMousePosition from "../src/hooks/useMousePosition";
import NeonMeteors from "./Components/Meteor/NeonMeteors";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const { x: mouseX, y: mouseY } = useMousePosition();

  useEffect(() => {
    if (mouseX !== null && mouseY !== null) {
      document.documentElement.style.setProperty("--mouseX", `${mouseX}px`);
      document.documentElement.style.setProperty("--mouseY", `${mouseY}px`);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="App">
      <NeonMeteors />
      <Homepage />
      <Sidebar />
    </div>
  );
}

export default App;
