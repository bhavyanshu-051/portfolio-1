import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech CSE',
      institution: 'Graphic Era Hill University, Dehradun',
      score: 'CGPA 7.15/10',
      period: '2021 - 2025'
    },
    {
      degree: '12th CBSE',
      institution: 'St John\'s Sr Sec School, Meerut',
      score: '74.16%',
      period: '2019 - 2021'
    },
    {
      degree: '10th ICSE',
      institution: 'St Francis Convent School, Meerut',
      score: '78%',
      period: '2017 - 2019'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                As a software engineer, I aim to design and build efficient, scalable, and secure software solutions that drive business growth. I strive to deliver high-quality products, expand my technical skills, and collaborate effectively with teams to support the company's long-term objectives.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                My goal is to grow within the company, take on increasing responsibilities, and contribute to its future success while continuously learning and adapting to new technologies.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={32} />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-gradient-to-b from-blue-500 to-purple-500"
                  style={{
                    borderImage: 'linear-gradient(to bottom, #3B82F6, #8B5CF6) 1'
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                  <p className="text-green-600 font-semibold">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;