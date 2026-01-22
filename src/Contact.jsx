import { useFadeInOnScroll } from "./UseFadeInOnScroll";
import "./Contact.css";

function Contact() {
  const [headRef, headVisible] = useFadeInOnScroll();
  const [btnRef, btnVisible] = useFadeInOnScroll();

  return (
    <section id="Contact" className="section">
      <div className="contact-section">

        <div
          ref={headRef}
          className={`contact-head fade-in ${headVisible ? "show" : ""}`}
        >
          <h2>Contact Me</h2>
          <p>
            I'm always open to discussing new projects, opportunities, or just chatting about frontend development. Feel free to reach out.
          </p>
        </div>

        <div
          ref={btnRef}
          className={`contact-btns fade-in ${btnVisible ? "show" : ""}`}
        >
          <a href="mailto:aetech357@gmail.com" className="contact-btn">
            <span className="material-symbols-outlined">mail</span>
            Email
          </a>

          <a href="https://github.com/eniola256" target="_blank" rel="noreferrer" className="contact-btn">
            <span className="material-symbols-outlined">code</span>
            GitHub
          </a>

          <a href="https://linkedin.com/in/eniola-abayomi-013a74343?" target="_blank" rel="noreferrer" className="contact-btn">
            <span className="material-symbols-outlined">work</span>
            LinkedIn
          </a>

          <a href="https://wa.me/2349162323354" target="_blank" rel="noreferrer" className="contact-btn">
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
