import { Link } from "react-router-dom";
import "./Project.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";
import { projects } from "./projectsData.js";

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <article
      ref={ref}
      className={`project fade-in ${isVisible ? `show delay-${index + 1}` : ""}`}
    >
      <div className="project-media">
        <img src={project.img} alt={project.alt} loading="lazy" />
        {project.status && <span className="project-status">{project.status}</span>}
      </div>

      <div className="project-body">
        <h3>{project.type}</h3>
        <p className="project-summary">
          <span className="sum-full">{project.summary}</span>
          <span className="sum-short">{project.shortSummary}</span>
        </p>

        <ul className="project-stack">
          {project.cardStack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="project-btn">
          <Link
            to={`/projects/${project.slug}`}
            className="btn-primary"
            aria-label={`Learn more about ${project.name}`}
          >
            Learn more
          </Link>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label={`Open the ${project.name} live demo`}
          >
            Live Demo
          </a>
        </div>
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
        <h2>My Projects</h2>
        <p>The projects that helped me grow as a developer</p>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;