import React, { useRef, useEffect } from "react";
import "./NeonMeteors.css";

const NeonMeteors = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // --- DEVICE DETECTION ---
    // Check if the device is mobile (width < 768px)
    const isMobile = window.innerWidth < 768;

    // --- CONFIGURATION ---
    // Desktop: 10 meteors (Full visuals)
    // Mobile: 3 meteors (Prevents lag)
    const MAX_METEORS = isMobile ? 3 : 10;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const meteors = [];

    const NEON_PALETTE = [
      "0, 255, 255", // Cyan
      "255, 0, 255", // Magenta
      "0, 255, 127", // Spring Green
    ];

    class Meteor {
      constructor(startOnScreen = false) {
        this.reset(startOnScreen);
      }

      reset(startOnScreen = false) {
        const edge = Math.floor(Math.random() * 4);
        this.color =
          NEON_PALETTE[Math.floor(Math.random() * NEON_PALETTE.length)];

        // Desktop: Long trails (450px) | Mobile: Shorter (200px)
        this.length = Math.random() * (isMobile ? 200 : 450) + 150;

        // Desktop: Fast (3-5) | Mobile: Slightly slower (2-4)
        this.speed = Math.random() * (isMobile ? 2 : 3) + 2;

        this.opacity = Math.random() * 0.5 + 0.5;
        this.trail = [];

        // Desktop: Smooth long trail (50 points) | Mobile: Optimized (20 points)
        this.maxTrail = isMobile ? 20 : 50;

        // Spawn Logic
        if (startOnScreen) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
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
            this.x = Math.random() * canvas.width;
            this.y = -this.length;
            this.vx = 0;
            this.vy = this.speed;
          } else if (edge === 1) {
            this.x = canvas.width + this.length;
            this.y = Math.random() * canvas.height;
            this.vx = -this.speed;
            this.vy = 0;
          } else if (edge === 2) {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + this.length;
            this.vx = 0;
            this.vy = -this.speed;
          } else {
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
        if (this.trail.length > this.maxTrail) this.trail.shift();

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
        const baseColor = `rgba(${this.color}, 0.4)`;
        const glowColor = `rgba(${this.color}, 0.2)`;

        ctx.strokeStyle = baseColor;
        // Desktop: Thick (7px) | Mobile: Thinner (3px)
        ctx.lineWidth = isMobile ? 3 : 7;
        ctx.lineCap = "round";

        // --- CRITICAL PERFORMANCE CHECK ---
        // Only enable expensive shadowBlur on Desktop
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
