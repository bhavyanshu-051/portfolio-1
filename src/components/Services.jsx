import React from 'react';
import { Monitor, Smartphone, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="text-blue-600" size={48} />,
      title: 'Web Development',
      description: 'Creating responsive and user-friendly web applications with modern frameworks and clean architecture.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: <Smartphone className="text-green-600" size={48} />,
      title: 'Frontend Development',
      description: 'Building interactive and engaging user interfaces using React JS and modern web technologies.',
      features: ['React JS', 'Interactive Components', 'State Management', 'Modern CSS']
    },
    {
      icon: <Zap className="text-yellow-600" size={48} />,
      title: 'Full-Stack Solutions',
      description: 'Developing complete web solutions from database design to user interface implementation.',
      features: ['End-to-end Development', 'Database Design', 'API Integration', 'System Architecture']
    },
    {
      icon: <Shield className="text-purple-600" size={48} />,
      title: 'Secure Applications',
      description: 'Building secure and scalable applications with focus on data protection and system reliability.',
      features: ['Security Best Practices', 'Data Validation', 'Error Handling', 'Performance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Specialized in creating innovative solutions that combine technical excellence with creative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;