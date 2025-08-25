import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Section */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Bhavyanshu 
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Srivastava
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-gray-700 mb-4 animate-fade-in-up animation-delay-500">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Software Engineer | Web Developer
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000">
                Designing scalable, efficient, and secure solutions for the future
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1500">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-8 animate-fade-in-up animation-delay-2000">
                <a
                  href="https://github.com/bhavyanshu-051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavyanshu-srivastava-b2b529221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:bhavyanshusrivastava@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative animate-fade-in-right">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <img
                  src="https://i.postimg.cc/mkbqVySy/IMG-1511.jpg"
                  alt="Bhavyanshu Srivastava"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;