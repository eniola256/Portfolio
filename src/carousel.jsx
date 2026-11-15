import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import "./carousel.css";

const techs = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
];

// one set of logos; the track holds four so the loop never shows a gap
function Group({ decorative }) {
  return (
    <ul className="tc-group" aria-hidden={decorative ? "true" : undefined}>
      {techs.map((t) => (
        <li key={t.name} className="tc-item">
          <span className="tc-icon">{t.icon}</span>
          <span className="tc-name">{t.name}</span>
          <i className="tc-sep" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

function TechCarousel() {
  return (
    <section id="Carousel" className="tc" aria-label="Technologies I work with">
      <div className="tc-track">
        <Group />
        <Group decorative />
        <Group decorative />
        <Group decorative />
      </div>
    </section>
  );
}

export default TechCarousel;
