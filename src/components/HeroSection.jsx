
import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section
      className="hero-viewport"
      id="hero"
      aria-label="Anwaar Portfolio Hero"
    >
      <div className="hero-image-wrapper">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/hero-anwaar-mobile.png"
          />

          <img
            src="/hero-anwaar.jpg"
            alt="Anwaar holding a camera in a cinematic studio portrait"
            className="hero-main-img"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <div
          className="hero-gradient-vignette"
          aria-hidden="true"
        />
      </div>

      <div className="camera-hud-layer" aria-hidden="true">
        <div className="hud-corner hud-top-left" />
        <div className="hud-corner hud-top-right" />
        <div className="hud-corner hud-bottom-left" />
        <div className="hud-corner hud-bottom-right" />
      </div>
    </section>
  );
}
