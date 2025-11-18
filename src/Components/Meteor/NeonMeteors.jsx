import React, { useRef, useEffect } from "react";
import "./NeonMeteors.css";

const NeonMeteors = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const meteors = [];
    const MAX_METEORS = 10; // Keeping it low for clean look
    const NEON_COLOR = "rgba(0, 255, 255, 1)";
    const NEON_GLOW = "rgba(0, 255, 255, 0.5)";

    class Meteor {
      constructor(startOnScreen = false) {
        this.reset(startOnScreen);
      }

      reset(startOnScreen = false) {
        const edge = Math.floor(Math.random() * 4);

        this.length = Math.random() * 400 + 150; // Huge size
        this.speed = Math.random() * 7 + 2; // Fast speed
        this.opacity = Math.random() * 0.5 + 0.5;
        this.trail = [];
        this.maxTrail = 50;

        // --- FIX: Spawn logic ---
        if (startOnScreen) {
          // Force spawn anywhere on screen for instant visibility
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;

          // Give random straight direction
          if (edge === 0) {
            this.vx = 0;
            this.vy = this.speed;
          } // Down
          else if (edge === 1) {
            this.vx = -this.speed;
            this.vy = 0;
          } // Left
          else if (edge === 2) {
            this.vx = 0;
            this.vy = -this.speed;
          } // Up
          else {
            this.vx = this.speed;
            this.vy = 0;
          } // Right
        } else {
          // Normal spawn from edges
          if (edge === 0) {
            // TOP -> Down
            this.x = Math.random() * canvas.width;
            this.y = -this.length;
            this.vx = 0;
            this.vy = this.speed;
          } else if (edge === 1) {
            // RIGHT -> Left
            this.x = canvas.width + this.length;
            this.y = Math.random() * canvas.height;
            this.vx = -this.speed;
            this.vy = 0;
          } else if (edge === 2) {
            // BOTTOM -> Up
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + this.length;
            this.vx = 0;
            this.vy = -this.speed;
          } else {
            // LEFT -> Right
            this.x = -this.length;
            this.y = Math.random() * canvas.height;
            this.vx = this.speed;
            this.vy = 0;
          }
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.trail.length > this.maxTrail) {
          this.trail.shift();
        }

        // Reset if strictly off-screen
        if (
          this.x < -this.length * 2 ||
          this.x > canvas.width + this.length * 2 ||
          this.y < -this.length * 2 ||
          this.y > canvas.height + this.length * 2
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.strokeStyle = NEON_COLOR;
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        ctx.shadowBlur = 20;
        ctx.shadowColor = NEON_GLOW;

        // Draw Trail
        for (let i = 0; i < this.trail.length - 1; i++) {
          const point = this.trail[i];
          const nextPoint = this.trail[i + 1];

          // Calculate fade based on trail position
          const fade = (i / this.trail.length) * point.opacity;

          ctx.strokeStyle = `rgba(0, 255, 255, ${fade})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();
        }

        ctx.shadowBlur = 0;
      }
    }
    for (let i = 0; i < MAX_METEORS; i++) {
      meteors.push(new Meteor(true));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      meteors.forEach((meteor) => {
        meteor.update();
        meteor.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neon-meteors-canvas" />;
};

export default NeonMeteors;
