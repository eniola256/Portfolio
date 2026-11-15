import { useEffect } from "react";

const SITE = "https://buildwithaetech.com";

// find or create a <meta> / <link> in <head>, remembering how to undo it
function upsert(selector, create, setAttrs, undo) {
  let el = document.head.querySelector(selector);
  const existed = !!el;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  const prev = {};
  Object.keys(setAttrs).forEach((k) => (prev[k] = el.getAttribute(k)));
  Object.entries(setAttrs).forEach(([k, v]) => el.setAttribute(k, v));
  undo.push(() => {
    if (!existed) el.remove();
    else Object.entries(prev).forEach(([k, v]) => (v == null ? el.removeAttribute(k) : el.setAttribute(k, v)));
  });
}

const meta = (attr, name) => () => {
  const m = document.createElement("meta");
  m.setAttribute(attr, name);
  return m;
};

/**
 * Per-route SEO for a single-page app. Sets title, description, canonical,
 * Open Graph / Twitter tags and optional JSON-LD, then restores the previous
 * values when the route unmounts.
 */
export default function useSeo({ title, description, path = "/", image, noindex = false, jsonLd }) {
  useEffect(() => {
    const undo = [];
    const url = SITE + path;
    const img = image ? (image.startsWith("http") ? image : SITE + image) : null;

    const prevTitle = document.title;
    document.title = title;
    undo.push(() => (document.title = prevTitle));

    upsert('meta[name="description"]', meta("name", "description"), { content: description }, undo);
    upsert('meta[name="robots"]', meta("name", "robots"), {
      content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    }, undo);
    upsert('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }, { href: url }, undo);

    upsert('meta[property="og:title"]', meta("property", "og:title"), { content: title }, undo);
    upsert('meta[property="og:description"]', meta("property", "og:description"), { content: description }, undo);
    upsert('meta[property="og:url"]', meta("property", "og:url"), { content: url }, undo);
    upsert('meta[name="twitter:title"]', meta("name", "twitter:title"), { content: title }, undo);
    upsert('meta[name="twitter:description"]', meta("name", "twitter:description"), { content: description }, undo);
    if (img) {
      upsert('meta[property="og:image"]', meta("property", "og:image"), { content: img }, undo);
      upsert('meta[name="twitter:image"]', meta("name", "twitter:image"), { content: img }, undo);
    }

    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seo = "route";
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
      undo.push(() => s.remove());
    }

    return () => undo.reverse().forEach((fn) => fn());
  }, [title, description, path, image, noindex, jsonLd]);
}
