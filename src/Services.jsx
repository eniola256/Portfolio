import "./Services.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const services = [
  {
    n: "01",
    title: "Business websites",
    text: "Fast, mobile-first sites that explain what you do and make it easy for customers to reach you.",
  },
  {
    n: "02",
    title: "Online stores",
    text: "Product pages, cart and checkout, with online payments, built so shopping feels simple on any phone.",
  },
  {
    n: "03",
    title: "Web apps",
    text: "React frontends backed by Node.js, Express and PostgreSQL for ordering, accounts and dashboards.",
  },
];

function Services() {
  const [headRef, headVisible] = useFadeInOnScroll();
  const [listRef, listVisible] = useFadeInOnScroll();

  return (
    <section id="Services" className="section services-section">
      <div ref={headRef} className={`fade-in ${headVisible ? "show" : ""}`}>
        <p className="head">What I build</p>
        <h2 className="statement">
          Sites for businesses that want to <em>look sharp</em> and sell.
        </h2>
      </div>

      <ul ref={listRef} className={`services-list fade-in ${listVisible ? "show" : ""}`}>
        {services.map((s) => (
          <li key={s.n} className="service">
            <span className="service-num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ul>

      <a href="#Contact" className="services-cta">
        Start a project <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

export default Services;
