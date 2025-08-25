import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {/* Experience Card */}
            <div className="relative flex items-start space-x-6 pb-12">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Engineer</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">LTI Mindtree</h4>
                  </div>
                  <div className="flex flex-col lg:text-right space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-2" size={16} />
                      <span className="text-sm">Offer Received</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-2" size={16} />
                      <span className="text-sm">Awaiting Joining</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Excited to begin my professional journey with LTI Mindtree as a Software Engineer. 
                      Ready to contribute to impactful projects and apply my technical skills in real-world scenarios.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-2">Goals & Aspirations</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Design scalable software solutions</li>
                        <li>• Collaborate with cross-functional teams</li>
                        <li>• Contribute to business growth</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-2">Focus Areas</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Full-stack development</li>
                        <li>• System architecture</li>
                        <li>• Code quality & best practices</li>
                      </ul>
                    </div>
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

export default Experience;