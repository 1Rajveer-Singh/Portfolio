import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Track scroll position for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  // Handle scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Navigation items
  const navItems = [
    { name: 'Home', link: '#home', section: 'home' },
    { name: 'Skills', link: '#skills', section: 'skills' },
    { name: 'Projects', link: '#projects', section: 'projects' },
    { name: 'Education', link: '#education', section: 'education' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 transition-all duration-300 z-50
          ${scrolled 
          ? 'bg-indigo-950/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-indigo-950 py-5'}`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
          <span className="text-xl font-bold text-white">RS</span>
        </div>
        <div className="text-2xl font-bold tracking-tight text-white">
          Rajveer<span className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"> Singh</span>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center space-x-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`relative px-4 py-2 font-medium rounded-md transition-all duration-300
              ${activeSection === item.section 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'}`}
            onClick={() => handleNavClick(item.section)}
          >
            <span>{item.name}</span>
            <span 
              className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300
                ${activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'}`}
            ></span>
          </a>
        ))}
        
        {/* Contact Button with improved styling */}
        <a
          href="#contact"
          onClick={() => handleNavClick('contact')}
          className="ml-3 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-md hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300 font-medium"
        >
          Contact Me
        </a>
      </nav>
      
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none z-50 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Navigation - Improved with a fade-in animation */}
      <div
        className={`fixed inset-0 bg-indigo-950/98 backdrop-blur-lg transform transition-all duration-400 ease-in-out md:hidden
          ${isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`text-2xl font-semibold transition-colors duration-300 transform hover:scale-105
                ${activeSection === item.section 
                  ? 'text-indigo-300' 
                  : 'text-white hover:text-indigo-300'}`}
              onClick={() => handleNavClick(item.section)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Contact Button */}
          <a
            href="#contact"
            className="mt-4 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 text-xl font-medium"
            onClick={() => handleNavClick('contact')}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;