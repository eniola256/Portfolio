import "./Home.css";

function Home() {
  return (
    <>
      <section id="home" className="section home-section">
        <p className="home-status fade-up">
          <span className="home-dot" aria-hidden="true" />
          Available for projects · Lagos, NG
        </p>

        <h1 className="fade-up delay-1">
          Frontend Developer
          <span>
            Abayomi <em>Eniola</em>
          </span>
        </h1>

        <p className="top-par fade-up delay-2">
          I build fast, good-looking websites and online stores that people actually want to use.
        </p>

        <div className="home-btn fade-up delay-3">
          <a href="#Projects">
            <button className="left-btn">
              View my work
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </a>
          <a href="#Contact">
            <button className="right-btn">Contact me</button>
          </a>
        </div>

        <p className="home-hint fade-up delay-3">
          Press <kbd>Ctrl</kbd> <kbd>K</kbd> to jump anywhere
        </p>
      </section>
    </>
  );
}
export default Home;
