import "./Project.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

function Projects() {
  const [ref1, isVisible1] = useFadeInOnScroll();
  const [ref2, isVisible2] = useFadeInOnScroll();
  const [ref3, isVisible3] = useFadeInOnScroll();
  const [headRef, headVisible] = useFadeInOnScroll();

  return (
    <section id="Projects" className="section project-section">
      <div 
      ref={headRef}
        className={`project-head fade-in ${headVisible ? "show delay-head" : ""}`}>
        <h2>My Projects</h2>
        <p>The projects that helped me grow as a developer</p>
      </div>

      <div className="projects-list">
        <div
          ref={ref1}
          className={`project fade-in ${isVisible1 ? "show delay-1" : ""}`}
        >
          <img src="./project.jpg" alt="Todo App" />
          <div className="project-txt">
            <h3>Todo App</h3>
            <p>
              <span>What it does:</span> <br />
              A task manager that lets users create, edit, delete, and complete daily tasks.
            </p>
            <p>
              <span>What I learned building it:</span> <br />
              State management, form handling, CRUD operations, and component structure.
            </p>
          </div>
        </div>

        <div
          ref={ref2}
          className={`project fade-in ${isVisible2 ? "show delay-2" : ""}`}
        >
          <img src="./project.jpg" alt="Blog Platform" />
          <div className="project-txt">
            <h3>Blog Platform</h3>
            <p>
              <span>What it does:</span> <br />
              A platform for reading and publishing blog posts with smooth navigation.
            </p>
            <p>
              <span>What I learned building it:</span> <br />
              Routing, dynamic content rendering, and layout structuring.
            </p>
          </div>
        </div>

        <div
          ref={ref3}
          className={`project fade-in ${isVisible3 ? "show delay-3" : ""}`}
        >
          <img src="./project.jpg" alt="E-commerce Store" />
          <div className="project-txt">
            <h3>E-commerce</h3>
            <p>
              <span>What it does:</span> <br />
              An online store where users can browse products and add them to a cart.
            </p>
            <p>
              <span>What I learned building it:</span> <br />
              UI structuring, shared state, and user flow design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
