import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ids must match each section's id attribute exactly
const links = [
  { id: "home", label: "Home" },
  { id: "About", label: "About" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Let's Connect" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [spy, setSpy] = useState("home");
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const { pathname } = useLocation();

  // no link is active on the project pages
  const active = pathname === "/" ? spy : null;

  /* ---- scroll spy: only the sections that have a nav link are watched ---- */
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSpy(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" } // thin band across the middle
    );
    sections.forEach((s) => observer.observe(s));

    // a short last section never reaches the middle, so handle the page bottom
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) setSpy(links[links.length - 1].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  /* ---- transparent on the hero, solid once you scroll ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- close the mobile menu with Escape ---- */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // dot grid: opens the quick-jump palette on desktop, the link menu on phones
  const onDots = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen((o) => !o);
    } else {
      window.dispatchEvent(new Event("open-command-palette"));
    }
  };

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}${isOpen ? " menu-open" : ""}`}
      aria-label="Main"
    >
      <Link to="/#home" className="logo" onClick={() => setIsOpen(false)}>
        <svg className="logo-mark" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
        AE Tech
      </Link>

      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.id}
            to={`/#${l.id}`}
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
        className="nav-dots"
        onClick={onDots}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          {[4, 12, 20].flatMap((y) =>
            [4, 12, 20].map((x) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.9" fill="currentColor" />
            ))
          )}
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
