import "./Navbar.css";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ids must match each section's id attribute exactly
const links = [
  { id: "home", label: "Home" },
  { id: "About", label: "About" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Lets Connect" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const navItemsRef = useRef(null);
  const linkRefs = useRef({});
  const { pathname } = useLocation();

  /* ---- scroll spy ----
     Only the sections that have a nav link are watched, so while you're in
     Tech / Think / Journey the circle simply stays on the last link. */
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" } // thin band across the middle
    );
    sections.forEach((s) => observer.observe(s));

    // a short last section never reaches the middle, so handle the page bottom
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) setActive(links[links.length - 1].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  /* ---- move the circle to the active link ---- */
  const measure = useCallback(() => {
    const el = linkRefs.current[active];
    if (!el) return;
    const next = {
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
    };
    // skip the update if nothing changed (prevents render loops)
    setPill((prev) =>
      prev.left === next.left &&
      prev.top === next.top &&
      prev.width === next.width &&
      prev.height === next.height
        ? prev
        : next
    );
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure, isOpen]);

  // re-measure when the nav changes size (resize, font load, breakpoint)
  useEffect(() => {
    const el = navItemsRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  /* ---- close the mobile menu with Escape ---- */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link to="/#home" className="logo" onClick={() => setIsOpen(false)}>
        <span className="material-symbols-outlined">code_off</span>
        AE Tech
      </Link>

      <div ref={navItemsRef} className={`nav-items ${isOpen ? "open" : ""}`}>
        <span
          className="nav-pill"
          aria-hidden="true"
          style={{
            width: pill.width,
            height: pill.height,
            transform: `translate(${pill.left}px, ${pill.top}px)`,
            opacity: active ? 1 : 0,
          }}
        />
        {links.map((l) => (
          <Link
            key={l.id}
            to={`/#${l.id}`}
            ref={(el) => (linkRefs.current[l.id] = el)}
            className={active === l.id ? "active" : ""}
            aria-current={active === l.id ? "true" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;