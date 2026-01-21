import Navbar  from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Journey from "./Journey.jsx";
import Think from "./Think.jsx";  
import Contact from "./Contact.jsx";
import TechCarousel from "./carousel.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <TechCarousel />
      <Think />
      <Journey />
      <Contact />
    </>
  )
}

export default App
