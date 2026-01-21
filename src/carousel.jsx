import React from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress 
} from "react-icons/si";
import "./carousel.css";

function TechCarousel() {
  const icons = [
    { icon: <SiHtml5 />, color: "#808080" },
    { icon: <SiCss3 />, color: "#808080" },
    { icon: <SiJavascript />, color: "#808080" },
    { icon: <SiReact />, color: "#808080" },
    { icon: <SiNodedotjs />, color: "#808080" },
    { icon: <SiExpress />, color: "#808080" },
  ];

  // Duplicate 4 times for a longer continuous carousel
  const allIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <section id="Carousel">
    <div className="tech-carousel">
      <div className="carousel-wrapper">
        {allIcons.map((item, idx) => (
          <div key={idx} className="carousel-item">
            {React.cloneElement(item.icon, { color: item.color, size: 60 })}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default TechCarousel;
