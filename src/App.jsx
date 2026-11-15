import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Projects from "./Projects.jsx"
import Journey from "./Journey.jsx"
import Think from "./Think.jsx"
import Contact from "./Contact.jsx"
import TechCarousel from "./carousel.jsx"
import ProjectDetail from "./ProjectDetail.jsx"
import ScrollManager from "./ScrollManager.jsx"
import Services from "./Services.jsx"
import CommandPalette from "./CommandPalette.jsx"
import useLeaveFade from "./useLeaveFade.js"

// sections that fade as you scroll past them (Contact is left out on purpose)
// ids must match each section's id attribute; any id that isn't found is skipped
const LEAVE_IDS = ["home", "About", "Projects", "Services", "TechCarousel", "Think", "Journey"]

// your whole one-page portfolio, in the same order plus the new Services section
function Portfolio() {
  useLeaveFade(LEAVE_IDS)

  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Services />
      <TechCarousel />
      <Think />
      <Journey />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <CommandPalette />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App