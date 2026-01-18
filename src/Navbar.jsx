import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="material-symbols-outlined">code_off</span>
        AE Tech
      </div>

      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#About" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">menu</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
