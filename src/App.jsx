import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import HobbiesSection from './components/HobbiesSection';
import FooterSection from './components/FooterSection';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  // Smooth scroll handler invoked by Navbar and internal CTAs
  const handleOpenSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Update active section in Navbar based on scroll position
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'hobbies'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id === 'hero' ? null : id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll reveal observer for content cards and typography
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      {/* Floating Navbar (Untouched) */}
      <Navbar
        onOpenSection={handleOpenSection}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main>
        {/* Full-Viewport Hero Section (Untouched) */}
        <HeroSection onOpenSection={handleOpenSection} />

        {/* Stitch Editorial Design Sections */}
        <AboutSection onScrollToSection={handleOpenSection} />
        <EducationSection />
        <HobbiesSection />
        <FooterSection onScrollToSection={handleOpenSection} />
      </main>
    </div>
  );
}
