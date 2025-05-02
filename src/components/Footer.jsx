import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo Section */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Rajveer<span className="text-blue-500">&nbsp;&nbsp;Singh</span>
          </h3>
          <p className="mt-2">&nbsp;&nbsp;B.Tech CSE Student</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#education" className="hover:text-blue-400">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
          <p className="mb-4">Subscribe to my newsletter for latest projects and updates.</p>
          <form method="POST" action="php/newsletter.php" className="flex">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-3 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
            >
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>&copy; 2025 Rajveer Singh. All rights reserved.</p>
        <p className="text-gray-500">Designed and Developed by Rajveer Singh</p>
      </div>
    </footer>
  );
};

export default Footer;
