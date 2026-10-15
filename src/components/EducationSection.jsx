
import React from "react";
import "./EducationSection.css";

const educationItems = [
  {
    period: "2022 — 2024",
    level: "INTERMEDIATE",
    degree: "Intermediate Education",
    institution: "Your College Name",
    description:
      "Built a strong academic foundation and developed skills for further education.",
    number: "01",
  },
  {
    period: "2020 — 2022",
    level: "SECONDARY",
    degree: "Matriculation",
    institution: "Your School Name",
    description:
      "Completed secondary education while developing core academic knowledge.",
    number: "02",
  },
];

export default function EducationSection() {
  return (
    <section className="stitch-edu-section" id="education">
      <span
        className="stitch-viewfinder stitch-viewfinder-tl"
        aria-hidden="true"
      />
      <span
        className="stitch-viewfinder stitch-viewfinder-tr"
        aria-hidden="true"
      />
      <span
        className="stitch-viewfinder stitch-viewfinder-bl"
        aria-hidden="true"
      />
      <span
        className="stitch-viewfinder stitch-viewfinder-br"
        aria-hidden="true"
      />

      <div className="stitch-container">
        <div className="stitch-tag-row">
          <span className="stitch-crimson-dot" />
          <p className="stitch-tag-text">MY BACKGROUND</p>
        </div>

        <div className="stitch-headline-wrap">
          <h2 className="stitch-headline-xl stitch-edu-headline">
            EDUCATION <span className="stitch-slash">/</span>
            <span className="stitch-heading-rest">
              {" "}ACADEMIC JOURNEY
            </span>
          </h2>
        </div>

        <div className="stitch-edu-grid">
          {educationItems.map((item) => (
            <article className="stitch-edu-card" key={item.number}>
              <div className="stitch-edu-card-top">
                <span className="stitch-edu-number">
                  {item.number}
                </span>

                <span className="stitch-edu-period">
                  {item.period}
                </span>
              </div>

              <div className="stitch-edu-card-content">
                <span className="stitch-edu-meta">
                  {item.level}
                </span>

                <h3 className="stitch-edu-degree">
                  {item.degree}
                </h3>

                <p className="stitch-edu-institution">
                  {item.institution}
                </p>

                <div
                  className="stitch-edu-divider"
                  aria-hidden="true"
                />

                <p className="stitch-edu-description">
                  {item.description}
                </p>
              </div>

              <span
                className="stitch-edu-card-watermark"
                aria-hidden="true"
              >
                {item.number}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
