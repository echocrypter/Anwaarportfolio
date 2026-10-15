import React from 'react';
import { Trophy, BookOpen, Film } from 'lucide-react';
import './HobbiesSection.css';

export default function HobbiesSection() {
  const hobbies = [
    {
      id: 'cricket',
      title: 'Cricket: Tape Ball & Hardball',
      category: 'Sport / Athletics',
      description:
        'Passionate cricketer playing both tape ball and hardball formats. Dedicated to regular nets practice, mastering bowling/batting techniques, and teamwork.',
      footerTag: 'On & Off the Field',
      image: '/cricket.jpg',
      alt: 'Cricket player in motion on pitch',
      icon: <Trophy size={18} className="stitch-hobby-icon" />,
    },
    {
      id: 'reading',
      title: 'Reading Books',
      category: 'Knowledge / Growth',
      description:
        'Exploring non-fiction, personal development, and literature to cultivate disciplined habits, focus, and a curious mindset.',
      footerTag: 'Lifelong Learning',
      image: '/books.jpg',
      alt: 'Stack of books and warm reading light',
      icon: <BookOpen size={18} className="stitch-hobby-icon" />,
    },
    {
      id: 'cinema',
      title: 'Watching Shows & Movies',
      category: 'Entertainment / Relaxation',
      description:
        'Unwinding with compelling cinema, inspiring sports documentaries, and narrative storytelling during leisure hours.',
      footerTag: 'Cinema & Series',
      image: '/cinema.jpg',
      alt: 'Moody home theater cinematic setup',
      icon: <Film size={18} className="stitch-hobby-icon" />,
    },
  ];

  return (
    <section className="stitch-hobbies-section" id="hobbies" aria-label="Hobbies and Passions">
      {/* Viewfinder corner ticks */}
      <div className="stitch-viewfinder stitch-viewfinder-tl" aria-hidden="true"></div>
      <div className="stitch-viewfinder stitch-viewfinder-tr" aria-hidden="true"></div>
      <div className="stitch-viewfinder stitch-viewfinder-bl" aria-hidden="true"></div>
      <div className="stitch-viewfinder stitch-viewfinder-br" aria-hidden="true"></div>

      <div className="stitch-container">
        {/* Section Header Tag */}
        <div className="stitch-tag-row scroll-reveal">
          <span className="stitch-crimson-dot" aria-hidden="true"></span>
          <p className="stitch-tag-text">SECTION 03 / OFF-CAMERA OBSESSIONS</p>
        </div>

        {/* Section Header */}
        <div className="stitch-hobbies-header scroll-reveal delay-1">
          <div>
            <h2 className="stitch-headline-xl">
              HOBBIES <span className="stitch-slash">/</span> PASSIONS &amp; PURSUITS
            </h2>
            <p className="stitch-hobbies-subtitle">
              What keeps me inspired, active, and curious beyond academics.
            </p>
          </div>

          <div className="stitch-hobbies-count-badge">
            <span>3 Passions</span>
          </div>
        </div>

        {/* Curated Bento Grid of Pursuits */}
        <div className="stitch-hobbies-grid">
          {hobbies.map((hobby, index) => (
            <article key={hobby.id} className={`stitch-hobby-card scroll-reveal delay-${index + 1}`}>
              <div className="stitch-hobby-img-wrap">
                <img
                  src={hobby.image}
                  alt={hobby.alt}
                  className="stitch-hobby-img"
                  loading="lazy"
                />
                <div className="stitch-hobby-category-pill">
                  <span>{hobby.category}</span>
                </div>
              </div>

              <div className="stitch-hobby-content">
                <div>
                  <h3 className="stitch-hobby-title">{hobby.title}</h3>
                  <p className="stitch-hobby-desc">{hobby.description}</p>
                </div>

                <div className="stitch-hobby-footer">
                  <span className="stitch-hobby-footer-tag">{hobby.footerTag}</span>
                  {hobby.icon}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
