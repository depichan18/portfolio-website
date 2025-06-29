import { useState, useEffect, useRef } from 'react';

export const useScrollTransition = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = Math.max(0, Math.min(1, entry.intersectionRatio / threshold));
        setScrollProgress(progress);
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsTransitioning(true);
          
          // End transition after animation
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1500);
        } else {
          // Gradual fade out when leaving viewport
          setIsVisible(entry.intersectionRatio > 0.05);
        }
      },
      {
        threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  // Additional scroll listener for smoother progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      let progress = 0;
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const visibleHeight = Math.min(windowHeight - elementTop, elementHeight, windowHeight);
        progress = Math.max(0, Math.min(1, visibleHeight / (windowHeight * 0.6)));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    elementRef,
    isVisible,
    isTransitioning,
    scrollProgress
  };
};

export const useStaggeredAnimation = (delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, entry.target]));
            }, index * delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const container = containerRef.current;
    if (container) {
      const children = container.querySelectorAll('.stagger-item');
      children.forEach(child => observer.observe(child));
    }

    return () => {
      if (container) {
        const children = container.querySelectorAll('.stagger-item');
        children.forEach(child => observer.unobserve(child));
      }
    };
  }, [delay]);

  return {
    containerRef,
    visibleItems
  };
};
