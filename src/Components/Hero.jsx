import React, { useEffect, useRef } from "react";

export default function Hero() {
  const mockupRef = useRef(null);

  // soft parallax for mockup
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (mockupRef.current) {
        mockupRef.current.style.transform = `translateY(${Math.min(
          y * 0.08,
          40
        )}px)`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // after any existing effects in Hero.jsx, add:
  useEffect(() => {
    // add hero-ready once mounted to trigger staggered transitions
    const heroEl = document.querySelector(".hero-split");
    if (heroEl) {
      // small delay to allow paint
      requestAnimationFrame(() => {
        setTimeout(() => heroEl.classList.add("hero-ready"), 60);
      });
    }
  }, []);

  return (
    <section id="home" className="hero-split">
      {/* decorative vertical bands */}
      <div className="bands" aria-hidden>
        <div className="band" />
        <div className="band" />
        <div className="band" />
        <div className="band" />
      </div>

      <div className="hero-inner container">
        <div className="hero-left">
          <div className="eyebrow">Hi — I'm</div>
          <h1 className="stacked">
            <span>Tanmay</span>
            <span className="accent">.</span>
          </h1>

          <p className="hero-sub">
            I build polished interfaces, product-style landing pages, and
            delightful web experiences.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              See Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-right" ref={mockupRef}>
          <div className="mockup-wrap">
            <img src="./assets/mockup.png" alt="mockup" />
          </div>

          {/* decorative floating circles */}
          <div className="dot dot-1" />
          <div className="dot dot-2" />
          <div className="dot dot-3" />
        </div>
      </div>
    </section>
  );
}
