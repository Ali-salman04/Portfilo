import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Sun, Moon, Menu, X, Mail,PhoneCall } from 'lucide-react';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to true initially
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
          <Link to="/projects" className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Project</Link>


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
              <Link to="/projects" className="py-2" onClick={toggleMenu}>Project</Link>

            </div>
          </div>
        )}
      </nav>

      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get In Touch</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">Phone</h4>
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
                <h4 className="font-bold mb-1 sm:mb-2">Email</h4>
                <a
                  href="mailto:hafiz.ali.salman@outlook.com"
                  className={`flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-gray-300' : ''}`}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <span className="break-all">hafiz.ali.salman@outlook.com</span>
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">Address</h4>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : ''}`}>Lahore, Pakistan</p>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">Follow Me</h4>
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
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send Me a Message</h3>
            <form>
              <div className="mb-3 sm:mb-4">
                <label htmlFor="name" className="block mb-1 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-2 sm:p-3 rounded-lg text-sm sm:text-base ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300'
                    } border`}
                />
              </div>
              <div className="mb-3 sm:mb-4">
                <label htmlFor="email" className="block mb-1 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-2 sm:p-3 rounded-lg text-sm sm:text-base ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300'
                    } border`}
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block mb-1 text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className={`w-full p-2 sm:p-3 rounded-lg text-sm sm:text-base ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-300'
                    } border`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium ${darkMode
                  ? 'bg-teal-500 hover:bg-teal-600'
                  : 'bg-teal-400 hover:bg-teal-500'
                  } transition-colors`}
              >
                Send Message
              </button>
            </form>
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

export default Contact;