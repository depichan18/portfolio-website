import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

const FloatingSymbols = () => {
  const symbols = [
    { class: 'symbol-pi', style: { top: '10%', left: '5%' } },
    { class: 'symbol-infinity', style: { top: '30%', right: '10%' } },
    { class: 'symbol-delta', style: { bottom: '20%', left: '15%' } },
    { class: 'symbol-theta', style: { top: '50%', right: '20%' } },
    { class: 'symbol-phi', style: { bottom: '40%', left: '80%' } },
    { class: 'symbol-sigma', style: { top: '70%', right: '5%' } },
    { class: 'symbol-omega', style: { bottom: '10%', right: '15%' } },
  ];

  return symbols.map((symbol, index) => (
    <div
      key={index}
      className={`floating-symbol ${symbol.class} animate-math-float`}
      style={symbol.style}
    />
  ));
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="math-symbols-bg relative">
        <FloatingSymbols />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
