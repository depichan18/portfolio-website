import React, { useState, useEffect, useRef } from 'react';
import { 
  SiPython, SiNumpy, SiPandas, SiJupyter, SiScikitlearn,
  SiJavascript, SiReact, SiHtml5, SiCss3, SiGit,
  SiLatex, SiElectron
} from 'react-icons/si';
import { 
  FaJava, FaChartLine, FaCalculator, FaChartBar, FaChartPie,
  FaPercentage, FaBalanceScale, FaCog, FaRobot, FaDatabase
} from 'react-icons/fa';
import { 
  BiMath, BiLineChart, BiTrendingUp, BiStats, BiAnalyse 
} from 'react-icons/bi';
import { 
  MdTrendingUp, MdAnalytics, MdTimeline, MdPieChart, MdShowChart
} from 'react-icons/md';
import { 
  RiStockLine, RiExchangeLine, RiFunctionLine, RiBarChartBoxLine
} from 'react-icons/ri';

const About = () => {
  // Hook untuk animasi scroll
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);
  
  // State untuk carousel sertifikat
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  
  // Data sertifikat
  const certifications = [
    {
      id: 1,
      title: "Python Programming",
      subtitle: "Codedex",
      image: "/portfolio-website/images/python-certificate.png",
      color: "from-blue-100 to-cyan-100",
      borderColor: "border-blue-200/50 hover:border-blue-300/70",
      textColor: "text-blue-600",
      emoji: "�"
    },
    {
      id: 2,
      title: "Machine Learning",
      subtitle: "Educative.io",
      image: "/portfolio-website/images/ML-certificate.png",
      color: "from-green-100 to-teal-100",
      borderColor: "border-green-200/50 hover:border-green-300/70",
      textColor: "text-green-600",
      emoji: "🤖"
    },
    {
      id: 3,
      title: "Java Programming",
      subtitle: "JetBrains",
      image: "/portfolio-website/images/java-certifacate.webp",
      color: "from-red-100 to-orange-100",
      borderColor: "border-red-200/50 hover:border-red-300/70",
      textColor: "text-red-600",
      emoji: "☕"
    },
    {
      id: 4,
      title: "Data Science",
      subtitle: "Coursera",
      image: "/portfolio-website/images/python-certificate.png",
      color: "from-purple-100 to-pink-100",
      borderColor: "border-purple-200/50 hover:border-purple-300/70",
      textColor: "text-purple-600",
      emoji: "📊"
    },
    {
      id: 5,
      title: "Financial Mathematics",
      subtitle: "MIT OpenCourseWare",
      image: "/portfolio-website/images/ML-certificate.png",
      color: "from-orange-100 to-yellow-100",
      borderColor: "border-orange-200/50 hover:border-orange-300/70",
      textColor: "text-orange-600",
      emoji: "🎯"
    },
    {
      id: 6,
      title: "Quantitative Analysis",
      subtitle: "Professional",
      image: "/portfolio-website/images/java-certifacate.webp",
      color: "from-indigo-100 to-purple-100",
      borderColor: "border-indigo-200/50 hover:border-indigo-300/70",
      textColor: "text-indigo-600",
      emoji: "📈"
    }
  ];
  
  // Fungsi navigasi carousel (tidak diperlukan untuk 3 sertifikat)
  const nextCert = () => {
    setCurrentCertIndex((prev) => 
      prev + 2 >= certifications.length ? 0 : prev + 2
    );
  };
  
  const prevCert = () => {
    setCurrentCertIndex((prev) => 
      prev - 2 < 0 ? Math.max(0, certifications.length - 2) : prev - 2
    );
  };
  
  // Mendapatkan 3 sertifikat untuk ditampilkan
  const visibleCertifications = certifications.slice(currentCertIndex, currentCertIndex + 2);

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

  return (
    <div id="about" className="min-h-screen py-20 pt-32 bg-gradient-to-br from-white via-cyan-50 to-teal-800 relative overflow-hidden section-content">
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
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleElements.has('about-header') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          data-animate-id="about-header"
        >
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
            <div 
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-100/50 shadow-lg transition-all duration-1000 delay-200 ${
                visibleElements.has('about-journey') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              data-animate-id="about-journey"
            >
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
                Passionate about <span className="text-green-600 font-semibold">quantitative finance and financial mathematical modeling</span> with <span className="text-blue-600 font-semibold">AI technology</span> (machine learning & deep learning). 
                Aspiring <span className="text-teal-700 font-semibold">Quantitative Researcher</span> with strong foundation in <span className="text-purple-600 font-semibold">Python programming</span> and data analysis libraries.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Experienced with <span className="text-blue-600 font-semibold">Python ecosystem</span> including <span className="text-green-600 font-semibold">NumPy</span>, <span className="text-orange-600 font-semibold">Pandas</span>, <span className="text-purple-600 font-semibold">Matplotlib</span>, <span className="text-teal-600 font-semibold">Seaborn</span>, and other data science libraries for quantitative analysis and financial modeling.
              </p>
            </div>

            <div 
              className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
                visibleElements.has('about-activities') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              data-animate-id="about-activities"
            >
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-100/30 hover:border-cyan-200/50 transition-all duration-300 group shadow-lg">
                <div className="w-14 h-14 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/portfolio-website/images/omits.png" 
                    alt="OMITS Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-3xl hidden">🏆</div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">OMITS 18</h4>
                <p className="text-xs text-gray-600 font-light">Question Maker</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-100/30 hover:border-teal-200/50 transition-all duration-300 group shadow-lg">
                <div className="w-14 h-14 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/portfolio-website/images/ifls.png" 
                    alt="IFLS Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-3xl hidden">🌐</div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">UKM IFLS</h4>
                <p className="text-xs text-gray-600 font-light">SRD Division</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100/30 hover:border-blue-200/50 transition-all duration-300 group shadow-lg">
                <div className="w-14 h-14 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/portfolio-website/images/mpa.png" 
                    alt="MPA Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-3xl hidden">💼</div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">MPA ITS</h4>
                <p className="text-xs text-gray-600 font-light">Secretary & Treasurer External</p>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100/30 hover:border-green-200/50 transition-all duration-300 group shadow-lg">
                <div className="w-14 h-14 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/portfolio-website/images/quant.png" 
                    alt="Quantitative Finance Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-3xl hidden">📈</div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">Financial AI</h4>
                <p className="text-xs text-gray-600 font-light">Research Interest</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div 
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-100/50 shadow-lg transition-all duration-1000 delay-500 ${
                visibleElements.has('about-certifications') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              data-animate-id="about-certifications"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                  Certifications
                </h3>
                
                {/* Navigation buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevCert}
                    className="w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-all duration-200 hover:scale-110 disabled:opacity-50"
                    disabled={certifications.length <= 3}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={nextCert}
                    className="w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-all duration-200 hover:scale-110 disabled:opacity-50"
                    disabled={certifications.length <= 3}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {visibleCertifications.map((cert, index) => (
                  <div 
                    key={cert.id}
                    className={`transition-all duration-1000 ${
                      visibleElements.has('about-certifications') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className={`aspect-[4/3] bg-gradient-to-br ${cert.color} rounded-xl border ${cert.borderColor} transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden shadow-lg`}>
                        <img 
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-full h-full bg-gradient-to-br ${cert.color} absolute inset-0 flex items-center justify-center ${cert.textColor}`} style={{display: 'none'}}>
                          <div className="text-center">
                            <div className="text-3xl mb-2">{cert.emoji}</div>
                            <p className="text-sm font-medium">{cert.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-gray-800">{cert.title}</p>
                        <p className="text-xs text-gray-600">{cert.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Page indicator */}
              {certifications.length > 2 && (
                <div className="flex justify-center mt-4 gap-2">
                  {Array.from({ length: Math.ceil(certifications.length / 2) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentCertIndex(i * 2)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        Math.floor(currentCertIndex / 2) === i 
                          ? 'bg-purple-500 scale-125' 
                          : 'bg-purple-200 hover:bg-purple-300'
                      }`}
                    />
                  ))}
                </div>
              )}

            </div>

            <div 
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-100/50 shadow-lg transition-all duration-1000 delay-700 ${
                visibleElements.has('about-skills') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              data-animate-id="about-skills"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
                Skills & Knowledge
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-700 mb-3 flex items-center">
                    <SiPython className="text-lg mr-2 text-blue-600" />
                    Python for Quantitative Analysis
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'NumPy', icon: SiNumpy, color: 'text-blue-600' },
                      { name: 'Pandas', icon: SiPandas, color: 'text-purple-600' },
                      { name: 'Matplotlib', icon: FaChartLine, color: 'text-orange-600' },
                      { name: 'Seaborn', icon: BiLineChart, color: 'text-teal-600' },
                      { name: 'SciPy', icon: FaCalculator, color: 'text-blue-700' },
                      { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-500' },
                      { name: 'QuantLib', icon: BiMath, color: 'text-green-600' },
                      { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-400' },
                      { name: 'YFinance', icon: FaChartLine, color: 'text-green-500' }
                    ].map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <span key={skill.name} className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 rounded-lg text-sm font-medium border border-purple-200/50 hover:border-purple-300/70 transition-all duration-200 hover:scale-105 flex items-center gap-1.5">
                          <IconComponent className={`text-sm ${skill.color}`} />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <FaChartBar className="text-lg mr-2 text-blue-600" />
                    Quantitative Finance Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Financial Modeling', icon: MdAnalytics, color: 'text-blue-600' },
                      { name: 'Risk Management', icon: FaBalanceScale, color: 'text-red-600' },
                      { name: 'Portfolio Optimization', icon: FaChartPie, color: 'text-green-600' },
                      { name: 'Time Series Analysis', icon: MdTimeline, color: 'text-purple-600' },
                      { name: 'Derivatives Pricing', icon: RiStockLine, color: 'text-orange-600' },
                      { name: 'Algorithmic Trading', icon: FaRobot, color: 'text-cyan-600' },
                      { name: 'Market Data Analysis', icon: BiAnalyse, color: 'text-teal-600' }
                    ].map((interest) => {
                      const IconComponent = interest.icon;
                      return (
                        <span key={interest.name} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200/50 hover:border-blue-300/70 transition-all duration-200 hover:scale-105 flex items-center gap-1.5">
                          <IconComponent className={`text-sm ${interest.color}`} />
                          {interest.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-700 mb-3 flex items-center">
                    <span className="text-sm mr-2">{'{ }'}</span>
                    Programming & Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Python', icon: SiPython, color: 'text-blue-600' },
                      { name: 'Java', icon: FaJava, color: 'text-red-600' },
                      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
                      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
                      { name: 'HTML', icon: SiHtml5, color: 'text-orange-600' },
                      { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
                      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
                      { name: 'Electron', icon: SiElectron, color: 'text-teal-600' },
                      { name: 'LaTeX', icon: SiLatex, color: 'text-green-600' }
                    ].map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <span key={skill.name} className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-800 rounded-lg text-sm font-medium border border-cyan-200/50 hover:border-cyan-300/70 transition-all duration-200 hover:scale-105 flex items-center gap-1.5">
                          <IconComponent className={`text-sm ${skill.color}`} />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-teal-700 mb-3 flex items-center">
                    <BiMath className="text-lg mr-2 text-teal-600" />
                    Mathematics & Statistics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Calculus I & II', icon: RiFunctionLine, color: 'text-blue-600' },
                      { name: 'Linear Algebra', icon: BiMath, color: 'text-purple-600' },
                      { name: 'Statistics', icon: RiBarChartBoxLine, color: 'text-green-600' },
                      { name: 'Probability Theory', icon: FaPercentage, color: 'text-orange-600' },
                      { name: 'Discrete Math', icon: FaCog, color: 'text-cyan-600' },
                      { name: 'Analytical Geometry', icon: MdShowChart, color: 'text-red-600' },
                      { name: 'Stochastic Processes', icon: BiTrendingUp, color: 'text-indigo-600' }
                    ].map((area) => {
                      const IconComponent = area.icon;
                      return (
                        <span key={area.name} className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 rounded-lg text-sm font-medium border border-teal-200/50 hover:border-teal-300/70 transition-all duration-200 hover:scale-105 flex items-center gap-1.5">
                          <IconComponent className={`text-sm ${area.color}`} />
                          {area.name}
                        </span>
                      );
                    })}
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
