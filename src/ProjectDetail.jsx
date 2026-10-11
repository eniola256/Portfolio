import { Link, useParams } from "react-router-dom";
import { projects } from "./projectsData.js";
import "./Project.css";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const project = projects[i];

  if (!project) {
    return (
      <main className="pd">
        <Link className="pd-back" to="/#Projects">← All projects</Link>
        <h1>Project not found</h1>
      </main>
    );
  }

  const next = projects[(i + 1) % projects.length];

  return (
    <main className="pd" key={slug}>
      <Link className="pd-back" to="/#Projects">← All projects</Link>

      <header className="pd-head">
        <p className="pd-eyebrow">
          {project.type}
          {project.status && <em className="project-status">{project.status}</em>}
        </p>
        <h1>{project.name}</h1>
        <p className="pd-summary">{project.summary}</p>

        <div className="pd-actions">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Live Demo
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              GitHub
            </a>
          )}
        </div>
      </header>

      <section className="pd-block">
        <h2>Purpose</h2>
        <p>{project.purpose}</p>
      </section>

      <section className="pd-block">
        <h2>What's implemented</h2>
        <ul className="pd-list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      {project.progress && (
        <section className="pd-block">
          <h2>Still in progress</h2>
          <p>{project.progress}</p>
        </section>
      )}

      {project.learned && project.learned.length > 0 && (
        <section className="pd-block">
          <h2>What I learned</h2>
          <ul className="pd-list">
            {project.learned.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="pd-block">
        <h2>Stack</h2>
        <ul className="project-stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <Link className="pd-next" to={`/projects/${next.slug}`}>
        <span>Next project</span>
        <strong>{next.name} <i>›</i></strong>
      </Link>
    </main>
  );
}

export default ProjectDetail;