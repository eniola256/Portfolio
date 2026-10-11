import { useEffect } from "react";

/**
 * Fades + nudges each section as it scrolls out of the top of the viewport.
 * ids: section ids to affect
 * start: fraction of the viewport height over which the fade happens
 */
export default function useLeaveFade(
  ids,
  { start = 0.9, shift = 40, shrink = 0.08 } = {}
) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    let ticking = false;

    const reset = (el) => {
      el.style.opacity = "";
      el.style.transform = "";
      el.style.transformOrigin = "";
    };

    const update = () => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const bottom = el.getBoundingClientRect().bottom;
        // 1 = fully visible, 0 = just left the screen
        const t = Math.min(1, Math.max(0, bottom / (vh * start)));

        if (t >= 1) {
          reset(el); // no leftover transforms while the section is in normal view
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
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      els.forEach(reset);
    };
  }, [ids, start, shift, shrink]);
}