import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#171D22] text-white  py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Footer Logo */}
        <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
          Maven<span className="text-indigo-500">Finder</span>
        </h2>

        <nav className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
          <a
            href="/"
            className="hover:text-indigo-500 text-lg transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/events"
            className="hover:text-indigo-500 text-lg transition-colors duration-300"
          >
            Events
          </a>
          <a
            href="/contact"
            className="hover:text-indigo-500 text-lg transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:text-indigo-500 text-lg transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </nav>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 MavenFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
