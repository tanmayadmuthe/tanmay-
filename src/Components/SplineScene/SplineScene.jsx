import React from "react";
import Spline from "@splinetool/react-spline";
import "./SplineScene.css";

export default function SplineScene() {
  return (
    <div className="spline-wrapper">
      {/* Fixed URL: This is a public scene that shouldn't give a 403 error.
         It displays a futuristic 3D element.
      */}
      <Spline scene="https://prod.spline.design/xDRCbFu-2ZlzhrAU/scene.splinecode" />

      {/* Overlay to prevent the logo from being clickable/distracting */}
      <div className="spline-overlay"></div>
    </div>
  );
}
