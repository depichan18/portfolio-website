import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Hook untuk animasi scroll
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animateId]));
          } else {
            // Hapus dari set agar bisa mengulang animasi
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.dataset.animateId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observerRef.current = observer;

    // Observe all elements with data-animate-id
    const elementsToObserve = document.querySelectorAll('[data-animate-id]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Get base URL for images (works for both dev and production)
  const getImagePath = (imageName) => {
    const isDev = import.meta.env.DEV;
    const base = isDev ? '' : '/portfolio-website';
    return `${base}/images/${imageName}`;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="min-h-screen flex items-center justify-between relative overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 pt-20 section-content">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-xl animate-float-reverse"
          style={{
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${25 + mousePosition.y * 0.03}%`,
          }}
        />
        
        {/* Mathematical symbols floating */}
        <div className="absolute text-6xl text-cyan-300/10 font-bold animate-bounce" style={{ left: "10%", top: "20%" }}>∞</div>
        <div className="absolute text-4xl text-teal-300/10 font-bold animate-pulse" style={{ right: "15%", top: "15%" }}>π</div>
        <div className="absolute text-5xl text-blue-300/10 font-bold animate-bounce" style={{ left: "80%", bottom: "30%" }}>∑</div>
        <div className="absolute text-3xl text-green-300/10 font-bold animate-pulse" style={{ left: "5%", bottom: "20%" }}>∫</div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12 relative z-10 max-w-7xl">
        {/* Left Content */}
        <div 
          className={`text-left space-y-6 max-w-xl transition-all duration-1000 ${
            visibleElements.has('hero-content') 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}
          data-animate-id="hero-content"
        >
          <div className="animate-fade-in">
            
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-scale-in">
                Hi, I'm <span className="text-cyan-300">Devi</span>
              </h1>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Math Student</span>
                <span className="text-white"> & Developer</span>
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mt-6 mb-8">
              Passionate Mathematics student at ITS Surabaya. I create intuitive and visually appealing solutions by transforming mathematical concepts into seamless code that meets real-world expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white text-cyan-900 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                My Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-900 transition-all duration-300 text-base"
              >
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/depichan18" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:scale-110 border border-white/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/devirosa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:scale-110 border border-white/20">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:depichan18@gmail.com" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:scale-110 border border-white/20">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/devirosaa24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-cyan-900 transition-all duration-300 hover:scale-110 border border-white/20">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Phone/Profile Container */}
        <div 
          className={`relative flex justify-center items-center lg:justify-end transition-all duration-1000 delay-300 ${
            visibleElements.has('hero-profile') 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}
          data-animate-id="hero-profile"
        >
          <div className="relative">
            {/* Phone-like container with 3D effect */}
            <div className="relative">
              {/* 3D Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-[3rem] transform rotate-12 scale-105 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-[3rem] transform -rotate-6 scale-110 blur-sm"></div>
              
              {/* Main phone container */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-[3rem] p-1 border border-white/30 shadow-2xl w-80 h-[500px] transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-gradient-to-br from-cyan-500/90 to-teal-600/90 rounded-[2.8rem] w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  
                  {/* Floating mathematical elements inside phone */}
                  <div className="absolute top-6 left-6 text-2xl text-white/30 animate-float">∫</div>
                  <div className="absolute top-12 right-8 text-xl text-white/30 animate-pulse">π</div>
                  <div className="absolute bottom-20 left-8 text-lg text-white/30 animate-bounce">∑</div>
                  <div className="absolute bottom-32 right-6 text-xl text-white/30 animate-float">∞</div>
                  
                  {/* Profile Picture */}
                  <div className="mb-8 flex justify-center relative z-10">
                    <div className="relative">
                      <div className="w-52 h-52 rounded-full bg-gradient-to-br from-white/20 to-cyan-200/30 p-1 shadow-xl">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={getImagePath('profile.jpg')}
                            alt="Devi Rosa Aprilla" 
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/200x200/06b6d4/ffffff?text=DR";
                            }}
                          />
                        </div>
                      </div>
                      {/* Floating decorative elements around profile */}
                      <div className="absolute -bottom-4 -left-4 text-white text-2xl font-bold animate-bounce">
                        ✨
                      </div>
                      <div className="absolute top-1/2 -right-8 text-white text-xl font-bold animate-pulse">
                        ∞
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="text-center text-white relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Devi Rosa Aprilla</h3>
                    <p className="text-base text-cyan-100 mb-1 font-medium">Mathematics Student</p>
                    <p className="text-sm text-white/80 mb-3">Institut Teknologi Sepuluh Nopember</p>
                    <div className="flex items-center justify-center gap-2 text-xs text-white/70">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Available for projects</span>
                    </div>
                  </div>
                  
                  {/* Decorative math symbols floating around */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-4 text-white/20 text-lg animate-spin-slow">⊕</div>
                    <div className="absolute top-3/4 right-4 text-white/20 text-lg animate-pulse">√</div>
                    <div className="absolute top-1/2 left-2 text-white/20 text-sm animate-bounce">θ</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating mathematical elements around the phone */}
            <div className="absolute -top-12 -left-12 text-5xl text-cyan-300/30 animate-float">∑</div>
            <div className="absolute -bottom-12 -right-12 text-4xl text-teal-300/30 animate-pulse">∫</div>
            <div className="absolute top-1/2 -left-16 text-3xl text-blue-300/20 animate-spin-slow">∞</div>
            <div className="absolute top-1/4 -right-16 text-2xl text-green-300/20 animate-bounce">π</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-cyan-900 transition-all duration-300 border border-white/20"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

