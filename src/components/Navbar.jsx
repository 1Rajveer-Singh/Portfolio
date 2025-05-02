import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Code,
  BarChart2,
  Briefcase,
  GraduationCap,
  Mail,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close mobile menu on click
  };

  const navItems = [
    { name: 'Home', link: '#home', section: 'home', icon: <Code size={18} /> },
    { name: 'Skills', link: '#skills', section: 'skills', icon: <BarChart2 size={18} /> },
    { name: 'Projects', link: '#projects', section: 'projects', icon: <Briefcase size={18} /> },
    { name: 'Education', link: '#education', section: 'education', icon: <GraduationCap size={18} /> },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 px-4 lg:px-8 py-4 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white dark:bg-gray-900'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md hover:shadow-indigo-500/20 hover:scale-105 transition-transform duration-300">
            <span className="text-lg font-bold text-white">RS</span>
          </div>
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-gray-900 dark:text-white">Rajveer</span>
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> Singh</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
                activeSection === item.section
                  ? 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
              }`}
              onClick={() => handleNavClick(item.section)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm md:text-base"
          >
            <Mail size={18} className="mr-2" />
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none z-50 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (full screen) */}
      {isOpen && (
        <div className="fixed inset-0 md:hidden bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-5 py-8 px-6 w-4/5 max-w-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`flex items-center justify-center w-full px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
                  activeSection === item.section
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                }`}
                onClick={() => handleNavClick(item.section)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="mt-4 flex items-center justify-center w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg hover:shadow-indigo-500/30 duration-300 font-medium text-base"
            >
              <Mail size={18} className="mr-3" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
