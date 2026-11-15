import { Link } from "react-router-dom";
import "./Project.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";
import { projects } from "./projectsData.js";

function ProjectRow({ project, index }) {
  const [ref, isVisible] = useFadeInOnScroll();
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className={`prow fade-in ${isVisible ? `show delay-${index + 1}` : ""}`}
    >
      <span className="prow-num">{num}</span>

      <div className="prow-main">
        <h3>
          {/* the ::after on this link stretches over the whole row */}
          <Link to={`/projects/${project.slug}`} className="prow-link">
            {project.name}
          </Link>
        </h3>
        <p className="prow-type">
          {project.type}
          {project.status && <em className="project-status">{project.status}</em>}
        </p>
        <p className="prow-sum">{project.shortSummary}</p>
      </div>

      <ul className="project-stack prow-stack">
        {project.cardStack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="prow-media">
        <img src={project.img} alt={project.alt} loading="lazy" />
      </div>

      <div className="prow-actions">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="prow-live"
          aria-label={`Open the ${project.name} live demo`}
        >
          Live demo ↗
        </a>
        <span className="prow-arrow" aria-hidden="true">→</span>
      </div>
    </article>
  );
}

function Projects() {
  const [headRef, headVisible] = useFadeInOnScroll();

  return (
    <section id="Projects" className="section project-section">
      <div
        ref={headRef}
        className={`project-head fade-in ${headVisible ? "show delay-head" : ""}`}
      >
        <p className="head">Selected work</p>
        <h2 className="statement">
          The projects that helped me <em>grow</em> as a developer
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
