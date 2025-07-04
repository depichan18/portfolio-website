import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-20 pt-32 bg-gradient-to-br from-white via-cyan-200 via-blue-300 to-teal-800 relative overflow-hidden section-content">
      {/* Main Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 via-blue-200 to-teal-700 opacity-85 animate-gradient-flow"></div>
      
      {/* Live Animated Gradient Layers */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.3) 0%, transparent 60%),
            radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.25) 0%, transparent 45%)
          `,
          animation: 'gradientOrbit 20s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            linear-gradient(45deg, rgba(255, 255, 255, 0.3) 0%, transparent 25%, rgba(6, 182, 212, 0.2) 50%, transparent 75%, rgba(20, 184, 166, 0.25) 100%)
          `,
          animation: 'gradientRipple 15s ease-in-out infinite reverse'
        }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.1) 0deg, transparent 90deg, rgba(20, 184, 166, 0.15) 180deg, transparent 270deg, rgba(14, 165, 233, 0.1) 360deg)
          `,
          animation: 'gradientSpin 30s linear infinite'
        }}
      ></div>

      <style jsx>{`
        @keyframes gradientFlow {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.05) translate(-10px, 10px);
            opacity: 0.7;
          }
        }
        
        @keyframes gradientOrbit {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            transform: rotate(180deg) scale(0.9);
          }
          75% {
            transform: rotate(270deg) scale(1.05);
          }
        }
        
        @keyframes gradientRipple {
          0%, 100% {
            transform: translateY(0) scaleY(1);
          }
          50% {
            transform: translateY(-20px) scaleY(1.1);
          }
        }
        
        @keyframes gradientSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient-flow {
          animation: gradientFlow 12s ease-in-out infinite;
        }
      `}</style>
      
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-blue-200/50 font-light animate-pulse">∑</div>
        <div className="absolute top-40 right-20 text-5xl text-cyan-200/40 font-light animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>∫</div>
        <div className="absolute bottom-40 left-20 text-4xl text-blue-300/60 font-light animate-pulse" style={{animationDelay: '2s'}}>π</div>
        <div className="absolute bottom-20 right-32 text-7xl text-white/30 font-light animate-spin" style={{animationDelay: '0.5s', animationDuration: '8s'}}>∞</div>
        <div className="absolute top-60 left-1/2 text-3xl text-cyan-300/40 font-light animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4s'}}>θ</div>
        <div className="absolute top-32 left-1/3 text-2xl text-blue-200/50 font-light animate-pulse" style={{animationDelay: '3s'}}>∂</div>
        <div className="absolute bottom-60 right-1/3 text-5xl text-white/40 font-light animate-bounce" style={{animationDelay: '2.5s', animationDuration: '3.5s'}}>√</div>
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
            Passionate about mathematics, logic, and the intersection with financial technology
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
                Second-year <span className="text-blue-600 font-semibold">Mathematics</span> student at <span className="text-teal-600 font-semibold">Institut Teknologi Sepuluh Nopember (ITS)</span> who deeply loves <span className="text-green-600 font-semibold">mathematics, logic, and problem solving</span>. Currently active in <span className="text-blue-700 font-semibold">OMITS 18</span> (ITS National Mathematics Olympiad) as a <span className="text-green-600 font-semibold">question maker</span> for primary school level.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-light">
                Active in campus organizations including <span className="text-teal-600 font-semibold">UKM IFLS</span> (ITS Foreign Language Society) in the <span className="text-blue-600 font-semibold">SRD</span> (Student Resource Development) division, 
                and <span className="text-green-700 font-semibold">MPA ITS</span> as <span className="text-blue-700 font-semibold">Secretary and Treasurer</span> of the External Division.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Passionate about <span className="text-green-600 font-semibold">financial mathematical modeling</span> with <span className="text-blue-600 font-semibold">AI technology</span> (machine learning & deep learning). 
                Interested in pursuing careers as a <span className="text-teal-700 font-semibold">quant, quantitative researcher, trading analyst, or data analyst</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-100/30 hover:border-cyan-200/50 transition-all duration-300 group shadow-lg">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h4 className="font-semibold text-gray-800 text-sm">OMITS 18</h4>
                <p className="text-xs text-gray-600 font-light">Question Maker</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100/30 hover:border-teal-200/50 transition-all duration-300 group shadow-lg">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h4 className="font-semibold text-gray-800 text-sm">UKM IFLS</h4>
                <p className="text-xs text-gray-600 font-light">SRD Division</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100/30 hover:border-blue-200/50 transition-all duration-300 group shadow-lg">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">💼</div>
                <h4 className="font-semibold text-gray-800 text-sm">MPA ITS</h4>
                <p className="text-xs text-gray-600 font-light">Secretary & Treasurer</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100/30 hover:border-green-200/50 transition-all duration-300 group shadow-lg">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📈</div>
                <h4 className="font-semibold text-gray-800 text-sm">Financial AI</h4>
                <p className="text-xs text-gray-600 font-light">Research Interest</p>
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
    </div>
  );
};

export default About;
