import "./Contact.css";
import Reveal from "./Reveal.jsx";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const links = [
  { label: "WhatsApp", href: "https://wa.me/2349162323354" },
  { label: "GitHub", href: "https://github.com/eniola256" },
  { label: "LinkedIn", href: "https://linkedin.com/in/eniola-abayomi-013a74343?" },
];

function Contact() {
  const [sectionRef, shown] = useFadeInOnScroll();

  return (
    <section
      ref={sectionRef}
      id="Contact"
      className={`sx sx-bl ct${shown ? " show" : ""}`}
    >
      <span className="sx-grid" aria-hidden="true" />
      <span className="sx-ring" aria-hidden="true" />
      <span className="sx-circle" aria-hidden="true" />

      <div className="sx-body">
        <Reveal as="p" index={0} className="sx-eyebrow">
          <i aria-hidden="true" /> Contact / 06
        </Reveal>

        <Reveal as="h2" index={1} className="ct-heading">
          Let's build something <em>sharp</em>.
        </Reveal>

        <Reveal as="p" index={2} className="ct-sub">
          I'm open to new projects and opportunities. Tell me what you need and I'll get back to you.
        </Reveal>

        <Reveal index={3} className="ct-mail">
          <a href="mailto:aetech357@gmail.com" className="ct-email">
            aetech357@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <Reveal as="ul" index={4} className="ct-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" className="ct-btn">
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </Reveal>

        <p className="ct-foot">
          <span>© 2026 AE Tech</span>
          <span>Lagos, NG</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
