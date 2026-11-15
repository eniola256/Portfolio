import { createElement } from "react";
import { useFadeInOnScroll } from "./UseFadeInOnScroll.jsx";

/**
 * Slides its children up the first time it scrolls into view.
 * `index` staggers neighbours (0, 1, 2 ...). Styles live in index.css (.sx-r).
 */
export default function Reveal({ as = "div", index = 0, className = "", children, ...rest }) {
  const [ref, visible] = useFadeInOnScroll();

  return createElement(
    as,
    {
      ref,
      className: `sx-r${visible ? " in" : ""}${className ? ` ${className}` : ""}`,
      style: { "--i": index },
      ...rest,
    },
    children
  );
}
