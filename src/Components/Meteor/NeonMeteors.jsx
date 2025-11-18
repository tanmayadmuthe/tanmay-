import React, { useRef, useEffect } from "react";
import "./NeonMeteors.css";

const NeonMeteors = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // --- OPTIMIZATION VARIABLES ---
    const isMobile = window.innerWidth < 768;
    const MAX_METEORS = isMobile ? 4 : 10;

    // FPS Throttling
    let lastTime = 0;
    const fpsInterval = isMobile ? 1000 / 30 : 1000 / 60; // 30FPS on mobile, 60FPS on Desktop

    const resizeCanvas = () => {
      // CRITICAL FIX: Force low resolution on mobile
      // Mobile screens (Retina) usually have devicePixelRatio of 2 or 3.
      // We force it to 1 to save massive GPU power.
      const dpr = isMobile ? 1 : window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Scale context to match dpr so coordinates work as expected
      ctx.scale(dpr, dpr);

      // Ensure CSS matches window size
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const meteors = [];
    const NEON_PALETTE = ["0, 255, 255", "255, 0, 255", "0, 255, 127"];

    class Meteor {
      constructor(startOnScreen = false) {
        this.reset(startOnScreen);
      }

      reset(startOnScreen = false) {
        const edge = Math.floor(Math.random() * 4);
        this.color =
          NEON_PALETTE[Math.floor(Math.random() * NEON_PALETTE.length)];

        this.length = Math.random() * (isMobile ? 150 : 450) + 100;
        this.speed = Math.random() * (isMobile ? 2 : 3) + 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.trail = [];
        this.maxTrail = isMobile ? 15 : 50; // Reduce memory usage

        if (startOnScreen) {
          this.x = Math.random() * window.innerWidth;
          this.y = Math.random() * window.innerHeight;
          if (edge === 0) {
            this.vx = 0;
            this.vy = this.speed;
          } else if (edge === 1) {
            this.vx = -this.speed;
            this.vy = 0;
          } else if (edge === 2) {
            this.vx = 0;
            this.vy = -this.speed;
          } else {
            this.vx = this.speed;
            this.vy = 0;
          }
        } else {
          if (edge === 0) {
            this.x = Math.random() * window.innerWidth;
            this.y = -this.length;
            this.vx = 0;
            this.vy = this.speed;
          } else if (edge === 1) {
            this.x = window.innerWidth + this.length;
            this.y = Math.random() * window.innerHeight;
            this.vx = -this.speed;
            this.vy = 0;
          } else if (edge === 2) {
            this.x = Math.random() * window.innerWidth;
            this.y = window.innerHeight + this.length;
            this.vx = 0;
            this.vy = -this.speed;
          } else {
            this.x = -this.length;
            this.y = Math.random() * window.innerHeight;
            this.vx = this.speed;
            this.vy = 0;
          }
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.trail.length > this.maxTrail) this.trail.shift();

        if (
          this.x < -this.length * 2 ||
          this.x > window.innerWidth + this.length * 2 ||
          this.y < -this.length * 2 ||
          this.y > window.innerHeight + this.length * 2
        ) {
          this.reset();
        }
      }

      draw() {
        const baseColor = `rgba(${this.color}, 0.4)`;
        const glowColor = `rgba(${this.color}, 0.2)`;

        ctx.strokeStyle = baseColor;
        ctx.lineWidth = isMobile ? 2 : 7;
        ctx.lineCap = "round";

        if (!isMobile) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = glowColor;
        } else {
          ctx.shadowBlur = 0;
        }

        for (let i = 0; i < this.trail.length - 1; i++) {
          const point = this.trail[i];
          const nextPoint = this.trail[i + 1];
          const fade = (i / this.trail.length) * point.opacity * 0.3;
          ctx.strokeStyle = `rgba(${this.color}, ${fade})`;
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

    const animate = (timestamp) => {
      animationFrameId = requestAnimationFrame(animate);

      // --- FPS THROTTLING ---
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = timestamp - (elapsed % fpsInterval);

      // Clear using the internal width/height (dpr adjusted)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor) => {
        meteor.update();
        meteor.draw();
      });
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neon-meteors-canvas" />;
};

export default NeonMeteors;
