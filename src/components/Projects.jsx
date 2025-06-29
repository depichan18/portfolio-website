import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Projects data - easily add new projects here
  const projects = [
    {
      id: 1,
      title: "Hill Cipher Encryption",
      description: "Simple Hill cipher encryption implementation using matrix operations (n×n) that can read and process .txt files. Built with mathematical concepts from Linear Algebra course.",
      category: "academic",
      tags: ["Python", "Jupyter Notebook", "Linear Algebra", "Matrix Operations"],
      gradientColor: "from-cyan-400 to-teal-400",
      icon: "🔐",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Paw Jump Game",
      description: "Creative and cute endless jumping game developed in Java Swing. Features smooth gameplay mechanics and adorable graphics. Created for Algorithm and Computer Programming 2 course.",
      category: "academic",
      tags: ["Java", "Java Swing", "Game Development", "OOP"],
      gradientColor: "from-cyan-400 to-green-400",
      icon: "🐾",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "FSA Diagram Generator",
      description: "Finite State Automata diagram generator that creates DFA and NFA diagrams with transition tables. Input your information and get beautiful state transition diagrams automatically.",
      category: "academic",
      tags: ["Python", "Jupyter Notebook", "Discrete Mathematics", "Automata Theory"],
      gradientColor: "from-green-400 to-green-400",
      icon: "🔄",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "GUI Cashier System",
      description: "Interactive cashier application with graphical user interface built using JOptionPane. Features transaction processing and user-friendly design for basic point-of-sale operations.",
      category: "academic",
      tags: ["Java", "GUI", "JOptionPane"],
      gradientColor: "from-green-400 to-green-400",
      icon: "💰",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "OMITS Math Problems",
      description: "Mathematical olympiad questions designed for primary school level as part of OMITS 18 committee work. Creative and educational problems to challenge young mathematical minds.",
      category: "committee",
      tags: ["LaTeX", "Mathematics", "Education", "Problem Design"],
      gradientColor: "from-purple-400 to-cyan-400",
      icon: "🧮",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "LaTeX Academic Documents",
      description: "Collection of beautifully formatted evaluation questions and solutions for various mathematics subjects. Written in LaTeX for professional academic documentation.",
      category: "personal",
      tags: ["LaTeX", "Academic Writing", "Mathematics"],
      gradientColor: "from-cyan-400 to-cyan-400",
      icon: "📄",
      link: "#",
      github: "#"
    },
    {
      id: 7,
      title: "Kuromi To-Do List",
      description: "Simple and cute to-do list application made with Electron.js featuring Kuromi theme and interactive design. Includes a calendar view to track your tasks and deadlines with an adorable user interface.",
      category: "personal",
      tags: ["Electron.js", "JavaScript", "HTML/CSS", "Calendar"],
      gradientColor: "from-pink-400 to-purple-400",
      icon: "🖤",
      link: "#",
      github: "#"
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

  return (
    <section id="projects" className="py-20 pt-32 px-6 bg-gradient-to-br from-white via-blue-50/20 to-green-50/20 relative overflow-hidden">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:border-cyan-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/25 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Category Badge */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradientColor}`}></div>
              
              <div className="p-8">
                {/* Category Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${project.gradientColor}`}>
                    {project.category}
                  </span>
                  <div className="text-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light line-clamp-4">
                  {project.description}
                </p>

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

                {/* Action Button */}
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-200/50"
                  >
                    <span>�</span>
                    View Project
                  </a>
                  {project.github && (
                    <a 
                      href={project.github}
                      className="flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
                    >
                      📁
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
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
    </section>
  );
};

export default Projects;
