import React from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={32} />,
      skills: ['Java', 'C++', 'Python'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Core Areas',
      icon: <Cpu className="text-purple-600" size={32} />,
      skills: ['DBMS', 'Operating Systems', 'Computer Organization'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="text-green-600" size={32} />,
      skills: ['React JS', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Tools & Frameworks',
      icon: <Database className="text-orange-600" size={32} />,
      skills: ['Streamlit', 'Machine Learning', 'Version Control'],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${85 + skillIndex * 5}%`,
                          animationDelay: `${index * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-blue-100 text-lg">
              Continuously expanding my skill set and staying updated with the latest technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;