import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioNavbar = ({ onNavItemClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Navigation items with their titles and corresponding sections
  const navItems = [
    { title: "Home", id: "home" },
    { title: "Profile", id: "profile" },
    { title: "Skills", id: "skills" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
    { title: "Contact Me", id: "contact" },
  ];

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation
  const handleNavigation = (id, title, index) => {
    // Close the parent navbar modal if the callback exists
    if (onNavItemClick) {
      onNavItemClick();
    }

    // Navigate with state
    navigate("/", { state: { index } });
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-gray-900 bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white dark:text-gray-200">
            <span className="text-blue-400">Portfolio</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.id, item.title, index)}
                className="relative text-lg transition-all duration-300 text-white dark:text-gray-200 hover:text-blue-300"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu - Always visible on mobile */}
        {isMobile && (
          <div className="md:hidden bg-gray-800 dark:bg-gray-700 p-4 rounded-lg shadow-lg mb-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.id, item.title, index)}
                className="block w-full text-left py-2 px-4 rounded text-white hover:bg-gray-700 dark:hover:bg-gray-600"
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
