import { useState } from "react";
import "./About.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const items = [
  {
    n: "01",
    tag: "Capabilities / 001",
    title: "What I do.",
    text: "I build clean, responsive, user-friendly web interfaces with modern technologies like React and CSS. I turn ideas and designs into structured, functional layouts.",
    link: "#Projects",
    cta: "See my projects",
    deco: "plus",
  },
  {
    n: "02",
    tag: "Approach / 002",
    title: "How I work.",
    text: "I focus on understanding how things work under the hood rather than just copying solutions.",
    link: "#Think",
    cta: "My thought process",
    deco: "dots",
  },
  {
    n: "03",
    tag: "Direction / 003",
    title: "Where I’m going.",
    text: "Exploring new technologies and building increasingly useful digital products.",
    link: "#Contact",
    cta: "Let’s connect",
  },
];

function AboutRow({ item, index, open, onToggle }) {
  const [ref, isVisible] = useFadeInOnScroll();
  const bodyId = `abt-body-${item.n}`;

  return (
    <article
      ref={ref}
      className={`abt-row reveal${isVisible ? " show" : ""}${open ? " open" : ""}`}
      style={{ "--i": index }}
    >
      <div className="abt-row-head">
        <span className="abt-num">{item.n}</span>
        <div className="abt-titles">
          <p className="abt-tag">{item.tag}</p>
          <h3>{item.title}</h3>
        </div>
        {/* phones only: the whole header toggles the row */}
        <button
          type="button"
          className="abt-toggle"
          aria-expanded={open}
          aria-controls={bodyId}
          aria-label={`${open ? "Collapse" : "Expand"}: ${item.title}`}
          onClick={onToggle}
        >
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </div>

      <div id={bodyId} className="abt-body">
        <p>{item.text}</p>
        <a href={item.link} className="abt-link">
          {item.cta} <i aria-hidden="true">→</i>
        </a>
      </div>

      {item.deco === "plus" && <span className="abt-deco abt-plus" aria-hidden="true" />}
      {item.deco === "dots" && <span className="abt-deco abt-dots" aria-hidden="true" />}
    </article>
  );
}

function About() {
  const [open, setOpen] = useState(null);
  const [sectionRef, sectionVisible] = useFadeInOnScroll();
  const [copyRef, copyVisible] = useFadeInOnScroll();
  const [listRef, listVisible] = useFadeInOnScroll();

  return (
    <section
      ref={sectionRef}
      id="About"
      className={`section${sectionVisible ? " show" : ""}`}
    >
      {/* decoration */}
      <span className="abt-grid" aria-hidden="true" />
      <span className="abt-vline" aria-hidden="true" />
      <span className="abt-sq abt-sq-blue-left" aria-hidden="true" />
      <span className="abt-sq abt-sq-black" aria-hidden="true" />
      <span className="abt-sq abt-sq-blue-right" aria-hidden="true" />
      <span className="abt-ring2" aria-hidden="true" />

      <div className="abt-left">
        <span className="abt-ring" aria-hidden="true" />
        <span className="abt-circle" aria-hidden="true" />

        <div ref={copyRef} className={`abt-copy${copyVisible ? " show" : ""}`}>
          <p className="abt-eyebrow" style={{ "--i": 0 }}>
            <i aria-hidden="true" /> About me / 01
          </p>
          <h2 className="abt-heading" style={{ "--i": 1 }}>
            More than just a <em>frontend</em> developer.
          </h2>
          <p className="abt-tagline" style={{ "--i": 2 }}>
            I build digital solutions that solve real problems.
          </p>
        </div>
      </div>

      <div ref={listRef} className={`abt-list${listVisible ? " show" : ""}`}>
        {items.map((item, i) => (
          <AboutRow
            key={item.n}
            item={item}
            index={i}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
        <a href="#Projects" className="hero-btn abt-cta">
          See my projects <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default About;
