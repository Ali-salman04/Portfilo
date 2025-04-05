import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectCard = ({ project, darkMode }) => {
  const { id, title, image, technologies, description } = project;
  const [expanded, setExpanded] = useState(false);
  
  // Split technologies string into an array
  const techArray = technologies.split(', ');
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="relative h-52 overflow-hidden group">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-100 bg-opacity-70'}`}>
          {/* <span className="text-lg font-bold px-4 text-center">View Project</span> */}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 truncate">{title}</h3>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {techArray.map((tech, index) => (
            <span 
              key={index} 
              className={`inline-block px-2 py-1 text-xs rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mb-4">
          <p className={`text-sm ${expanded ? '' : 'line-clamp-3'} ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
          {description.length > 150 && (
            <button 
              onClick={toggleExpanded} 
              className={`flex items-center mt-2 text-sm font-medium ${
                darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'
              }`}
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={16} className="ml-1" />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>
        
        <div className="pt-2 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
          <a 
            href="#" 
            className={`flex items-center gap-1 text-sm font-medium py-1 px-3 rounded-lg transition-colors ${
              darkMode 
                ? 'text-white bg-[#14B8A6] ' 
                : 'text-white bg-[#14B8A6] '
            }`}
          >
            <ExternalLink size={16} />
            Demo
          </a>
          
          <a 
            href="#" 
            className={`flex items-center gap-1 text-sm font-medium py-1 px-3 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;