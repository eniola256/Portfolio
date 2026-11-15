import "./Journey.css";
import Reveal from "./Reveal.jsx";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const steps = [
  {
    year: "2023",
    title: "The Beginning",
    text: "This was the year I discovered web development and began exploring the basics of HTML, CSS, and JavaScript. I focused on understanding how the web works, building small projects, and developing problem-solving habits that laid the foundation for everything I do today.",
  },
  {
    year: "2024",
    title: "Growth & Experimentation",
    text: "I started building real-world projects, refining my UI skills, and writing cleaner JavaScript. This phase helped me understand user experience, responsive design, and how to turn ideas into functional web applications.",
  },
  {
    year: "2025",
    title: "Going Full-Stack",
    text: "I shifted my focus toward full-stack development, learning how backend systems work, handling databases, APIs, and authentication. I also began shaping my personal brand as a developer and thinking long-term about impact and scalability.",
  },
  {
    year: "Present",
    title: "Building with Purpose",
    text: "Today, I focus on building scalable, meaningful projects while continuously improving my skills. I prioritize clean architecture, performance, and real-world problem solving, aiming to create solutions that truly matter.",
  },
];

function Journey() {
  const [sectionRef, shown] = useFadeInOnScroll();

  return (
    <section
      ref={sectionRef}
      id="Journey"
      className={`sx jr${shown ? " show" : ""}`}
    >
      <span className="sx-grid" aria-hidden="true" />
      <span className="sx-ring" aria-hidden="true" />
      <span className="sx-circle" aria-hidden="true" />

      <div className="sx-body">
        <Reveal as="p" index={0} className="sx-eyebrow">
          <i aria-hidden="true" /> My journey / 05
        </Reveal>
        <Reveal as="h2" index={1} className="sx-heading jr-heading">
          From a curious learner to a <em>passionate developer</em>.
        </Reveal>

        <ol className="jr-line">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.year} index={i + 2} className="jr-item">
              <span className="jr-year">{s.year}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
