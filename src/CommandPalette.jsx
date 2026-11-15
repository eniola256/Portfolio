import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "./projectsData.js";
import "./CommandPalette.css";

const sectionItems = [
  { label: "Home", hint: "Section", to: "/#home" },
  { label: "About", hint: "Section", to: "/#About" },
  { label: "Projects", hint: "Section", to: "/#Projects" },
  { label: "What I build", hint: "Section", to: "/#Services" },
  { label: "Contact", hint: "Section", to: "/#Contact" },
];

const projectItems = projects.map((p) => ({
  label: p.name,
  hint: "Project",
  to: `/projects/${p.slug}`,
}));

const linkItems = [
  { label: "Email", hint: "Link", href: "mailto:aetech357@gmail.com" },
  { label: "WhatsApp", hint: "Link", href: "https://wa.me/2349162323354" },
  { label: "GitHub", hint: "Link", href: "https://github.com/eniola256" },
];

const allItems = [...sectionItems, ...projectItems, ...linkItems];

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? allItems.filter((i) => i.label.toLowerCase().includes(q)) : allItems;
  }, [query]);

  // open with Ctrl/Cmd + K, close with Escape
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuery("");
        setIndex(0);
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // the navbar's dot-grid button asks for the palette through this event
  useEffect(() => {
    const onOpen = () => {
      setQuery("");
      setIndex(0);
      setOpen(true);
    };
    window.addEventListener("open-command-palette", onOpen);
    return () => window.removeEventListener("open-command-palette", onOpen);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const run = (item) => {
    if (!item) return;
    setOpen(false);
    if (item.href) window.open(item.href, item.href.startsWith("mailto:") ? "_self" : "_blank", "noopener");
    else navigate(item.to);
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[index]);
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk-backdrop" onMouseDown={() => setOpen(false)}>
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Quick navigation"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          className="cmdk-input"
          type="text"
          placeholder="Jump to a section, project or link…"
          aria-label="Search sections, projects and links"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={onInputKey}
        />
        <ul className="cmdk-list" role="listbox">
          {results.length === 0 && <li className="cmdk-empty">Nothing found</li>}
          {results.map((item, i) => (
            <li
              key={item.label}
              role="option"
              aria-selected={i === index}
              className={`cmdk-item ${i === index ? "active" : ""}`}
              onMouseEnter={() => setIndex(i)}
              onClick={() => run(item)}
            >
              <span>{item.label}</span>
              <span className="cmdk-hint">{item.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;
