import "./Home.css";

function Home() {
  return (
    <section id="home" className="section home-section">
      {/* faint grid lines behind everything */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-copy">
        <p className="hero-label fade-up">
          Frontend
          <br />
          Developer
        </p>

        <h1 className="hero-name fade-up delay-1">
          <span className="sr-only">Frontend Developer: </span>
          <span className="hero-first">Abayomi</span>
          <span className="hero-last">
            Eniola<sup aria-hidden="true">®</sup>
          </span>
        </h1>

        <p className="hero-tagline fade-up delay-2">
          I design and develop websites and web applications with purpose.
        </p>

        <div className="hero-actions fade-up delay-3">
          <a href="#Projects" className="hero-btn">
            View my work <span aria-hidden="true">→</span>
          </a>
          <a href="#Contact" className="hero-link">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero-visual fade-up delay-2" aria-hidden="false">
        <span className="hero-band" aria-hidden="true" />
        <span className="hero-circle" aria-hidden="true" />
        <img
          className="hero-photo"
          src="/portrait.webp"
          width="491"
          height="509"
          alt="Portrait of Abayomi Eniola, frontend developer"
          fetchpriority="high"
        />
      </div>

      <span className="hero-cross" aria-hidden="true" />
      <span className="hero-square" aria-hidden="true" />

      <p className="hero-meta">
        <span><i aria-hidden="true" /> Lagos, NG</span>
        <span><i aria-hidden="true" /> Est. 2026</span>
      </p>

      <a href="#About" className="hero-scroll" aria-label="Scroll to the About section">
        <span className="hero-scroll-text" aria-hidden="true">Scroll</span>
        <span className="hero-scroll-pill" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
export default Home;
