import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Mathematical Calculator",
      description: "A comprehensive calculator for advanced mathematical operations including calculus, linear algebra, and statistical functions.",
      detailedDescription: "Built with React and Math.js, this calculator handles complex mathematical computations, derivatives, integrals, matrix operations, and statistical analysis with an intuitive user interface.",
      tech: ["JavaScript", "React", "Math.js"],
      color: "from-cyan-500 to-blue-500",
      emoji: "🧮"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization tool for sorting algorithms and data structures to help students understand mathematical concepts.",
      detailedDescription: "An educational platform that visualizes sorting algorithms, graph traversals, and data structures in real-time. Perfect for understanding algorithm complexity and behavior patterns.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      color: "from-teal-500 to-green-500",
      emoji: "🧠"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with mathematical design elements.",
      detailedDescription: "A clean, mathematical-themed portfolio built with React and Tailwind CSS. Features smooth animations, responsive design, and an elegant mathematical aesthetic.",
      tech: ["React", "Tailwind CSS", "Vite"],
      color: "from-blue-500 to-teal-500",
      emoji: "🌐"
    }
  ];

  return (
    <section id="projects" className="py-20 pt-32 px-6 bg-gradient-to-br from-white via-blue-50/20 to-green-50/20 relative overflow-hidden">
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 text-8xl text-blue-100/20 font-light transform rotate-12">∇</div>
        <div className="absolute top-48 right-20 text-6xl text-cyan-100/30 font-light">⊕</div>
        <div className="absolute bottom-32 left-32 text-7xl text-teal-100/25 font-light">∏</div>
        <div className="absolute bottom-48 right-16 text-5xl text-green-100/35 font-light">∂</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 hover:border-cyan-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100/25 overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Mathematical Symbol */}
              <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {project.emoji}
              </div>
              
              <div className="relative z-10">
                {/* Project Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                  {project.emoji}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                  {hoveredProject === index ? project.detailedDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg border border-gray-200/50 group-hover:bg-cyan-50 group-hover:text-cyan-800 group-hover:border-cyan-200/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-200/50">
                    📱
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 hover:scale-105">
                    🔗
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
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
