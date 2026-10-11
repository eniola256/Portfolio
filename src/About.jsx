import "./About.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

// swap these for your real images


const items = [
    {
        n: "01",
        title: "What I do",
        img: "/abt1.png",                       // add an imported image here later
        placeholder: "Project screenshot",
        tone: "blue",
        alt: "A project I built",
        text: "I build clean, responsive, user-friendly web interfaces with modern technologies like React and CSS. I turn ideas and designs into structured, functional layouts, with close attention to spacing, responsiveness, and usability.",
        link: "#Projects",
        cta: "See my projects",
    },
    {
        n: "02",
        title: "How I work",
        img: "/abt2.png",
        placeholder: "Code editor screenshot",
        tone: "dark",
        alt: "My code editor",
        text: "I focus on understanding how things work under the hood rather than just copying solutions, which helps me write more maintainable and scalable code. I'm always learning and refining my workflow.",
        link: "#Thought",
        cta: "See my thought process",
    },
    {
        n: "03",
        title: "Where I'm going",
        img: "/abt3.png",
        placeholder: "Backend / API screenshot",
        tone: "graphite",
        alt: "Backend work",
        text: "My long-term goal is to grow into a well-rounded full-stack developer with a strong foundation in both frontend and backend systems, taking on more complex problems to improve my craft.",
        link: "#Journey",
        cta: "See my journey",
    },
];

const building = [
    "Navigation systems",
    "Dashboards",
    "Authentication flows",
    "Interactive UI components",
];

function AboutCard({ item, pos }) {
    const [ref, isVisible] = useFadeInOnScroll();
    return (
        <a
            ref={ref}
            href={item.link}
            className={`abt-card ${pos} ${isVisible ? "show" : ""}`}
        >
            <div className="abt-thumb">
                {item.img ? (
                    <img src={item.img} alt={item.alt} loading="lazy" />
                ) : (
                    <div className={`abt-placeholder ${item.tone}`} role="img" aria-label={item.alt}>
                        <span>{item.placeholder}</span>
                    </div>
                )}
            </div>

            <div className="abt-text">
                <span className="abt-num">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="abt-link">
                    {item.cta} <i>›</i>
                </span>
            </div>
        </a>
    );
}

function About() {
    const [ref, isVisible] = useFadeInOnScroll();
    const [flowRef, flowVisible] = useFadeInOnScroll();

    return (
        <section id="About" className="section">
            <div ref={ref} className={`abt-section fade-in ${isVisible ? "show" : ""}`}>
                <p className="abt-eyebrow">About Me</p>
                <h2 className="abt-statement">More than just a frontend developer.</h2>

                <div ref={flowRef} className="abt-flow">
                    <svg
                        className={`abt-curve ${flowVisible ? "show" : ""}`}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M 29 14 C 29 36, 50 24, 50 50 C 50 76, 71 64, 71 86"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    <AboutCard item={items[0]} pos="c1" />
                    <AboutCard item={items[1]} pos="c2" />
                    <AboutCard item={items[2]} pos="c3" />
                </div>
            </div>
        </section>
    );
}

export default About;