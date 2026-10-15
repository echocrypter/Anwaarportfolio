import React from 'react';
import { X, Camera, GraduationCap, Heart, Award, MapPin, Mail, ExternalLink } from 'lucide-react';
import './InfoModal.css';

export default function InfoModal({ section, onClose, onSelectSection }) {
  if (!section) return null;

  const content = {
    about: {
      title: 'About Anwaar',
      tag: 'Creative Vision & Identity',
      icon: <Camera className="modal-icon-badge" />,
      description:
        'Anwaar is a contemporary visual artist, portrait photographer, and creative director renowned for evocative storytelling, high-contrast aesthetics, and cinematic depth. Working across editorial assignments, fashion lookbooks, and personal conceptual series, his work explores the subtle intersection of poise, emotion, and architectural human form.',
      highlights: [
        { label: 'Specialty', value: 'Editorial Portraiture & High Fashion' },
        { label: 'Signature Style', value: 'Deep shadows, warm studio tones & bold typography' },
        { label: 'Location', value: 'Lahore / Global Commissions' },
        { label: 'Gear of Choice', value: 'Canon 5D / R-Series Prime Lenses' },
      ],
      quote: '"Photography is not merely capturing what is seen — it is framing the gravity of the unseen."',
    },
    hobbies: {
      title: 'Passions & Hobbies',
      tag: 'Creative Disciplines & Lifestyle',
      icon: <Heart className="modal-icon-badge" />,
      description:
        'Beyond the camera viewfinder, Anwaar immerses himself in creative pursuits that feed his visual vocabulary, attention to detail, and distinct editorial perspective.',
      items: [
        {
          title: 'Analog 35mm & Medium Format',
          desc: 'Developing black-and-white film by hand in personal darkroom sessions to maintain tactile connection to silver halide grains.',
          tag: 'Craft',
        },
        {
          title: 'Cinematic Storyboarding',
          desc: 'Drafting scene lightmaps, tone boards, and narrative sequences inspired by neo-noir and French new-wave cinema.',
          tag: 'Directing',
        },
        {
          title: 'Architectural Exploration',
          desc: 'Studying brutalist and heritage Mughal architecture, observing how natural daylight sculpts geometric concrete and stone.',
          tag: 'Geometry',
        },
        {
          title: 'Specialty Coffee Brewing',
          desc: 'Precision pour-overs and V60 extractions — a morning ritual celebrating patience, balance, and fine craft.',
          tag: 'Ritual',
        },
      ],
    },
    education: {
      title: 'Education & Training',
      tag: 'Academic Foundation & Mastery',
      icon: <GraduationCap className="modal-icon-badge" />,
      description:
        'Grounded in rigorous visual communication theory complemented by intensive hands-on technical masterclasses in studio lighting and digital color grading.',
      milestones: [
        {
          degree: 'Bachelor of Visual Arts & Media Studies',
          institution: 'Institute of Art & Culture / Design Academy',
          period: '2020 — 2024',
          details:
            'Focus on Visual Semiotics, History of Photography, Studio Lighting Physics, and Creative Direction.',
        },
        {
          degree: 'Masterclass in Advanced Editorial Lighting',
          institution: 'Studio Masters Collective',
          period: '2023',
          details:
            'Specialized training in high-contrast strobes, continuous cinema lights, and softbox diffusion sculpting.',
        },
        {
          degree: 'Digital Color Grading & Retouching Certification',
          institution: 'Pro Retouch Guild',
          period: '2022',
          details:
            'Precision skin-tone preservation, color-space management, and print-ready high-end editorial mastering.',
        },
      ],
    },
  };

  const activeData = content[section] || content.about;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-tabs">
            {['about', 'hobbies', 'education'].map((key) => (
              <button
                key={key}
                type="button"
                className={`modal-tab-btn ${section === key ? 'active' : ''}`}
                onClick={() => onSelectSection(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-content-area">
          <div className="modal-heading-wrap">
            <span className="modal-badge">{activeData.tag}</span>
            <h2 className="modal-title">{activeData.title}</h2>
          </div>

          <p className="modal-description">{activeData.description}</p>

          {/* Section Specific Layouts */}
          {section === 'about' && (
            <div className="about-details">
              <div className="highlights-grid">
                {activeData.highlights.map((h, i) => (
                  <div key={i} className="highlight-card">
                    <span className="highlight-label">{h.label}</span>
                    <span className="highlight-val">{h.value}</span>
                  </div>
                ))}
              </div>
              <blockquote className="quote-box">
                <p>{activeData.quote}</p>
              </blockquote>
            </div>
          )}

          {section === 'hobbies' && (
            <div className="hobbies-grid">
              {activeData.items.map((item, i) => (
                <div key={i} className="hobby-card">
                  <div className="hobby-card-header">
                    <span className="hobby-tag">{item.tag}</span>
                  </div>
                  <h3 className="hobby-title">{item.title}</h3>
                  <p className="hobby-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {section === 'education' && (
            <div className="education-timeline">
              {activeData.milestones.map((m, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-point"></div>
                  <div className="timeline-content">
                    <div className="timeline-top">
                      <h3 className="timeline-degree">{m.degree}</h3>
                      <span className="timeline-period">{m.period}</span>
                    </div>
                    <span className="timeline-institution">{m.institution}</span>
                    <p className="timeline-details">{m.details}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-footer-info">
            <span className="footer-status-dot"></span>
            <span>Anwaar Visual Arts Archive // 2026</span>
          </div>
          <button type="button" className="modal-action-btn" onClick={onClose}>
            Back to Showcase
          </button>
        </div>
      </div>
    </div>
  );
}
