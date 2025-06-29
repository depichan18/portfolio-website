import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState({});
  const intervalRefs = useRef({});
  
  // State for testimonials
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Developer",
      message: "Amazing mathematical approach to problem solving! The projects show great attention to detail and innovative thinking.",
      avatar: "👨‍💻",
      timestamp: new Date().toLocaleDateString()
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Data Scientist",
      message: "Impressive combination of mathematics and programming. The Hill Cipher implementation was particularly well-documented.",
      avatar: "👩‍🔬",
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
        avatar: "👤",
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
      title: "Hill Cipher Encryption",
      description: "Simple Hill cipher encryption implementation using matrix operations (n×n) that can read and process .txt files. Built with mathematical concepts from Linear Algebra course.",
      detailedDescription: "A comprehensive implementation of the Hill Cipher algorithm using matrix operations. This project demonstrates advanced mathematical concepts including modular arithmetic, matrix multiplication, and inverse matrix calculations. The application can handle files of various sizes and supports both encryption and decryption processes.",
      category: "academic",
      tags: ["Python", "Jupyter Notebook", "Linear Algebra", "Matrix Operations"],
      gradientColor: "from-cyan-400 to-teal-400",
      icon: "🔐",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400", 
        "/api/placeholder/600/400"
      ],
      features: [
        "Matrix-based encryption/decryption",
        "File processing capabilities",
        "Mathematical visualization",
        "Interactive Jupyter interface"
      ]
    },
    {
      id: 2,
      title: "Paw Jump Game",
      description: "Creative and cute endless jumping game developed in Java Swing. Features smooth gameplay mechanics and adorable graphics. Created for Algorithm and Computer Programming 2 course.",
      detailedDescription: "An engaging endless jumping game featuring cute animal characters. Built with Java Swing, it showcases object-oriented programming principles, collision detection algorithms, and smooth animation techniques. The game includes scoring systems, power-ups, and progressively challenging levels.",
      category: "academic",
      tags: ["Java", "Java Swing", "Game Development", "OOP"],
      gradientColor: "from-cyan-400 to-green-400",
      icon: "🐾",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Smooth character animations",
        "Dynamic obstacle generation",
        "Score tracking system",
        "Power-up mechanics"
      ]
    },
    {
      id: 3,
      title: "FSA Diagram Generator",
      description: "Finite State Automata diagram generator that creates DFA and NFA diagrams with transition tables. Input your information and get beautiful state transition diagrams automatically.",
      detailedDescription: "An advanced tool for generating finite state automata diagrams with professional-quality output. Supports both DFA and NFA creation, automatic layout optimization, and export capabilities. Essential for computer science students studying formal languages and automata theory.",
      category: "academic",
      tags: ["Python", "Jupyter Notebook", "Discrete Mathematics", "Automata Theory"],
      gradientColor: "from-green-400 to-green-400",
      icon: "🔄",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "DFA and NFA support",
        "Automatic diagram layout",
        "Transition table generation",
        "Export to multiple formats"
      ]
    },
    {
      id: 4,
      title: "GUI Cashier System",
      description: "Interactive cashier application with graphical user interface built using JOptionPane. Features transaction processing and user-friendly design for basic point-of-sale operations.",
      detailedDescription: "A complete point-of-sale system with intuitive GUI design. Features include inventory management, transaction processing, receipt generation, and sales reporting. Built with Java Swing and demonstrates database integration and user interface design principles.",
      category: "academic",
      tags: ["Java", "GUI", "JOptionPane"],
      gradientColor: "from-green-400 to-green-400",
      icon: "💰",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Transaction processing",
        "Inventory management",
        "Receipt generation",
        "Sales reporting"
      ]
    },
    {
      id: 5,
      title: "OMITS Math Problems",
      description: "Mathematical olympiad questions designed for primary school level as part of OMITS 18 committee work. Creative and educational problems to challenge young mathematical minds.",
      detailedDescription: "A curated collection of mathematical olympiad problems specifically designed for elementary students. Each problem is crafted to develop logical thinking, problem-solving skills, and mathematical intuition. Includes detailed solutions and teaching notes for educators.",
      category: "committee",
      tags: ["LaTeX", "Mathematics", "Education", "Problem Design"],
      gradientColor: "from-purple-400 to-cyan-400",
      icon: "🧮",
      link: "#",
      github: "#",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Age-appropriate difficulty",
        "Step-by-step solutions",
        "Educational value focus",
        "Professional LaTeX formatting"
      ]
    },
    {
      id: 6,
      title: "LaTeX Academic Documents",
      description: "Collection of beautifully formatted evaluation questions and solutions for various mathematics subjects. Written in LaTeX for professional academic documentation.",
      detailedDescription: "Professional academic documentation system using LaTeX for creating examination papers, solution manuals, and educational materials. Features automated formatting, mathematical notation support, and consistent styling across all documents.",
      category: "personal",
      tags: ["LaTeX", "Academic Writing", "Mathematics"],
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
        "Professional formatting",
        "Mathematical notation",
        "Automated styling",
        "Multi-document support"
      ]
    },
    {
      id: 7,
      title: "Kuromi To-Do List",
      description: "Simple and cute to-do list application made with Electron.js featuring Kuromi theme and interactive design. Includes a calendar view to track your tasks and deadlines with an adorable user interface.",
      detailedDescription: "A delightful productivity application built with Electron.js featuring the beloved Kuromi character theme. Combines functionality with aesthetic appeal, offering task management, calendar integration, deadline tracking, and motivational features to make productivity enjoyable.",
      category: "personal",
      tags: ["Electron.js", "JavaScript", "HTML/CSS", "Calendar"],
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
        "Cute Kuromi theme",
        "Calendar integration",
        "Deadline reminders",
        "Cross-platform support"
      ]
    }
  ];

  // Filter categories for easy management
  const categories = {
    all: "All Projects",
    academic: "Academic",
    personal: "Personal", 
    committee: "Committee"
  };

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    }, 2500); // Change slide every 2.5 seconds
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
    };
  }, []);

  // Debug effect to monitor slide changes
  useEffect(() => {
    console.log('Current slides state:', currentSlide);
  }, [currentSlide]);

  return (
    <div className="py-20 pt-32 px-6 relative overflow-hidden section-content">
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
        <div className="text-center mb-16">
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
        <div className="flex justify-center mb-12">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            const currentImageIndex = currentSlide[project.id] || 0;
            
            return (
              <div key={project.id} className="relative">
                {/* Placeholder div to maintain grid space when card is hovered */}
                <div className={`transition-all duration-500 ${isHovered ? 'h-[32rem]' : 'h-auto'}`}>
                  <div 
                    className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:border-cyan-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/25 overflow-hidden ${
                      isHovered 
                        ? 'absolute top-0 left-0 right-0 transform scale-110 z-30 shadow-2xl shadow-cyan-200/50' 
                        : 'relative'
                    }`}
                    style={{
                      transformOrigin: 'center top',
                      ...(isHovered && {
                        width: 'calc(100% + 2rem)',
                        marginLeft: '-1rem',
                        marginTop: '-0.5rem'
                      })
                    }}
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                  >
                    {/* Category Badge */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradientColor} z-10`}></div>
                    
                    {/* Image Slider - Only show when hovered */}
                    {isHovered && (
                      <div className="relative h-48 overflow-hidden">
                        <div 
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                          {project.images.map((image, index) => (
                            <div 
                              key={index}
                              className="w-full h-full flex-shrink-0 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center relative"
                            >
                              <div className="text-6xl opacity-30 animate-pulse">{project.icon}</div>
                              <div className="absolute inset-0 bg-black/20"></div>
                              <div className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                                Image {index + 1}
                              </div>
                              
                              {/* Auto-slide indicator */}
                              <div className="absolute top-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Auto
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Navigation Arrows - Updated with manual control */}
                        <button 
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            stopAutoSlide(project.id);
                            prevSlide(project.id);
                            // Restart auto-slide after manual navigation
                            setTimeout(() => startAutoSlide(project.id), 1000);
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        >
                          ←
                        </button>
                        <button 
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            stopAutoSlide(project.id);
                            nextSlide(project.id);
                            // Restart auto-slide after manual navigation
                            setTimeout(() => startAutoSlide(project.id), 1000);
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        >
                          →
                        </button>
                        
                        {/* Slide Indicators - Updated with manual control */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                stopAutoSlide(project.id);
                                goToSlide(project.id, index);
                                // Restart auto-slide after manual navigation
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
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                          <div 
                            key={`progress-${project.id}-${currentImageIndex}`}
                            className="h-full bg-gradient-to-r from-cyan-400 to-teal-400"
                            style={{
                              animation: 'slideProgress 2.5s linear forwards'
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className={`p-8 ${isHovered ? 'pt-4' : ''}`}>
                      {/* Category Tag and Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${project.gradientColor}`}>
                          {project.category}
                        </span>
                        {!isHovered && (
                          <div className="text-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                            {project.icon}
                          </div>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Project Description - Switch between short and detailed when hovered */}
                      <p className={`text-gray-600 text-sm leading-relaxed mb-6 font-light ${
                        isHovered ? '' : 'line-clamp-4'
                      }`}>
                        {isHovered ? project.detailedDescription : project.description}
                      </p>

                      {/* Features List - Only show when hovered */}
                      {isHovered && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index} className="text-xs text-gray-600 flex items-center">
                                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg border border-gray-200/50 group-hover:bg-cyan-50 group-hover:text-cyan-800 group-hover:border-cyan-200/50 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a 
                          href={project.link}
                          className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-200/50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>🚀</span>
                          View Project
                        </a>
                        {project.github && (
                          <a 
                            href={project.github}
                            className="flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                          >
                            📁
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
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

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Testimonial Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-100/50 shadow-lg">
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
                <span>💬</span>
                Submit Testimonial
              </button>
            </form>
          </div>

          {/* Display Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
              What People Say
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
