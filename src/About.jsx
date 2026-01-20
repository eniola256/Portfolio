import "./About.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

function About() {
    const [ref, isVisible] = useFadeInOnScroll();

    return (
        <section id="About" className="section">
            <div
                ref={ref}   // use the 'ref' from the hook
                className={`abt-section fade-in ${isVisible ? "show" : ""}`}
            >
                <div className="abt-head">
                    <h2>About Me</h2>
                    <p>More than Just a Frontend Developer</p>
                </div>

                <div className={`abt-p fade-up ${isVisible ? "show" : ""} delay-1`}>
                    <p>
                        I am a frontend developer focused on building clean, responsive,
                        and user-friendly web interfaces using modern technologies like
                        React and CSS. I enjoy turning ideas and designs into structured,
                        functional layouts while paying close attention to spacing,
                        responsiveness, and usability.
                    </p>
                    <p>
                        I am currently strengthening my skills by building real-world
                        projects that involve navigation systems, dashboards,
                        authentication flows, and interactive UI components. My approach
                        to development is centered on understanding how things work under
                        the hood rather than just copying solutions, which helps me write
                        more maintainable and scalable code.
                    </p>
                    <p>
                        My long-term goal is to grow into a well-rounded full-stack
                        developer with a strong foundation in both frontend and backend
                        systems. I am always learning, refining my workflow, and
                        challenging myself with more complex problems to improve my craft.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
