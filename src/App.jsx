import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SectionTransition from './components/SectionTransition'
import './App.css'

function App() {
  return (
    <div className="App relative">
      <Navbar />
      
      {/* Hero Section */}
      <SectionTransition id="hero">
        <Hero />
      </SectionTransition>
      
      {/* About Section with Transition */}
      <SectionTransition id="about">
        <About />
      </SectionTransition>
      
      {/* Projects Section with Transition */}
      <SectionTransition id="projects">
        <Projects />
      </SectionTransition>
      
      {/* Contact Section with Transition */}
      <SectionTransition id="contact">
        <Contact />
      </SectionTransition>
    </div>
  )
}

export default App
