import React, { useState } from 'react';
import { Github, Linkedin, Mail, Instagram, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 pt-32 bg-gradient-to-br from-teal-50 via-cyan-100/40 to-blue-50/50 relative overflow-hidden">
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 text-7xl text-teal-100/25 font-light">∑</div>
        <div className="absolute top-56 right-16 text-6xl text-cyan-100/20 font-light">∮</div>
        <div className="absolute bottom-32 left-24 text-5xl text-blue-100/30 font-light">∇</div>
        <div className="absolute bottom-56 right-32 text-8xl text-green-100/15 font-light">∞</div>
        <div className="absolute top-1/2 left-1/3 text-4xl text-teal-100/25 font-light">λ</div>
        <div className="absolute top-1/4 right-1/4 text-3xl text-cyan-100/30 font-light">Ω</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Let's explore the possibilities where mathematics meets technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-cyan-100/50">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-3"></span>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-cyan-200/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-cyan-200/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-200/50"
              >
                <span className="text-xl">📧</span>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-teal-100/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3"></span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl text-cyan-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600 font-light">Surabaya, East Java, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl text-teal-600">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600 font-light">devi.rosa@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl text-blue-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600 font-light">+62 xxx-xxx-xxxx</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></span>
                Let's Connect
              </h3>
              
              <p className="text-gray-600 mb-6 font-light">
                Ready to collaborate on mathematical solutions or discuss exciting projects? 
                Feel free to reach out through any of these platforms!
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/devipichan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200/50 rounded-xl hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">GitHub</div>
                    <div className="text-sm text-gray-600">@devipichan</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </a>
                
                <a
                  href="https://linkedin.com/in/devi-rosa-aprilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-blue-200/50 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">LinkedIn</div>
                    <div className="text-sm text-gray-600">Devi Rosa Aprilla</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </a>
                
                <a
                  href="mailto:devi.rosa@example.com"
                  className="flex items-center gap-4 p-4 border border-teal-200/50 rounded-xl hover:border-teal-300 hover:bg-teal-50/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-teal-600 group-hover:text-teal-800" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">devi.rosa@example.com</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                </a>
                
                <a
                  href="https://instagram.com/devipichan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-pink-200/50 rounded-xl hover:border-pink-300 hover:bg-pink-50/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-5 h-5 text-pink-600 group-hover:text-pink-800" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Instagram</div>
                    <div className="text-sm text-gray-600">@devipichan</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-600" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 text-sm font-light">
                  🚀 Always excited to discuss mathematics, programming, and innovative projects!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2025 Devi Rosa Aprilla. Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
