import { useEffect } from "react";

/**
 * Fades + nudges each section as it scrolls out of the top of the viewport.
 * Progress is based on scroll distance, so short sections (e.g. Home on a
 * phone) are always fully visible at scroll position 0.
 *
 * ids:    section ids to affect
 * start:  fraction of the viewport height over which the fade happens
 * shift:  extra upward drift in px
 * shrink: scale reduction at the end of the fade
 */
export default function useLeaveFade(
  ids,
  { start = 0.9, shift = 40, shrink = 0.08 } = {}
) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    let zones = []; // [{ el, fadeStart, docBottom }]
    let ticking = false;

    const reset = (el) => {
      el.style.opacity = "";
      el.style.transform = "";
      el.style.transformOrigin = "";
    };

    /* Measure where each section really sits, ignoring any fade transform. */
    const measure = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      els.forEach(reset); // clean layout positions

      zones = els.map((el) => {
        const docBottom = el.getBoundingClientRect().bottom + scrollY;
        // fade begins `start` viewports before the section ends,
        // but never before the page has actually been scrolled
        const fadeStart = Math.max(0, docBottom - vh * start);
        return { el, fadeStart, docBottom };
      });

      update();
    };

    const update = () => {
      const scrollY = window.scrollY;

      zones.forEach(({ el, fadeStart, docBottom }) => {
        const span = Math.max(1, docBottom - fadeStart);
        const p = Math.min(1, Math.max(0, (scrollY - fadeStart) / span));
        const t = 1 - p; // 1 = fully visible, 0 = fully faded

        if (t >= 1) {
          reset(el);
          return;
        }

        const e = t * t * (3 - 2 * t); // smoothstep easing
        el.style.opacity = e;
        el.style.transformOrigin = "50% 100%";
        el.style.transform = `translate3d(0, ${(1 - e) * -shift}px, 0) scale(${
          1 - (1 - e) * shrink
        })`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    // re-measure when the page height changes (images, fonts, carousels)
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      ro.disconnect();
      els.forEach(reset);
    };
  }, [ids, start, shift, shrink]);
}