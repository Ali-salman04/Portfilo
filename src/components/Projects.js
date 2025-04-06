import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Project1 from '../Images/project1.png';
import Project3 from '../Images/project3.png';


const Projects = () => {
   const [darkMode, setDarkMode] = useState(true); 
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

  const projects = [
    {
      id: 1,
      title: 'Face Skin Disease Detection (FYP)',
      image: Project1,
      technologies: 'React, Tailwind CSS, Node.js',
      description: 'As part of my Final Year Project, I am working on the development of a web-based Face Skin Disease Detection system. My primary role involves building the frontend using React.js to create an intuitive, responsive, and interactive user interface. The project integrates machine learning models to detect skin diseases from facial images, providing users with real-time feedback.'
    },
    {
      id: 2,
      title: 'RU Novel',
      image: '/api/placeholder/400/300',
      technologies: 'React, Redux, Tailwind CSS',
      description: 'At RU Novel®️, I worked as a Junior Frontend Developer, contributing to the development and enhancement of the platform that hosts web novels and fan fictions. My primary role was to build responsive, user-friendly interfaces using React.js, ensuring a seamless and interactive experience for both writers and readers.'
    },
    {
      id: 3,
      title: 'School Data Inventory',
      image: Project3,
      technologies: 'React, Tailwind CSS',
      description: 'A responsive portfolio website showcasing projects and skills. This application helps schools manage their inventory of equipment, supplies, and educational materials. It features a user-friendly dashboard, robust search capabilities, and detailed reporting tools.'
    }
  ];

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
          <Link to="/resume" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Resume</Link>
          <a href="/contact" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Contact</a>
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
              <Link to="/resume" className="py-2" onClick={toggleMenu}>Resume</Link>
              <a href="/contact" className="py-2" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-8 md:px-12 py-8 sm:py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`px-4 sm:px-8 md:px-12 py-4 sm:py-6 text-center sm:text-right text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-6xl mx-auto mt-8`}>
        <p>©2025 By Hafiz Ali Salman.</p>
      </footer>
    </div>
  );
};

export default Projects;