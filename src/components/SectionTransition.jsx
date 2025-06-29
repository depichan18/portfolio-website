import React from 'react';
import { useScrollTransition } from '../hooks/useScrollTransition';

const SectionTransition = ({ children, className = '', id }) => {
  const { elementRef, isVisible, isTransitioning, scrollProgress } = useScrollTransition(0.1);

  // Define color schemes for each section
  const sectionColors = {
    hero: {
      from: 'rgba(22, 78, 99, 0.9)', // cyan-900
      via: 'rgba(14, 116, 144, 0.8)', // teal-800  
      to: 'rgba(30, 58, 138, 0.9)' // blue-900
    },
    about: {
      from: 'rgba(255, 255, 255, 0.95)', // white
      via: 'rgba(103, 232, 249, 0.8)', // cyan-200
      to: 'rgba(15, 118, 110, 0.9)' // teal-800
    },
    projects: {
      from: 'rgba(125, 211, 252, 0.9)', // sky-300
      via: 'rgba(103, 232, 249, 0.8)', // cyan-200
      to: 'rgba(34, 211, 238, 0.9)' // cyan-400
    },
    contact: {
      from: 'rgba(22, 78, 99, 0.9)', // cyan-900
      via: 'rgba(14, 116, 144, 0.8)', // teal-800
      to: 'rgba(30, 58, 138, 0.9)' // blue-900
    }
  };

  const currentColors = sectionColors[id] || sectionColors.hero;

  return (
    <section
      ref={elementRef}
      id={id}
      className={`
        ${className}
        relative transition-all duration-1200 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${isTransitioning ? 'section-transitioning' : ''}
        section-wrapper
      `}
      style={{
        '--section-progress': scrollProgress
      }}
    >
      {/* Gradient Overlay for Color Blending */}
      <div 
        className={`
          absolute inset-0 pointer-events-none transition-all duration-1500 ease-out z-5
          ${isTransitioning ? 'opacity-60' : 'opacity-20'}
        `}
        style={{
          background: `
            radial-gradient(ellipse at top, ${currentColors.from} 0%, transparent 70%),
            linear-gradient(135deg, ${currentColors.via} 0%, transparent 40%, ${currentColors.to} 100%)
          `,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Animated Transition Wave */}
      <div 
        className={`
          absolute inset-0 pointer-events-none transition-all duration-2000 ease-out z-6
          ${isTransitioning ? 'opacity-40' : 'opacity-0'}
        `}
        style={{
          background: `
            linear-gradient(
              ${120 + scrollProgress * 60}deg, 
              transparent 0%,
              rgba(255, 255, 255, 0.1) 20%,
              rgba(6, 182, 212, 0.15) 40%,
              rgba(20, 184, 166, 0.15) 60%,
              rgba(255, 255, 255, 0.1) 80%,
              transparent 100%
            )
          `,
          transform: `translateX(${-100 + scrollProgress * 200}%)`
        }}
      />

      {/* Subtle Border Glow */}
      <div 
        className={`
          absolute inset-0 pointer-events-none transition-all duration-1000 ease-out z-7
          ${isVisible ? 'opacity-30' : 'opacity-0'}
        `}
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
          `
        }}
      />
      
      {/* Content with enhanced staggered animation */}
      <div 
        className={`
          relative z-20 transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
        `}
        style={{
          transitionDelay: isVisible ? '300ms' : '0ms',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)'
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionTransition;
