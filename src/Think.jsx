import { useEffect, useRef, useState } from "react";
import "./Think.css";
import Reveal from "./Reveal.jsx";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

const items = [
  {
    title: "Goal-Oriented",
    text: "I always start with a clear goal in mind. Understanding what you want to achieve helps me design solutions that are focused, efficient, and truly useful.",
  },
  {
    title: "Problem-First Approach",
    text: "Before writing any code, I deeply analyze the problem. This ensures that the solution solves the real issue—not just the surface-level symptoms.",
  },
  {
    title: "Performance Minded",
    text: "I care about speed, scalability, and smooth user experience. I aim to build applications that remain fast and reliable as they grow.",
  },
  {
    title: "User-Centered Design",
    text: "Every decision I make considers the end user. I focus on clarity, simplicity, and usability so people enjoy using what I build.",
  },
  {
    title: "Iterative Improvement",
    text: "I believe in building, testing, learning, and improving. This allows me to refine ideas into polished, effective solutions over time.",
  },
  {
    title: "Collaboration-Driven",
    text: "I value communication and feedback. Working closely with people helps me understand their vision and turn it into reality.",
  },
];

const SWAP_MS = 350; // keep equal to the transition time in Think.css
const pad = (n) => String(n).padStart(2, "0");

function Think() {
  const [sectionRef, shown] = useFadeInOnScroll();

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
    <section
      ref={sectionRef}
      id="Think"
      className={`sx sx-br th${shown ? " show" : ""}`}
    >
      <span className="sx-grid" aria-hidden="true" />
      <span className="sx-ring" aria-hidden="true" />
      <span className="sx-circle" aria-hidden="true" />

      <div className="sx-body th-body">
        <div className="th-left">
          <Reveal as="p" index={0} className="sx-eyebrow">
            <i aria-hidden="true" /> My thought process / 04
          </Reveal>
          <Reveal as="h2" index={1} className="sx-heading">
            I'm always open to discussing new projects, creative ideas
          </Reveal>
        </div>

        <Reveal
          index={2}
          className="th-right"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="th-stage" aria-live="polite">
            <div className={`th-item${visible ? " visible" : ""}`}>
              <span className="th-num">{pad(index + 1)}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>

          <div className="th-pager">
            <button type="button" className="th-arrow" aria-label="Previous" onClick={prev}>
              ←
            </button>

            <div className="th-count">
              <p>
                {pad(index + 1)} / {pad(items.length)}
              </p>
              <div className="th-segs">
                {items.map((it, i) => (
                  <button
                    key={it.title}
                    type="button"
                    className={`th-seg${i === index ? " active" : ""}`}
                    aria-label={`Show ${it.title}`}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>

            <button type="button" className="th-arrow" aria-label="Next" onClick={next}>
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Think;
