import React from 'react';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HealthGuard',
      subtitle: 'A Secured Diagnostic System',
      description: 'Advanced machine learning system that predicts multiple diseases including diabetes, liver disease, kidney disease, and cancer with high accuracy using a clean and intuitive frontend interface.',
      tech: ['Machine Learning', 'Streamlit', 'Python'],
      github: 'https://github.com/bhavyanshu-051/Multiple-Disease-Prediction-System',
      icon: <Database className="text-green-600" size={24} />,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Diabetes Prediction System',
      subtitle: 'ML-Based Health Predictor',
      description: 'Intelligent system using machine learning algorithms to predict diabetes risk based on patient data, providing accurate health assessments for preventive care.',
      tech: ['Python', 'Machine Learning', 'Data Science'],
      github: 'https://github.com/bhavyanshu-051/diabetes-prediction',
      icon: <Code className="text-blue-600" size={24} />,
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Car Rental System',
      subtitle: 'Vehicle Management Platform',
      description: 'Comprehensive car rental management system built with Java, featuring inventory management, booking system, and detailed vehicle information for seamless rental operations.',
      tech: ['Java', 'Object-Oriented Programming', 'System Design'],
      github: 'https://github.com/bhavyanshu-051/Car-rental',
      icon: <Database className="text-orange-600" size={24} />,
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'BMI Calculator',
      subtitle: 'Health Assessment Tool',
      description: 'Simple yet effective BMI calculator with clean user interface, providing instant health assessments and recommendations based on calculated BMI values.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bhavyanshu-051/BMI-Calculator',
      icon: <Globe className="text-teal-600" size={24} />,
      gradient: 'from-teal-400 to-green-500'
    },
    {
      title: 'Interactive Animation',
      subtitle: 'Creative Web Animation',
      description: 'Engaging web animation where a character\'s head dynamically follows cursor movement, demonstrating advanced CSS animations and JavaScript interactivity.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bhavyanshu-051/Animation-using-HTML-CSS-and-JavaScript',
      icon: <Code className="text-purple-600" size={24} />,
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-full text-white`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-blue-600 font-semibold">{project.subtitle}</p>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Github className="text-gray-600 hover:text-blue-600" size={20} />
                </a>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg flex-1 justify-center"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex-1 justify-center">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-blue-100 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a
              href="https://github.com/bhavyanshu-051"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>Visit GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;