import { useFadeInOnScroll } from "./UseFadeInOnScroll";
import "./Contact.css";

const links = [
  { label: "WhatsApp", icon: "chat", href: "https://wa.me/2349162323354" },
  { label: "GitHub", icon: "code", href: "https://github.com/eniola256" },
  { label: "LinkedIn", icon: "work", href: "https://linkedin.com/in/eniola-abayomi-013a74343?" },
];

function Contact() {
  const [headRef, headVisible] = useFadeInOnScroll();
  const [linksRef, linksVisible] = useFadeInOnScroll();

  return (
    <section id="Contact" className="section">
      <div className="contact-section">
        <div
          ref={headRef}
          className={`contact-head fade-in ${headVisible ? "show" : ""}`}
        >
          <p className="head">Contact</p>
          <h2>
            Let's build something <em>sharp</em>.
          </h2>
          <p className="contact-sub">
            I'm open to new projects and opportunities. Tell me what you need and I'll get back to you.
          </p>
          <a href="mailto:aetech357@gmail.com" className="contact-email">
            aetech357@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ul
          ref={linksRef}
          className={`contact-links fade-in ${linksVisible ? "show" : ""}`}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" className="contact-btn">
                <span className="material-symbols-outlined" aria-hidden="true">{l.icon}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="contact-foot">© 2026 AE Tech</p>
      </div>
    </section>
  );
}

export default Contact;
