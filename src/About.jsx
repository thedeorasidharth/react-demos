import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { BookOpen, Users, Target, Award } from 'lucide-react';
import { Link } from "react-router-dom";

function About() {
  const { theme } = useContext(ThemeContext);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Our Story",
      description: "Building innovative solutions with passion and dedication"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      description: "Talented individuals working together towards common goals"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To create technology that makes a difference in people's lives"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Values",
      description: "Excellence, innovation, and integrity in everything we do"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slideIn">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About MarwadTech
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We're passionate about creating cutting-edge technology solutions that transform the way people work and live.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl animate-slideIn ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500' 
                  : 'bg-white shadow-lg border-gray-200 hover:border-indigo-400 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className={`rounded-3xl p-8 md:p-12 border animate-slideIn ${
          theme === 'dark' 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-white shadow-lg border-gray-200'
        }`}>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  At MarwadTech, we believe in the power of innovation to solve real-world problems. Our journey began with a simple idea: to create technology that not only works flawlessly but also enhances the user experience in meaningful ways.
                </p>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  We've built our reputation on delivering high-quality solutions that combine cutting-edge technology with intuitive design. Every project we undertake is an opportunity to push boundaries and explore new possibilities.
                </p>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Our team consists of passionate developers, designers, and innovators who share a common vision: to make technology accessible, beautiful, and impactful. We don't just build products; we craft experiences.
                </p>
              </div>
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  From startups to enterprise solutions, we've had the privilege of working with diverse clients across various industries. Each collaboration teaches us something new and helps us grow as both individuals and as a team.
                </p>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  We're committed to staying at the forefront of technological advancement, constantly learning and adapting to new trends and methodologies. This ensures that our clients always receive solutions that are not just current, but future-ready.
                </p>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  As we look to the future, we remain excited about the endless possibilities that technology presents. We're not just building for today; we're creating the foundation for tomorrow's innovations.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 pt-8 border-t ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Work Together?
            </h3>
            <p className={`text-lg mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's create something amazing together. We'd love to hear about your next project.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow">
              <span className="relative z-10">
                <Link to="/contact">
                  Get In Touch
                </Link>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;