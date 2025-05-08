import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PortfolioNavbar = ({ onNavItemClick }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Navigation items with their titles and corresponding sections
  const navItems = [
    { title: "Home", id: "home" },
    { title: "Profile", id: "profile" },
    { title: "Skills", id: "skills" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
    { title: "Contact Me", id: "contact" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation
  const handleNavigation = (id, title, index) => {
    setActiveSection(title);
    setMobileMenuOpen(false);

    // Close the parent navbar modal if the callback exists
    if (onNavItemClick) {
      onNavItemClick();
    }

    // Navigate with state
    navigate("/", { state: { index } });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.id, item.title, index)}
                className={`relative text-lg transition-all duration-300 ${
                  activeSection === item.title
                    ? "text-blue-400 font-medium"
                    : "text-white dark:text-gray-200 hover:text-blue-300"
                }`}
              >
                {item.title}
                {activeSection === item.title && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full transform -translate-y-1"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 dark:bg-gray-700 p-4 rounded-lg shadow-lg">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.id, item.title, index)}
                className={`block w-full text-left py-2 px-4 rounded ${
                  activeSection === item.title
                    ? "bg-blue-500 text-white"
                    : "text-white hover:bg-gray-700 dark:hover:bg-gray-600"
                }`}
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
