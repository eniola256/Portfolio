import "./Home.css";

function Home() {
  return (
    <>
    <section id="home" className="section home-section">
  <h1 className="fade-up">My Name is <br /><span>Abayomi Eniola</span></h1>
  <p className="top-par fade-up delay-1">I build interfaces that people actually want to use—not just look at.</p>
  <p className="bottom-par fade-up delay-2">Frontend developer focused on crafting clean, accessible experiences with React, JavaScript, HTML, and CSS. I care about the details that make interactions feel natural and code that's maintainable.</p>
  
  <div className="home-btn fade-up delay-3">
    <a href="#Projects">
      <button className="left-btn">
      View My works 
      <span className="material-symbols-outlined">arrow_right_alt</span>
    </button>
    </a>
    <a href="#Contact">
      <button className="right-btn">Contact Me</button>
    </a>
  </div>
</section>

    </>
);
}
export default Home;
