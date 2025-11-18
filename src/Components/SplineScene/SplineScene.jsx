import Spline from "@splinetool/react-spline";
import "./SplineScene.css";

export default function SplineScene() {
  return (
    <div className="spline-wrapper">
      <Spline scene="https://prod.spline.design/xDRCbFu-2ZlzhrAU/scene.splinecode" />
      <div className="spline-overlay"></div>
    </div>
  );
}
