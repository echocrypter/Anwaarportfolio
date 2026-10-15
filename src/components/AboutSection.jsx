import React from 'react';
import { ArrowDown } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection({ onScrollToSection }) {
  return (
    <section
      className="stitch-about-section"
      id="about"
      aria-label="About Anwaar Ahmad"
    >
      {/* Decorative viewfinder corners */}
      <div className="stitch-viewfinder stitch-viewfinder-tl" aria-hidden="true" />
      <div className="stitch-viewfinder stitch-viewfinder-tr" aria-hidden="true" />
      <div className="stitch-viewfinder stitch-viewfinder-bl" aria-hidden="true" />
      <div className="stitch-viewfinder stitch-viewfinder-br" aria-hidden="true" />

      <div className="stitch-container">
        {/* Section label */}
        <div className="stitch-tag-row scroll-reveal">
          <span className="stitch-crimson-dot" aria-hidden="true" />
          <p className="stitch-tag-text">ABOUT ME</p>
        </div>

        {/* Main heading */}
        <div className="stitch-headline-wrap scroll-reveal delay-1">
          <h2 className="stitch-headline-xl">
            ABOUT <span className="stitch-slash">/</span>
            <span className="stitch-heading-rest">
              {' '}PASSION &amp; DISCIPLINE
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="stitch-about-grid">
          {/* Left column */}
          <div className="stitch-about-left">
            <div className="stitch-portrait-card scroll-reveal delay-1">
              <img
                src="/cricket.jpg"
                alt="Cricket player batting on the pitch"
                className="stitch-portrait-img"
                loading="lazy"
              />

              <div className="stitch-portrait-overlay">
                <span className="stitch-portrait-badge">
                  Cricket &amp; Discipline
                </span>
                <p className="stitch-portrait-sub">
                  Focus on and off the pitch
                </p>
              </div>
            </div>

            <blockquote className="stitch-quote-box scroll-reveal delay-2">
              <p className="stitch-quote-text">
                "My philosophy is simple: Stay focused, work hard, keep
                learning, and never stop chasing your dreams."
              </p>
              <cite className="stitch-quote-author">
                — ANWAAR AHMAD
              </cite>
            </blockquote>
          </div>

          {/* Right column */}
          <div className="stitch-about-right">
            <div className="stitch-narrative-block scroll-reveal delay-1">
              <h3 className="stitch-narrative-title">
                STAY FOCUSED, WORK HARD, KEEP LEARNING.
              </h3>

              <p className="stitch-lead-text">
                Hi, I'm Anwaar Ahmad, an intermediate student with a strong
                passion for cricket and a love for learning new things. I
                believe in working hard, staying disciplined, and constantly
                improving myself both on and off the field.
              </p>

              <p className="stitch-body-text">
                Cricket is more than just a sport to me — it's a passion that
                motivates me to push my limits, stay focused, and develop the
                skills needed to succeed. I enjoy playing cricket, learning
                new techniques, and challenging myself to become a better
                player every day. The game has taught me valuable lessons
                about teamwork, patience, leadership, and never giving up,
                even when things get tough.
              </p>

              <p className="stitch-body-text">
                Alongside my passion for cricket, I am focused on my education
                and personal growth. As a student, I believe that success
                comes from dedication, consistency, and a willingness to learn
                from mistakes. Whether I'm studying, practicing on the field,
                or taking on a new challenge, I always try to give my best.
              </p>

              <p className="stitch-body-text">
                My goal is to keep growing, improve my cricketing abilities,
                achieve my academic goals, and make the most of every
                opportunity that comes my way. I believe that with hard work,
                determination, and a positive mindset, I can turn my
                ambitions into reality.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="stitch-metrics-grid scroll-reveal delay-2">
              <div className="stitch-metric-card">
                <span className="stitch-metric-val stitch-accent">
                  TAPE &amp; HARDBALL
                </span>
                <span className="stitch-metric-lbl">Cricket Focus</span>
              </div>

              <div className="stitch-metric-card">
                <span className="stitch-metric-val">2025–2027</span>
                <span className="stitch-metric-lbl">Intermediate</span>
              </div>

              <div className="stitch-metric-card">
                <span className="stitch-metric-val">STUDENT</span>
                <span className="stitch-metric-lbl">Dedicated Learner</span>
              </div>

              <div className="stitch-metric-card">
                <span className="stitch-metric-val stitch-accent">
                  KHUSHAB
                </span>
                <span className="stitch-metric-lbl">Punjab, Pakistan</span>
              </div>
            </div>

            {/* Personal details and navigation */}
            <div className="stitch-seal-card scroll-reveal delay-3">
              <div className="stitch-seal-left">
                <span className="stitch-monogram-circle" aria-hidden="true">
                  A
                </span>

                <div className="stitch-seal-details">
                  <p className="stitch-seal-name">Anwaar Ahmad</p>
                  <p className="stitch-seal-loc">
                    Khushab / Jauharabad — Punjab, Pakistan
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="stitch-seal-btn"
                onClick={() => onScrollToSection?.('hobbies')}
              >
                <span>Explore Hobbies</span>
                <ArrowDown size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
