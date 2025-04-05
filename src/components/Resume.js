import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const prefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(savedDarkMode || prefersDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Resume data structure
  const resumeData = {
    experience: [
      {
        title: "ReactJS Developer",
        company: "DMZ Dev Hub",
        period: "2024 - Present",
        description: "Developed React.js applications, integrated APIs, managed state, debugged issues, styled with Tailwind CSS, and collaborated using Git."
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "University of Management & Technology, Lahore",
        period: "2021 - 2025",
        description: "Focused on web development, data structures, and software engineering principles."
      },
    ],
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 75 },
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className="relative flex justify-between items-center px-4 sm:px-8 md:px-12 py-4 sm:py-6">
        <div className="flex items-center">
          <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'} flex items-center justify-center mr-3 sm:mr-4`}></div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold">Hafiz Ali Salman</h1>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Developer</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Home</Link>
          <Link to="/contact" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Contact</Link>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'} transition-colors`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'} transition-colors`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg md:hidden`}>
            <div className="flex flex-col p-4 space-y-3">
              <Link to="/" className="py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/contact" className="py-2" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      <section id="resume" className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">My Resume</h2>
        
        {/* Experience Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className={`inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'} mr-2 sm:mr-3`}></span>
            Professional Experience
          </h3>
          
          <div className="space-y-6 sm:space-y-8">
            {resumeData.experience.map((job, index) => (
              <div key={index} className={`pl-4 sm:pl-6 border-l-2 sm:border-l-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-lg sm:text-xl font-semibold">{job.title}</h4>
                  <span className={`mt-1 sm:mt-0 inline-block px-3 py-1 rounded-full text-xs sm:text-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {job.period}
                  </span>
                </div>
                <p className={`mb-2 text-sm sm:text-base ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{job.company}</p>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className={`inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full ${darkMode ? 'bg-red-500' : 'bg-red-500'} mr-2 sm:mr-3`}></span>
            Education
          </h3>
          
          <div className="space-y-6 sm:space-y-8">
            {resumeData.education.map((edu, index) => (
              <div key={index} className={`pl-4 sm:pl-6 border-l-2 sm:border-l-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="text-lg sm:text-xl font-semibold">{edu.degree}</h4>
                  <span className={`mt-1 sm:mt-0 inline-block px-3 py-1 rounded-full text-xs sm:text-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {edu.period}
                  </span>
                </div>
                <p className={`mb-2 text-sm sm:text-base ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{edu.institution}</p>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className={`inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full ${darkMode ? 'bg-teal-500' : 'bg-teal-400'} mr-2 sm:mr-3`}></span>
            Skills
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="mb-2 sm:mb-4">
                <div className="flex justify-between mb-1 text-sm sm:text-base">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className={`w-full h-1.5 sm:h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div 
                    className={`h-full rounded-full ${darkMode ? 'bg-teal-500' : 'bg-teal-400'}`} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`px-4 sm:px-8 md:px-12 py-4 sm:py-6 text-center sm:text-right text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-6xl mx-auto mt-8`}>
        <p>©2025 By Hafiz Ali Salman.</p>
      </footer>
    </div>
  );
};

export default Resume;