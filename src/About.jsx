import "./About.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const items = [
  {
    n: "01",
    title: "What I do",
    img: "/abt1.png",
    alt: "A project I built",
    text: "I build clean, responsive, user-friendly web interfaces with modern technologies like React and CSS. I turn ideas and designs into structured, functional layouts, with close attention to spacing, responsiveness, and usability.",
    link: "#Projects",
    cta: "See my projects",
  },
  {
    n: "02",
    title: "How I work",
    img: "/abt2.png",
    alt: "My code editor",
    text: "I focus on understanding how things work under the hood rather than just copying solutions, which helps me write more maintainable and scalable code. I'm always learning and refining my workflow.",
    link: "#Think",
    cta: "See my thought process",
  },
  {
    n: "03",
    title: "Where I'm going",
    img: "/abt3.png",
    alt: "Backend work",
    text: "My long-term goal is to grow into a well-rounded full-stack developer with a strong foundation in both frontend and backend systems, taking on more complex problems to improve my craft.",
    link: "#Journey",
    cta: "See my journey",
  },
];

function AboutRow({ item }) {
  const [ref, isVisible] = useFadeInOnScroll();
  return (
    <article ref={ref} className={`abt-row fade-in ${isVisible ? "show" : ""}`}>
      <span className="abt-num">{item.n}</span>
      <div className="abt-text">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a href={item.link} className="abt-link">
          {item.cta} <i>→</i>
        </a>
      </div>
      <img className="abt-img" src={item.img} alt={item.alt} loading="lazy" />
    </article>
  );
}

function About() {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section id="About" className="section">
      <div className="abt-section">
        <div ref={ref} className={`abt-head fade-in ${isVisible ? "show" : ""}`}>
          <p className="head">About me</p>
          <h2 className="statement">
            More than just a <em>frontend</em> developer.
          </h2>
        </div>

        <div className="abt-list">
          {items.map((item) => (
            <AboutRow key={item.n} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
