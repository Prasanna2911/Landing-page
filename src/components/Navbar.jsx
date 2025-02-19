// Navbar.jsx
import React from "react";
import { useState } from "react";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a
            href="#features"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
