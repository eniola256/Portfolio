import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";
import { projects } from "./projectsData.js";

const PER_PAGE = 2;                      // projects shown at once
const pad = (n) => String(n).padStart(2, "0");

function ProjectRow({ project, index, order, hidden }) {
  return (
    // every row stays in the page (good for SEO); off-screen ones are just hidden
    <article className="pj-row" hidden={hidden} style={{ "--i": order }}>
      <span className="pj-num">{pad(index + 1)}</span>

      <div className="pj-main">
        <h3>
          {/* the ::after on this link stretches over the whole row */}
          <Link to={`/projects/${project.slug}`} className="pj-link">
            {project.name}
          </Link>
        </h3>
        <p className="pj-type">
          {project.type}
          {project.status && <em className="project-status">{project.status}</em>}
        </p>
        <p className="pj-sum">{project.shortSummary}</p>
      </div>

      <ul className="pj-stack">
        {project.cardStack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="pj-media">
        <img src={project.img} alt={project.alt} loading="lazy" />
      </div>

      <div className="pj-actions">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the ${project.name} live demo`}
        >
          Live demo <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function Projects() {
  const [sectionRef, sectionVisible] = useFadeInOnScroll();
  const [start, setStart] = useState(0);
  const [paged, setPaged] = useState(false);
  const touchX = useRef(null);

  const total = projects.length;
  const maxStart = Math.max(0, total - PER_PAGE);
  const end = Math.min(total, start + PER_PAGE);

  const go = (dir) => {
    setPaged(true);
    setStart((s) => Math.min(maxStart, Math.max(0, s + dir)));
  };

  // swipe left / right on touch screens
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <section
      ref={sectionRef}
      id="Projects"
      className={`section project-section${sectionVisible ? " show" : ""}`}
    >
      <span className="pj-grid" aria-hidden="true" />
      <span className="pj-corner-ring" aria-hidden="true" />
      <span className="pj-corner-circle" aria-hidden="true" />

      <div className="pj-top">
        <span className="pj-vline" aria-hidden="true" />
        <span className="pj-sq" aria-hidden="true" />
        <span className="pj-ring" aria-hidden="true" />
        <span className="pj-circle" aria-hidden="true" />

        <div className="pj-copy">
          <p className="pj-eyebrow" style={{ "--i": 0 }}>
            <i aria-hidden="true" /> Selected work / 02
          </p>
          <h2 className="pj-heading" style={{ "--i": 1 }}>
            The projects that helped me <em>grow</em> as a developer.
          </h2>
        </div>
      </div>

      <div
        className="pj-list"
        data-flip={start % 2}
        style={{ "--base": paged ? "0s" : "0.3s" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {projects.map((p, i) => (
          <ProjectRow
            key={p.slug}
            project={p}
            index={i}
            order={i - start}
            hidden={i < start || i >= end}
          />
        ))}
      </div>

      <div className="pj-pager">
        <button
          type="button"
          className="pj-arrow"
          onClick={() => go(-1)}
          disabled={start === 0}
          aria-label="Previous projects"
        >
          ←
        </button>

        <div className="pj-count">
          <p aria-live="polite">
            {pad(end)} / {pad(total)}
          </p>
          <span className="pj-bar" aria-hidden="true">
            <i style={{ width: `${(end / total) * 100}%` }} />
          </span>
        </div>

        <button
          type="button"
          className="pj-arrow"
          onClick={() => go(1)}
          disabled={start >= maxStart}
          aria-label="Next projects"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Projects;
