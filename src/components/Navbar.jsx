import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenSection, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', badge: 'Bio' },
    { id: 'hobbies', label: 'Hobbies', badge: 'Passions' },
    { id: 'education', label: 'Education', badge: 'Studies' },
  ];

  const handleNavClick = (id) => {
    onOpenSection(id);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    onOpenSection(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-container" aria-label="Main Navigation">
        <div className="navbar-left">
          <a
            href="#hero"
            className="brand-logo"
            onClick={handleLogoClick}
            aria-label="ANWAAR - Home"
          >
            <span className="brand-name">ANWAAR</span>
            <span className="brand-dot" aria-hidden="true"></span>
          </a>

          <div className="nav-divider" aria-hidden="true"></div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link-btn ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  aria-label={`Open ${item.label} section`}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-indicator" aria-hidden="true"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <button
            type="button"
            className="contact-pill-btn"
            onClick={() => handleNavClick('about')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-brand-row">
            <span className="brand-name">ANWAAR</span>
            <span className="brand-dot" aria-hidden="true"></span>
          </div>

          <div className="mobile-nav-list">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mobile-nav-link ${
                  activeSection === item.id ? 'active' : ''
                }`}
                onClick={() => handleNavClick(item.id)}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                <div className="mobile-nav-link-left">
                  <span className="mobile-link-badge">{item.badge}</span>
                  <span className="mobile-link-title">{item.label}</span>
                </div>
                <ArrowUpRight size={18} className="mobile-arrow" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}