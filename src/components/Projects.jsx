import React, { useState, useEffect, useRef } from 'react';
import { 
  FaStore, FaGamepad, FaCalculator, FaUser, FaBrain, 
  FaBook, FaLock, FaFileAlt, FaHeart, FaShoppingCart,
  FaComments, FaPaperPlane
} from 'react-icons/fa';
import { 
  MdDashboard, MdGames, MdAccountBalance, MdWeb, MdSchool
} from 'react-icons/md';
import { 
  HiOutlineDocumentText, HiOutlineHeart
} from 'react-icons/hi';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState({});
  const intervalRefs = useRef({});
  
  // State for image popup
  const [popupImage, setPopupImage] = useState(null);
  
  // State for scroll animations
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const observerRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting) {
          // Add animation when element enters viewport
          element.classList.add('animate-in');
          setAnimatedElements(prev => new Set([...prev, element.id]));
        } else {
          // Remove animation when element leaves viewport (for repeat animations)
          element.classList.remove('animate-in');
          setAnimatedElements(prev => {
            const newSet = new Set(prev);
            newSet.delete(element.id);
            return newSet;
          });
        }
      });
    }, options);

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Re-observe elements when component updates
  useEffect(() => {
    if (observerRef.current) {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => observerRef.current.observe(el));
    }
  });

  // Close popup on overlay or ESC
  useEffect(() => {
    if (!popupImage) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setPopupImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [popupImage]);
  
  // State for testimonials
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Developer",
      message: "Amazing mathematical approach to problem solving! The projects show great attention to detail and innovative thinking.",
      avatar: "developer",
      timestamp: new Date().toLocaleDateString()
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Data Scientist", 
      message: "Impressive combination of mathematics and programming. The Hill Cipher implementation was particularly well-documented.",
      avatar: "scientist",
      timestamp: new Date().toLocaleDateString()
    }
  ]);
  
  // State for testimonial form
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    role: '',
    message: ''
  });

  const handleTestimonialChange = (e) => {
    setTestimonialForm({
      ...testimonialForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    if (testimonialForm.name && testimonialForm.message) {
      const newTestimonial = {
        id: testimonials.length + 1,
        name: testimonialForm.name,
        role: testimonialForm.role || 'Visitor',
        message: testimonialForm.message,
        avatar: "visitor",
        timestamp: new Date().toLocaleDateString()
      };
      setTestimonials([newTestimonial, ...testimonials]);
      setTestimonialForm({ name: '', role: '', message: '' });
    }
  };

  // Projects data - easily add new projects here
  const projects = [
    {
      id: 1,
      title: "Depi Store Manager",
      description: "A modern store management app that streamlines inventory, sales, and reporting for small retail businesses.",
      detailedDescription: "Depi Store Manager is a desktop application designed to simplify daily operations in small retail stores. It offers features for managing product data, automating transactions, and generating insightful business reports. With a clean and user-friendly interface, store owners can efficiently track stock, monitor sales performance, and make data-driven decisions to grow their business.",
      category: "personal",
      tags: ["Java", "MySQL", "JavaFX", "Maven", "Apache POI", "OpenPDF"],
      gradientColor: "from-cyan-400 to-teal-400",
      icon: "📦",
      link: "https://github.com/depichan18/depistore-manager",
      github: "https://github.com/depichan18/depistore-manager",
      images: [
        "/images/depistore-1.png",
        "/images/depistore-2.png", 
        "/api/placeholder/600/400"
      ],
      features: [
        "Product and stock management (CRUD)",
        "Automated sales recording",
        "Business dashboard with analytics",
        "Printable daily, weekly, and monthly reports",
        "Quick search and sort functions"
      ]
    },
    {
      id: 2,
      title: "Paw Jump Game",
      description: "A 2D endless runner game where players dodge obstacles, collect fish, and level up to achieve high scores.",
      detailedDescription: "Paw Jump is an endless runner game inspired by the classic Dino Chrome experience. Players control a character that runs automatically and must jump or duck to avoid increasingly difficult obstacles while collecting fish to survive and progress. Every 250 meters, the game speeds up and introduces new challenges. With a lives system, level-up conditions, and special buff items, Paw Jump combines reflex-based gameplay with strategic item collection for a fun and addictive experience.",
      category: "academic",
      tags: ["Java", "Java Swing", "Game Development", "OOP", "2D Game"],
      gradientColor: "from-cyan-400 to-green-400",
      icon: "🐾",
      link: "https://github.com/depichan18/paw-jump",
      github: "https://github.com/depichan18/paw-jump",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Dynamic level progression and speed scaling",
        "Fish collection system for leveling up",
        "Lives and buffs for strategic survival",
        "Simple jump/drop controls with intuitive UI"
      ]
    },
    {
      id: 3,
      title: "Bookkeeping Application",
      description: "A complete accounting application with double-entry bookkeeping, financial reports, and CSV data import — all in a clean, modern interface.",
      detailedDescription: "This project is a fully functional double-entry accounting system built for small to medium businesses. It supports full Chart of Accounts management, transaction tracking with automatic validation, and generation of key financial reports like Trial Balance, Balance Sheet, and Income Statement — all exportable to PDF. With bulk CSV import for accounts and transactions, plus a modern, user-friendly UI, this application streamlines financial management while maintaining accounting standards.",
      category: "personal",
      tags: ["JavaFX", "Accounting", "SQLite", "JPA", "Hibernate", "Maven"],
      gradientColor: "from-green-400 to-green-400",
      icon: "🔄",
      link: "https://github.com/depichan18/bookkeeping-app",
      github: "https://github.com/depichan18/bookkeeping-app",
      images: [
        "/images/bookkeeping-1.png",
        "/images/bookkeeping-2.png",
        "/images/bookkeeping-3.png"
      ],
      features: [
        "Full double-entry bookkeeping",
        "Chart of Accounts & transaction tracking",
        "Financial reports (PDF export)",
        "CSV data import for bulk entries"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A fast, responsive personal website to showcase projects, skills, and contact details with a clean, modern look.",
      detailedDescription: "This personal portfolio website is designed to highlight your work and skills in a professional yet creative way. Built for performance and responsiveness, it includes smooth animations, interactive visuals, and a unique mathematical theme that reflects analytical thinking. The interface adapts to all screen sizes and provides an engaging experience through subtle mouse interactions and floating elements.",
      category: "personal",
      tags: ["React", "JavaScript", "Vite.js", "Tailwind CSS", "Web Design"],
      gradientColor: "from-green-400 to-green-400",
      icon: "💰",
      link: "https://github.com/depichan18/portfolio-website",
      github: "https://github.com/depichan18/portfolio-website",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Interactive hero section",
        "Math-themed floating visuals",
        "Fully responsive layout",
        "Smooth animations with clean UI"
      ]
    },
    {
      id: 5,
      title: "OMITS 18 Math Problems",
      description: "A curated set of elementary-level math problems designed for the 18th National Mathematics Olympiad at ITS (OMITS 18).",
      detailedDescription: "OMITS Math Problems is a personal collection of competition-style math questions created for the 18th edition of the National Mathematics Olympiad (OMITS) organized by ITS. Targeted at primary school participants, the set includes both easy and mid-to-high difficulty problems that challenge logical thinking, number sense, and creative problem solving. This project was developed as part of my committee responsibilities to support the academic quality of the event.",
      category: "committee",
      tags: ["LaTeX","Math Olympiad", "Mathematics", "Education", "Problem Design"],
      gradientColor: "from-purple-400 to-cyan-400",
      icon: "🧮",
      link: "https://github.com/depichan18/OMITS-18",
      github: "https://github.com/depichan18/OMITS-18",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Custom-made math problems for elementary level",
        "Covers easy to advanced competition difficulty",
        "Designed for OMITS 18 national event",
        "Supports critical and creative thinking"
      ]
    },
    {
      id: 6,
      title: "Quant Roadmap",
      description: "An interactive web app documenting a personal 8-week journey to become a quantitative researcher — complete with tasks, tracking, and study tools in a playful, pastel-themed interface.",
      detailedDescription: "Quant Journey is a personalized learning platform designed to support my transition into quantitative research. It combines structured curriculum planning, progress tracking, and built-in study tools across topics like statistics, finance, and programming. With a vibrant pink-blue theme and engaging UI, the app offers daily task management, real-time analytics, and exportable reports. This tool reflects my self-guided exploration of quantitative finance and serves both as a study companion and a public portfolio of my learning path.",
      category: "personal",
      tags: ["Cute", "Quant", "React", "Productivity", "Tailwind CSS"],
      gradientColor: "from-purple-400 to-cyan-400",
      icon: "📘",
      link: "https://github.com/depichan18/quant-roadmap",
      github: "https://github.com/depichan18/quant-roadmap",
      images: [
        "/images/quant-1.png",
        "/images/quant-2.png",
        "/images/quant-3.png"
      ],
      features: [
        "Visual progress tracker & daily checklist",
        "Built-in Pomodoro study timer",
        "Exportable learning reports (JSON, CSV, HTML)",
        "Fully responsive, local data storage"
      ]
    },
    {
      id: 7,
      title: "Hill Cipher nxn Website",
      description: "A responsive web app for encrypting and decrypting text using customizable Hill Cipher matrices with real-time feedback and file support.",
      detailedDescription: "This project is a browser-based Hill Cipher tool designed for secure text encryption and decryption using modular arithmetic with mod 97 and invertible n×n matrices (2×2 to 7×7). Users can input text manually or via .txt file, and instantly see the processed result along with matrix visualizations. With a sleek glassmorphism UI and full support for printable ASCII characters, the app combines security, usability, and interactivity. It also includes smart padding, automatic matrix validation, and cross-platform functionality.",
      category: "academic",
      tags: ["LaTeX", "Mathematics", "Education", "Problem Design"],
      gradientColor: "from-purple-400 to-cyan-400",
      icon: "🔐",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Supports 2×2 to 7×7 key matrices (mod 97)",
        "Live encryption/decryption with matrix display",
        "Input via text or uploaded file",
        "tylish responsive UI with real-time feedback"
      ]
    },
    {
      id: 8,
      title: "LaTeX Academic Documents",
      description: "A curated collection of academic evaluations written in LaTeX, covering quizzes, exams, and presentations from various university courses.",
      detailedDescription: "LaTeX Academic Documents is a personal archive of course evaluations written in LaTeX, organized by semester and subject. It includes Quiz 1, Mid-Term Exams, Quiz 2, Final Exams, and occasionally presentation materials. These resources are shared publicly through GitHub repositories to support juniors and peers in their academic journey. Each document is neatly formatted and aims to provide clear solutions and insights for exam preparation and review.",
      category: "personal",
      tags: ["LaTeX", "Academic Writing", "Mathematics", "Education"],
      gradientColor: "from-cyan-400 to-cyan-400",
      icon: "📄",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Full set of evaluations per course and semester",
        "Written and formatted in LaTeX",
        "Includes quizzes, exams, and presentations",
        "Publicly shared to help fellow students"
      ]
    },
    {
      id: 9,
      title: "Kuromi To-Do List",
      description: "A cute and interactive desktop To-Do List app with note-taking and calendar view, designed with a fun Kuromi theme.",
      detailedDescription:"This To-Do List app offers a playful and functional way to organize daily tasks. Built with Electron and styled with Kuromi-themed icons, it supports task creation, editing, and deletion, along with note-taking for each task. Users can view tasks by date using the built-in calendar and reset their task list in one click. All data is stored locally to ensure offline access. With its smooth interactions and kawaii aesthetic, it turns task management into a delightful experience.",
      category: "personal",
      tags: ["Electron.js", "JavaScript", "HTML/CSS", "Calendar", "Cute"],
      gradientColor: "from-pink-400 to-purple-400",
      icon: "🖤",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Add, edit, and delete tasks with notes",
        "Calendar view for date-based task browsing",
        "One-click reset and local storage support",
        "Kuromi-themed UI with interactive elements"
      ]
    },
    {
      id: 10,
      title: "GUI Cashier Application",
      description: "A simple cashier desktop app using dialog boxes for interactive shopping simulation with stock and balance logic.",
      detailedDescription: "GUI Kasir is a beginner-friendly cashier application built with JOptionPane for a fully dialog-based interface. It simulates a basic shopping experience where users select items, input quantity, and make purchases based on available funds and stock. The system handles real-time balance updates, stock deductions, and validates each transaction, making it an educational example of conditional logic and GUI interaction in programming.",
      category: "academic",
      tags: ["Java", "Swing", "JOptionPane", "GUI", "Cashier Simulation"],
      gradientColor: "from-purple-400 to-cyan-400",
      icon: "🛒",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Interactive shopping via dialog boxes",
        "Real-time stock and balance validation",
        "Simple transaction flow with retry options",
        "Full logic handled through JOptionPane UI"
      ]
    },
  ];

  // Filter categories for easy management
  const categories = {
    all: "All Projects",
    personal: "Personal",
    academic: "Academic", 
    committee: "Committee"
  };

  const [activeCategory, setActiveCategory] = useState('all');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const slideStep = 1; // Move by 1 project each time
  
  // Auto-slide page state
  const pageIntervalRef = useRef();

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  // Calculate total slides - we can slide until we can't show 3 full projects
  const totalSlides = Math.max(1, filteredProjects.length - projectsPerPage + 1);
  
  // Get current projects to display (always show 3, but slide by 1)
  const getCurrentProjects = () => {
    const startIndex = currentPage;
    const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);
    return filteredProjects.slice(startIndex, endIndex);
  };

  // Handle slide navigation
  const nextSlide = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    const currentIndex = currentSlide[projectId] || 0;
    const nextIndex = (currentIndex + 1) % project.images.length;
    console.log(`Project ${projectId}: ${currentIndex} -> ${nextIndex} (total: ${project.images.length})`);
    setCurrentSlide(prev => ({ ...prev, [projectId]: nextIndex }));
  };

  const prevSlide = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    const currentIndex = currentSlide[projectId] || 0;
    const prevIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    console.log(`Project ${projectId}: ${currentIndex} -> ${prevIndex} (total: ${project.images.length})`);
    setCurrentSlide(prev => ({ ...prev, [projectId]: prevIndex }));
  };

  const goToSlide = (projectId, index) => {
    setCurrentSlide(prev => ({ ...prev, [projectId]: index }));
  };

  // Auto-slide functionality
  const startAutoSlide = (projectId) => {
    // Clear existing interval if any
    if (intervalRefs.current[projectId]) {
      clearInterval(intervalRefs.current[projectId]);
    }
    
    // Start new interval
    intervalRefs.current[projectId] = setInterval(() => {
      setCurrentSlide(prev => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return prev;
        
        const currentIndex = prev[projectId] || 0;
        const nextIndex = (currentIndex + 1) % project.images.length;
        console.log(`Auto-slide Project ${projectId}: ${currentIndex} -> ${nextIndex}`);
        return { ...prev, [projectId]: nextIndex };
      });
    }, 6000); // Change slide every 2.5 seconds
  };

  const stopAutoSlide = (projectId) => {
    if (intervalRefs.current[projectId]) {
      clearInterval(intervalRefs.current[projectId]);
      intervalRefs.current[projectId] = null;
    }
  };

  // Handle mouse enter with auto-slide start
  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
    startAutoSlide(projectId);
  };

  // Handle mouse leave with auto-slide stop
  const handleMouseLeave = (projectId) => {
    setHoveredProject(null);
    stopAutoSlide(projectId);
    // Reset to first slide when leaving
    setCurrentSlide(prev => ({ ...prev, [projectId]: 0 }));
  };

  // Cleanup intervals on component unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
      if (pageIntervalRef.current) {
        clearInterval(pageIntervalRef.current);
      }
    };
  }, []);

  // Auto-slide page functionality
  const startPageAutoSlide = () => {
    if (pageIntervalRef.current) {
      clearInterval(pageIntervalRef.current);
    }
    
    pageIntervalRef.current = setInterval(() => {
      setCurrentPage(prev => {
        const nextPage = (prev + slideStep) % totalSlides;
        console.log(`Auto-slide page: ${prev} -> ${nextPage} (total: ${totalSlides})`);
        return nextPage;
      });
    }, 18000); // Change page every 10 seconds
  };

  const stopPageAutoSlide = () => {
    if (pageIntervalRef.current) {
      clearInterval(pageIntervalRef.current);
      pageIntervalRef.current = null;
    }
  };

  // Start auto-slide when component mounts
  useEffect(() => {
    if (totalSlides > 1) {
      startPageAutoSlide();
    }
    return () => stopPageAutoSlide();
  }, [totalSlides]);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(0);
    stopPageAutoSlide();
    if (totalSlides > 1) {
      setTimeout(() => startPageAutoSlide(), 150);
    }
  }, [activeCategory, totalSlides]);

  // Page navigation functions
  const nextPage = () => {
    stopPageAutoSlide();
    setCurrentPage(prev => (prev + slideStep) % totalSlides);
    setTimeout(() => {
      if (totalSlides > 1) startPageAutoSlide();
    }, 1800);
  };

  const prevPage = () => {
    stopPageAutoSlide();
    setCurrentPage(prev => prev === 0 ? totalSlides - slideStep : prev - slideStep);
    setTimeout(() => {
      if (totalSlides > 1) startPageAutoSlide();
    }, 1800);
  };

  const goToPage = (pageIndex) => {
    stopPageAutoSlide();
    setCurrentPage(pageIndex);
    setTimeout(() => {
      if (totalSlides > 1) startPageAutoSlide();
    }, 1800);
  };



  return (
    <div id="projects" className="py-20 pt-32 px-6 relative overflow-hidden section-content">
      {/* Animated Background Gradient - Clear Blue and Cyan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100"></div>
        <div 
          className="absolute inset-0 opacity-35"
          style={{
            background: `
              radial-gradient(circle at 25% 75%, rgba(56, 189, 248, 0.25) 0%, transparent 60%),
              radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.20) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 70%)
            `,
            animation: 'clearBlueGradientMove 16s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            background: `
              linear-gradient(45deg, rgba(56, 189, 248, 0.12) 0%, transparent 30%, rgba(6, 182, 212, 0.10) 50%, transparent 70%, rgba(14, 165, 233, 0.08) 100%)
            `,
            animation: 'clearBlueGradientShift 22s linear infinite'
          }}
        ></div>
      </div>

      {/* Mathematical Background with Clear Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 text-8xl text-sky-400/20 font-light animate-pulse">∂</div>
        <div className="absolute bottom-24 right-12 text-8xl text-cyan-400/20 font-light animate-bounce" style={{ animationDuration: '5s' }}>∫</div>
        <div className="absolute top-1/3 right-1/4 text-6xl text-blue-400/15 font-light animate-spin" style={{ animationDuration: '30s' }}>∞</div>
        <div className="absolute bottom-1/3 left-1/4 text-5xl text-sky-500/20 font-light animate-pulse" style={{ animationDelay: '3s' }}>π</div>
        <div className="absolute top-1/2 left-16 text-4xl text-cyan-500/25 font-light animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }}>√</div>
        <div className="absolute bottom-1/2 right-16 text-7xl text-blue-500/18 font-light animate-pulse" style={{ animationDelay: '4s' }}>Σ</div>
      </div>

      <style jsx>{`
        @keyframes clearBlueGradientMove {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.08) rotate(90deg);
          }
        }
        
        @keyframes clearBlueGradientShift {
          0% {
            transform: translateX(-30%) rotate(0deg);
          }
          50% {
            transform: translateX(30%) rotate(120deg);
          }
          100% {
            transform: translateX(-30%) rotate(240deg);
          }
        }
        
        @keyframes slideProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadein {
          animation: fadein 0.3s ease-out;
        }
      `}</style>
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 text-8xl text-blue-100/20 font-light transform rotate-12">∇</div>
        <div className="absolute top-48 right-20 text-6xl text-cyan-100/30 font-light">⊕</div>
        <div className="absolute bottom-32 left-32 text-7xl text-teal-100/25 font-light">∏</div>
        <div className="absolute bottom-48 right-16 text-5xl text-green-100/35 font-light">∂</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate" id="projects-header">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
              My Projects
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Mathematical thinking meets modern development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 scroll-animate scroll-animate-delay-1" id="category-filter">
          <div className="flex gap-2 p-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          {/* Projects Container with Animation */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPage * (100 / 3)}%)` }}
            >
              {/* Render all projects in a continuous strip */}
              {filteredProjects.map((project, index) => {
                const isHovered = hoveredProject === project.id;
                const currentImageIndex = currentSlide[project.id] || 0;
                
                // Calculate delay for staggered animation
                const delayClass = `scroll-animate-delay-${Math.min(6, (index % 6) + 1)}`;

                // Define icons based on project ID
                const projectIcons = {
                  1: FaStore,           // Depi Store Manager
                  2: FaGamepad,         // Paw Jump Game
                  3: MdAccountBalance,  // Bookkeeping Application
                  4: MdWeb,             // Portfolio Website
                  5: MdSchool,          // OMITS 18 Math Problems
                  6: FaBook,            // Quant Roadmap
                  7: FaLock,            // Hill Cipher nxn Website
                  8: HiOutlineDocumentText, // LaTeX Academic Documents
                  9: HiOutlineHeart,    // Kuromi To-Do List
                  10: FaShoppingCart    // GUI Cashier Application
                };

                const IconComponent = projectIcons[project.id] || FaUser;

                return (
                  <div key={project.id} className={`w-1/3 flex-shrink-0 px-3 scroll-animate ${delayClass}`} id={`project-${project.id}`}>
                    <div 
                      className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:border-cyan-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/25 overflow-hidden ${
                        isHovered 
                          ? 'z-30 shadow-2xl shadow-cyan-200/50' 
                          : 'relative'
                      }`}
                      onMouseEnter={() => handleMouseEnter(project.id)}
                      onMouseLeave={() => handleMouseLeave(project.id)}
                    >
                      {/* Category Badge */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradientColor} z-10`}></div>

                      {/* Project Preview Image */}
                      <div className="relative h-56 overflow-hidden">
                        {isHovered ? (
                          // Image Slider when hovered
                          <>
                            <div 
                              className="flex transition-transform duration-500 ease-in-out h-full"
                              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                              {project.images.map((image, index) => (
                                <div 
                                  key={index}
                                  className="w-full h-full flex-shrink-0 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative"
                                >
                                  <img 
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    className="max-w-full max-h-full object-contain cursor-zoom-in"
                                    style={{display: 'block', margin: '0 auto'}}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      stopAutoSlide(project.id);
                                      console.log('Slider image clicked:', image);
                                      setPopupImage(image);
                                    }}
                                    onError={(e) => {
                                      // Fallback to icon if image fails to load
                                      e.target.style.display = 'none';
                                      e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 items-center justify-center text-6xl opacity-30 animate-pulse" style={{display: 'none'}}>
                                    {project.icon}
                                  </div>
                                  <div className="absolute inset-0 bg-black/2"></div>
                                  <div className="absolute bottom-2 left-2 text-white text-xs bg-black/20 px-2 py-1 rounded">
                                    Image {index + 1}
                                  </div>
                                  {/* Auto-slide indicator */}
                                  <div className="absolute top-2 right-2 text-white text-xs bg-black/20 px-2 py-1 rounded flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    Auto
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Navigation Arrows */}
                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                stopAutoSlide(project.id);
                                prevSlide(project.id);
                                setTimeout(() => startAutoSlide(project.id), 1000);
                              }}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-cyan-700 hover:text-cyan-500 transition-all duration-200 hover:scale-110 p-0 m-0 border-none bg-transparent focus:outline-none"
                              style={{ background: 'none', boxShadow: 'none' }}
                            >
                              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ fontWeight: 'bold' }} xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                stopAutoSlide(project.id);
                                nextSlide(project.id);
                                setTimeout(() => startAutoSlide(project.id), 1000);
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-700 hover:text-cyan-500 transition-all duration-200 hover:scale-110 p-0 m-0 border-none bg-transparent focus:outline-none"
                              style={{ background: 'none', boxShadow: 'none' }}
                            >
                              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ fontWeight: 'bold' }} xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => { 
                                    e.stopPropagation(); 
                                    stopAutoSlide(project.id);
                                    goToSlide(project.id, index);
                                    setTimeout(() => startAutoSlide(project.id), 1000);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentImageIndex 
                                      ? 'bg-white scale-125 shadow-lg' 
                                      : 'bg-white/50 hover:bg-white/80'
                                  }`}
                                />
                              ))}
                            </div>
                            {/* Progress bar for auto-slide */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/2">
                              <div 
                                key={`progress-${project.id}-${currentImageIndex}`}
                                className="h-full bg-gradient-to-r from-cyan-400 to-teal-400"
                                style={{
                                  animation: 'slideProgress 6s linear forwards'
                                }}
                              ></div>
                            </div>
                          </>
                        ) : (
                          // Static preview image when not hovered
                          <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                            {project.images && project.images.length > 0 ? (
                              <img 
                                src={project.images[0]}
                                alt={`${project.title} preview`}
                                className="max-w-full max-h-full object-contain cursor-zoom-in"
                                style={{display: 'block', margin: '0 auto'}}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  console.log('Preview image clicked:', project.images[0]);
                                  setPopupImage(project.images[0]);
                                }}
                                onError={(e) => {
                                  // Fallback to icon if image fails to load
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 absolute inset-0 items-center justify-center text-6xl opacity-40" style={{display: 'none'}}>
                              {project.icon}
                            </div>
                            <div className="absolute inset-0 bg-black/2"></div>
                            <div className="absolute bottom-2 left-2 text-white text-xs bg-black/20 px-2 py-1 rounded">
                              Preview
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Emoticon, Title, and Category Tag in one row (moved below image) */}
                      <div className="flex items-center mb-3 mt-4 px-4 justify-center">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <IconComponent className="text-lg text-cyan-600 group-hover:text-cyan-500 transition-colors duration-300" />
                        </div>
                        {/* Title */}
                        <h3 className="flex-1 text-center text-lg font-bold text-cyan-800 group-hover:text-cyan-600 transition-colors duration-300 mx-2 truncate">
                          {project.title}
                        </h3>
                        {/* Category Badge */}
                        <span className={`flex-shrink-0 inline-block px-2 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${project.gradientColor}`}>
                          {project.category}
                        </span>
                      </div>

                      <div className="p-4 pt-0">
                        {/* Project Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 font-light">
                          {isHovered ? project.detailedDescription : project.description}
                        </p>

                        {/* Tech Tags - Only show when NOT hovered */}
                        {!isHovered && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg border border-gray-200/50 group-hover:bg-cyan-50 group-hover:text-cyan-800 group-hover:border-cyan-200/50 transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Features List - Only show when hovered */}
                        {isHovered && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {project.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-center">
                                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Action Buttons - Only show when hovered */}
                        {isHovered && (
                          <div className="flex gap-2 mt-3">
                            <a 
                              href={project.link}
                              className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-200/50"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MdWeb className="text-sm" />
                              View Project
                            </a>
                            {project.github && (
                              <a 
                                href={project.github}
                                className="flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaFileAlt className="text-sm" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Controls */}
          {totalSlides > 1 && (
            <div className="flex items-center justify-center mt-8 gap-4">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                className="flex items-center justify-center text-cyan-600 hover:text-cyan-500 transition-all duration-300 hover:scale-125 p-0 m-0 border-none bg-transparent focus:outline-none"
                style={{ background: 'none', boxShadow: 'none', width: 'auto', height: 'auto' }}
                disabled={totalSlides <= 1}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ fontWeight: 'bold' }} xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 scale-125 shadow-lg'
                        : 'bg-gray-300 hover:bg-cyan-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                className="flex items-center justify-center text-cyan-600 hover:text-cyan-500 transition-all duration-300 hover:scale-125 p-0 m-0 border-none bg-transparent focus:outline-none"
                style={{ background: 'none', boxShadow: 'none', width: 'auto', height: 'auto' }}
                disabled={totalSlides <= 1}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ fontWeight: 'bold' }} xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}

          {/* Auto-slide Progress Bar */}
          {totalSlides > 1 && (
            <div className="mt-4 w-full max-w-md mx-auto">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  key={`page-progress-${currentPage}`}
                  className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"
                  style={{
                    animation: 'slideProgress 18s linear forwards'
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Image Popup Modal */}
        {popupImage && (
          <div className="image-modal-overlay" onClick={() => setPopupImage(null)}>
            <div 
              className="image-modal" 
              onClick={e => e.stopPropagation()}
            >
              <img
                src={popupImage}
                alt="Project Image"
                className="w-full max-h-full object-contain"
              />
              <button
                className="image-modal-close"
                onClick={() => setPopupImage(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 mt-16">
          {/* Testimonial Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-100/50 shadow-lg scroll-animate scroll-animate-left" id="testimonial-form">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-3"></span>
              Share Your Thoughts
            </h3>
            <form onSubmit={handleTestimonialSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="testimonial-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="testimonial-name"
                    name="name"
                    value={testimonialForm.name}
                    onChange={handleTestimonialChange}
                    required
                    className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="testimonial-role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role (Optional)
                  </label>
                  <input
                    type="text"
                    id="testimonial-role"
                    name="role"
                    value={testimonialForm.role}
                    onChange={handleTestimonialChange}
                    className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm"
                    placeholder="Your role/title"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="testimonial-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Testimonial *
                </label>
                <textarea
                  id="testimonial-message"
                  name="message"
                  value={testimonialForm.message}
                  onChange={handleTestimonialChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-cyan-200/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm text-sm"
                  placeholder="Share your thoughts about the projects or collaboration..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-200/50 text-sm"
              >
                <FaPaperPlane className="text-sm" />
                Submit Testimonial
              </button>
            </form>
          </div>

          {/* Display Testimonials */}
          <div className="space-y-6 scroll-animate scroll-animate-right" id="testimonials-display">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
              What People Say
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {testimonials.map((testimonial) => {
                // Function to get avatar icon based on role/avatar type
                const getAvatarIcon = (avatar, role) => {
                  if (avatar === "developer" || role?.toLowerCase().includes("developer")) {
                    return <FaUser className="text-cyan-600" />;
                  } else if (avatar === "scientist" || role?.toLowerCase().includes("scientist")) {
                    return <FaBrain className="text-purple-600" />;
                  } else {
                    return <FaUser className="text-gray-600" />;
                  }
                };

                return (
                  <div 
                    key={testimonial.id}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center">
                        {getAvatarIcon(testimonial.avatar, testimonial.role)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                          </div>
                          <span className="text-xs text-gray-400">{testimonial.timestamp}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-light">
                          "{testimonial.message}"
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mb-16 scroll-animate" id="call-to-action">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-100/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              I'm always excited to work on projects that combine mathematics and technology. 
              Let's create something amazing together!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-200/50">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
