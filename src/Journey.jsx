import "./Journey.css";

function Journey() {
  return (
    <section id="Journey" className="section">
      <div className="journey-section">
  <div className="journey-head">
    <h2>My Journey</h2>
    <p>From a curious learner to a passionate developer</p>
  </div>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot">
        <div className="td"></div>
      </div>
      <div className="timeline-content">
        <h3>2023</h3>
        <div className="timeline-box">
          <h4>The Beginning</h4>
          <p>
            This was the year I discovered web development and began exploring the basics of HTML, CSS, and JavaScript. I focused on understanding how the web works, building small projects, and developing problem-solving habits that laid the foundation for everything I do today.
          </p>
        </div>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot">
        <div className="td"></div>
      </div>
      <div className="timeline-content">
        <h3>2024</h3>
        <div className="timeline-box">
          <h4>Growth & Experimentation</h4>
          <p>
            I started building real-world projects, refining my UI skills, and writing cleaner JavaScript. This phase helped me understand user experience, responsive design, and how to turn ideas into functional web applications.
          </p>
        </div>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot">
        <div className="td"></div>
      </div>
      <div className="timeline-content">
        <h3>2025</h3>
        <div className="timeline-box">
          <h4>Going Full-Stack</h4>
          <p>
            I shifted my focus toward full-stack development, learning how backend systems work, handling databases, APIs, and authentication. I also began shaping my personal brand as a developer and thinking long-term about impact and scalability.
          </p>
        </div>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot">
        <div className="td"></div>
      </div>
      <div className="timeline-content">
        <h3>Present</h3>
        <div className="timeline-box">
          <h4>Building with Purpose</h4>
          <p>
            Today, I focus on building scalable, meaningful projects while continuously improving my skills. I prioritize clean architecture, performance, and real-world problem solving, aiming to create solutions that truly matter.
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>


  );
}

export default Journey;
