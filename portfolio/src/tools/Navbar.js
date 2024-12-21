import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-indigo-900 shadow-md z-50"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-gray-200 hover:text-gray-400 transition-all"
        >
          Peter Tran
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          <li>
            <a href="#about-me" className="text-sm font-medium text-gray-200 hover:text-gray-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="text-sm font-medium text-gray-200 hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#professional-history" className="text-sm font-medium text-gray-200 hover:text-gray-400">
              Professional History
            </a>
          </li>
          <li>
            <a href="#contact-me" className="text-sm font-medium text-gray-200 hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
