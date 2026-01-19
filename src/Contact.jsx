import "./Contact.css";

function Contact() {
    return(
     <section id="Contact" className="section ">
      <div className="contact-section">
      <div className="contact-head">
        <h2>Contact Me</h2>
        <p>I'm always open to discussing new projects, opportunities, or just chatting about frontend development. Feel free to reach out.</p>
      </div>
      <div className="contact-btns">
  <a href="mailto:your@email.com" className="contact-btn">
    <span className="material-symbols-outlined">mail</span>
    Email
  </a>

  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-btn">
    <span className="material-symbols-outlined">code</span>
    GitHub
  </a>

  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="contact-btn">
    <span className="material-symbols-outlined">work</span>
    LinkedIn
  </a>

  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="contact-btn">
    <span className="material-symbols-outlined">chat</span>
    WhatsApp
  </a>
</div>
</div>
    </section>
    );
}

export default Contact; 