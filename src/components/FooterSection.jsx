import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import './FooterSection.css';

export default function FooterSection({ onScrollToSection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="stitch-footer-wrap">
      {/* CTA Callout */}
      <section className="stitch-cta-section" id="contact" aria-label="Contact and Match Collaboration">
        <div className="stitch-container">
          <div className="stitch-cta-box scroll-reveal">
            <div className="stitch-cta-content">
              <span className="stitch-cta-tag">GET IN TOUCH</span>
              <h2 className="stitch-cta-title">LET'S CONNECT OR PLAY A MATCH</h2>
              <p className="stitch-cta-desc">
                Open for academic discussions, cricket matches, and collaborative learning.
              </p>
            </div>

            <div className="stitch-cta-actions">
              <a
                href="mailto:contact@anwaar.studio"
                className="stitch-cta-btn-primary"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                className="stitch-cta-btn-secondary"
                onClick={() => onScrollToSection?.('education')}
              >
                View Academic Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="stitch-main-footer">
        <div className="stitch-container">
          <div className="stitch-footer-top">
            <div>
              <div className="stitch-footer-logo-row">
                <span className="stitch-footer-brand">ANWAAR</span>
                <span className="stitch-footer-brand-dot" aria-hidden="true"></span>
              </div>
              <p className="stitch-footer-role">STUDENT &amp; CRICKETER</p>
            </div>

            <nav className="stitch-footer-nav" aria-label="Footer Navigation">
              <button
                type="button"
                className="stitch-footer-link"
                onClick={() => onScrollToSection?.('about')}
              >
                About
              </button>
              <button
                type="button"
                className="stitch-footer-link"
                onClick={() => onScrollToSection?.('hobbies')}
              >
                Hobbies
              </button>
              <button
                type="button"
                className="stitch-footer-link"
                onClick={() => onScrollToSection?.('education')}
              >
                Education
              </button>
              <button
                type="button"
                className="stitch-footer-link stitch-back-to-top"
                onClick={scrollToTop}
              >
                <span>Back to top</span>
                <ArrowUp size={14} />
              </button>
            </nav>
          </div>

          <div className="stitch-footer-bottom">
            <p className="stitch-footer-copy">
              © 2025 ANWAAR AHMAD. STUDENT &amp; CRICKETER. ALL RIGHTS RESERVED.
            </p>
            <div className="stitch-footer-tags">
              <span>KHUSHAB</span>
              <span className="stitch-dot-sep">•</span>
              <span>JAUHARABAD</span>
              <span className="stitch-dot-sep">•</span>
              <span>PUNJAB, PAKISTAN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
