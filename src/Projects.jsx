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
        {/* Project 1 */}
        <div
          ref={ref1}
          className={`project fade-in ${isVisible1 ? "show delay-1" : ""}`}
        >
          <img src="./Spa.PNG" alt="Spa App" />
          <div className="project-txt">
            <h3>Spa App</h3>
            <p>
              <span>What it does:</span> <br />
              A booking and management app for spa services where users can schedule
              appointments, view available services, and manage their bookings.
            </p>
            <p>
              <span>What I learned building it:</span> <br />
              Component structuring, form handling, state management, and UI layout
              design.
            </p>
          </div>
          <div className="project-btn">
            <a href="https://spa-day-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
            <a href="https://github.com/eniola256/Spa-day-Website" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          ref={ref2}
          className={`project fade-in ${isVisible2 ? "show delay-2" : ""}`}
        >
          <img src="./barbing.PNG" alt="Barbing App" />
          <div className="project-txt">
            <h3>Barbing App</h3>
            <p>
              <span>What it does:</span> <br />
              A barbershop booking platform that allows users to view available barbers,
              select services, and book appointments.
            </p>
            <p>
              <span>What I learned building it:</span> <br />
              Routing, conditional rendering, component reusability, and UI flow
              planning.
            </p>
          </div>
          <div className="project-btn">
            <a href="https://a-ecuts.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
            <a href="https://github.com/eniola256/AEcuts" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          </div>
        </div>

        {/* Project 3 */}
        <div
          ref={ref3}
          className={`project fade-in ${isVisible3 ? "show delay-3" : ""}`}
        >
          <img src="./" alt="Blog App Building still in Progress" className="blog"/>
          <div className="project-txt">
            <h3>Blog</h3>
            <p>
              <span>What it does:</span> <br />
              A blogging platform where users can read posts, publish articles, and
              navigate through different categories. (My personal blog site)
            </p>
            <p>
              <span>What I learned building it:</span> <br />
              Dynamic routing, reusable components, content rendering, and layout structuring.
            </p>
          </div>
          <div className="project-btn">
            <a href="#Projects" className="btn-primary">Live Demo</a>
            <a href="#Projects" className="btn-secondary">GitHub</a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;
