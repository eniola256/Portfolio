import { useEffect, useRef, useState } from "react";
import "./Think.css";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const items = [
  {
    icon: "track_changes",
    title: "Goal-Oriented",
    text: "I always start with a clear goal in mind. Understanding what you want to achieve helps me design solutions that are focused, efficient, and truly useful.",
  },
  {
    icon: "psychology",
    title: "Problem-First Approach",
    text: "Before writing any code, I deeply analyze the problem. This ensures that the solution solves the real issue—not just the surface-level symptoms.",
  },
  {
    icon: "bolt",
    title: "Performance Minded",
    text: "I care about speed, scalability, and smooth user experience. I aim to build applications that remain fast and reliable as they grow.",
  },
  {
    icon: "palette",
    title: "User-Centered Design",
    text: "Every decision I make considers the end user. I focus on clarity, simplicity, and usability so people enjoy using what I build.",
  },
  {
    icon: "build",
    title: "Iterative Improvement",
    text: "I believe in building, testing, learning, and improving. This allows me to refine ideas into polished, effective solutions over time.",
  },
  {
    icon: "groups",
    title: "Collaboration-Driven",
    text: "I value communication and feedback. Working closely with people helps me understand their vision and turn it into reality.",
  },
];

const SWAP_MS = 350; // keep equal to the transition time in Think.css

function Think() {
  const [headRef, headVisible] = useFadeInOnScroll();
  const [stageRef, stageVisible] = useFadeInOnScroll();

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const busy = useRef(false);
  const timer = useRef(null);
  const touchX = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const goTo = (target) => {
    if (busy.current || target === index) return;
    busy.current = true;

    setVisible(false); // exit: fade out and slide down

    timer.current = setTimeout(() => {
      setIndex(target); // swap the content while it is hidden
      setVisible(true); // enter: fade in and slide up
      timer.current = setTimeout(() => {
        busy.current = false;
      }, SWAP_MS);
    }, SWAP_MS);
  };

  const prev = () => goTo((index - 1 + items.length) % items.length);
  const next = () => goTo((index + 1) % items.length);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) next();
    else prev();
  };

  const item = items[index];

  return (
    <section id="Think" className="section">
      <div className="think-section">
        <div
          ref={headRef}
          className={`think-head fade-in ${headVisible ? "show" : ""}`}
        >
          <h2>My Thought Process</h2>
          <p>I'm always open to discussing new projects, creative ideas</p>
        </div>

        <div
          ref={stageRef}
          className={`think-carousel fade-in ${stageVisible ? "show" : ""}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="think-stage" aria-live="polite">
            <div className={`think-item ${visible ? "visible" : ""}`}>
              <span className="material-symbols-outlined think-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>

          <div className="think-dots">
            {items.map((it, i) => (
              <button
                key={it.title}
                type="button"
                className={`think-dot ${i === index ? "active" : ""}`}
                aria-label={`Show ${it.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div className="think-controls">
            <button type="button" className="think-arrow" aria-label="Previous" onClick={prev}>
              <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            </button>
            <button type="button" className="think-arrow" aria-label="Next" onClick={next}>
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Think;