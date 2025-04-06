import React, { useState, useEffect } from 'react';
import { Linkedin, Instagram, Sun, Moon, Mail, PhoneCall, Menu, X, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from "../Images/pic1.png";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to true initially
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Hello, I'm Hafiz Ali Salman";
  const [typingComplete, setTypingComplete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Get the value from localStorage if it exists
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // If there's a saved preference, use it; otherwise stay with the default (true)
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // No saved preference, ensure we default to dark mode
      setDarkMode(true);
      // Save the default to localStorage
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  // Animation for typing effect
  useEffect(() => {
    if (animatedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setAnimatedText(fullText.slice(0, animatedText.length + 1));
      }, 100); 
      
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [animatedText, fullText]);

  // Save darkMode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Link to="/resume" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Resume</Link>
          <a href="/projects" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Projects</a>
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
              <Link to="/resume" className="py-2" onClick={toggleMenu}>Resume</Link>
              <a href="/projects" className="py-2" onClick={toggleMenu}>Projects</a>
              <a href="/contact" className="py-2" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 py-8 md:py-16 lg:py-24 max-w-6xl mx-auto">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-gray-600 overflow-hidden">
            <img 
              src={Image}
              alt="Profile" 
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {animatedText}
            <span className={`inline-block w-1 h-8 sm:h-10 md:h-12 bg-current ml-1 ${typingComplete ? 'animate-pulse' : 'animate-blink'}`}></span>
          </h1>
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">A Bit About Me</h2>
          <p className={`mb-4 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I am a Software Engineer and passionate developer who believes in mastering one skill at a time through patience, consistency, and dedication.
            I have over a year of experience as a MERN Stack Developer, building responsive web applications with JavaScript, React, Next.js, and Node.js.
            I love solving problems, optimizing performance, and always learning something new to stay ahead in the tech game.
            Beyond coding, I enjoy collaborating with like-minded people, tackling real-world challenges, and building products that actually make a difference.

            Let's connect and build something extraordinary!
          </p>

          <div className="flex flex-wrap gap-3 sm:space-x-4">
            <Link to="/resume" className={`flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full ${darkMode ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-yellow-500 hover:bg-yellow-600'} transition-colors`}>
              <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-gray-900' : ''}`}>Resume</span>
            </Link>
            <a href="/projects" className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
              <span className="text-sm sm:text-base font-medium text-white">Projects</span>
            </a>
            <Link to="/contact" className={`flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full ${darkMode ? 'bg-teal-500 hover:bg-teal-600' : 'bg-teal-400 hover:bg-teal-500'} transition-colors`}>
              <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : ''}`}>Contact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} max-w-6xl mx-auto my-6 sm:my-8`}></div>

      {/* Contact Info */}
      <section id="contact" className="px-6 sm:px-12 py-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="font-bold mb-2">Phone</h3>
            <a
              href="https://wa.me/923000467075"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-gray-300' : ''}`}
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              +92-300-0467075
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2">Email</h3>
            <a
              href="mailto:hafiz.ali.salman@outlook.com"
              className={`flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-gray-300' : ''}`}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="break-all">hafiz.ali.salman@outlook.com</span>
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Me</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/hafiz-ali-salman-40715a250" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}
              >
                <Linkedin className="w-5 h-5 text-blue-700" />
              </a>
              <a 
                href="https://github.com/Ali-salman04" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}
              >
                <Github className="w-5 h-5 text-black-700" />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`px-6 sm:px-12 py-6 text-center sm:text-right text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-6xl mx-auto`}>
        <p>©2025 By Hafiz Ali Salman.</p>
      </footer>
    </div>
  );
};

const styles = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-end infinite;
}
`;

// Append styles to head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

export default Portfolio;