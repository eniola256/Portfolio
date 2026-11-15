import "./Services.css";
import Reveal from "./Reveal.jsx";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const services = [
  {
    n: "01",
    tag: "Service / 001",
    title: "Business websites",
    text: "Fast, mobile-first sites that explain what you do and make it easy for customers to reach you.",
  },
  {
    n: "02",
    tag: "Service / 002",
    title: "Online stores",
    text: "Product pages, cart and checkout, with online payments, built so shopping feels simple on any phone.",
  },
  {
    n: "03",
    tag: "Service / 003",
    title: "Web apps",
    text: "React frontends backed by Node.js, Express and PostgreSQL for ordering, accounts and dashboards.",
  },
];

function Services() {
  const [sectionRef, shown] = useFadeInOnScroll();

  return (
    <section
      ref={sectionRef}
      id="Services"
      className={`sx sx-flat sv${shown ? " show" : ""}`}
    >
      <span className="sx-grid" aria-hidden="true" />

      <div className="sx-body">
        <Reveal as="p" index={0} className="sx-eyebrow">
          <i aria-hidden="true" /> What I build / 03
        </Reveal>
        <Reveal as="h2" index={1} className="sx-heading sv-heading">
          Sites for businesses that want to <em>look sharp</em> and sell.
        </Reveal>

        <ul className="sv-list">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} index={i + 2} className="sv-item">
              <span className="sv-num">{s.n}</span>
              <p className="sv-tag">{s.tag}</p>
              <h3>{s.title}</h3>
              <p className="sv-text">{s.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal index={5} className="sv-cta">
          <a href="#Contact" className="hero-btn">
            Start a project <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
