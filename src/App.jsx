import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Writing from "./components/Writing"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black px-10 text-white">
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  )
}

export default App
