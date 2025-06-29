import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 pt-32 bg-gradient-to-br from-blue-50 via-blue-100/40 to-indigo-50/50 relative overflow-hidden">
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-cyan-100/40 font-light">∑</div>
        <div className="absolute top-40 right-20 text-5xl text-teal-100/30 font-light">∫</div>
        <div className="absolute bottom-40 left-20 text-4xl text-blue-100/50 font-light">π</div>
        <div className="absolute bottom-20 right-32 text-7xl text-green-100/20 font-light">∞</div>
        <div className="absolute top-60 left-1/2 text-3xl text-cyan-100/30 font-light">θ</div>
        <div className="absolute top-32 left-1/3 text-2xl text-teal-100/40 font-light">∂</div>
        <div className="absolute bottom-60 right-1/3 text-5xl text-blue-100/30 font-light">√</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-4 relative">
              About Me
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Exploring the intersection of mathematics and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-100/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-3"></span>
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 font-light">
                Second-year Mathematics student at Institut Teknologi Sepuluh Nopember (ITS) Surabaya, 
                passionate about bridging mathematical theory with practical programming solutions.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                I believe mathematics provides the perfect foundation for computational thinking, 
                enabling elegant and efficient problem-solving approaches.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-100/30 hover:border-cyan-200/50 transition-all duration-300 group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📐</div>
                <h4 className="font-semibold text-gray-800 text-sm">Mathematics</h4>
                <p className="text-xs text-gray-600 font-light">ITS Surabaya</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100/30 hover:border-teal-200/50 transition-all duration-300 group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h4 className="font-semibold text-gray-800 text-sm">Programming</h4>
                <p className="text-xs text-gray-600 font-light">Self-taught</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-100/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
                Skills & Knowledge
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-700 mb-3 flex items-center">
                    <span className="text-sm mr-2">{'{ }'}</span>
                    Programming & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'JavaScript', 'HTML/CSS', 'React', 'Electron', 'Jupyter', 'LaTeX'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-800 rounded-lg text-sm font-medium border border-cyan-200/50 hover:border-cyan-300/70 transition-all duration-200 hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-teal-700 mb-3 flex items-center">
                    <span className="text-sm mr-2">∫</span>
                    Mathematics Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Calculus I & II', 'Linear Algebra', 'Mathematical Logic', 'Discrete Math', 'Statistics', 'Analytical Geometry', 'Algorithms'].map((area) => (
                      <span key={area} className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 rounded-lg text-sm font-medium border border-teal-200/50 hover:border-teal-300/70 transition-all duration-200 hover:scale-105">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <span className="text-sm mr-2">∞</span>
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Web Development', 'Data Analysis', 'Algorithm Design', 'Mathematical Modeling'].map((interest) => (
                      <span key={interest} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200/50 hover:border-blue-300/70 transition-all duration-200 hover:scale-105">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
