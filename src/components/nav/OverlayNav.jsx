import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import PropTypes from "prop-types";

const quotes = [
  {
    text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller's Day Off",
  },
  {
    text: "It’s not who I am underneath, but what I do that defines me.",
    source: "Batman Begins",
  },
  {
    text: "Do. Or do not. There is no try.",
    source: "Star Wars: The Empire Strikes Back",
  },
  { text: "To infinity and beyond!", source: "Toy Story" },
  { text: "This is the way.", source: "The Mandalorian" },
  {
    text: "With great power comes great responsibility.",
    source: "Spider-Man",
  },
  { text: "Adventure is out there!", source: "Up" },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    source: "Alice in Wonderland",
  },
  { text: "Just keep swimming.", source: "Finding Nemo" },
  { text: "Whatever you do, do it with style.", source: "Freddie Mercury" },
];

const OverlayNav = ({ onClose, onNavigate, onNavItemClick, activePage }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [randomQuote, setRandomQuote] = useState({ text: "", source: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  const navItems = [
    { title: "Home", id: "page1", description: "Where it all begins." },
    { title: "About", id: "page2", description: "Get to know me better." },
    { title: "Skills", id: "page3", description: "My technical arsenal." },
    {
      title: "Experience",
      id: "page4",
      description: "My professional journey.",
    },
    {
      title: "Projects",
      id: "page5",
      description: "What I've been working on.",
    },
    { title: "Contact", id: "page6", description: "Let's get in touch." },
  ];

  const handleNavigation = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (onNavItemClick) onNavItemClick();
    }
  };

  const activeItemIndex = navItems.findIndex(
    (item) => item.title === activePage,
  );

  // ... variants ...
  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-[#0F1624] text-white flex flex-col overflow-hidden"
    >
      {/* Header / Close Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
        >
          <X
            size={28}
            className="text-gray-400 group-hover:text-white transition-colors"
          />
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full relative">
        {/* Left Column: Navigation Menu */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 z-20">
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col space-y-6 md:space-y-4"
          >
            {navItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-left relative group transition-all duration-300"
                  style={{
                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                    color:
                      hoveredIndex === index ||
                      (hoveredIndex === null && index === activeItemIndex)
                        ? "white"
                        : "transparent",
                  }}
                >
                  <span className="relative z-10 transition-colors duration-300">
                    {item.title}
                  </span>
                  {/* Highlight active item or hovered item */}
                  {(hoveredIndex === index ||
                    (hoveredIndex === null && index === activeItemIndex)) && (
                    <motion.span
                      layoutId="navGlow"
                      className="absolute -left-4 -top-0 w-2 h-full bg-blue-500 rounded-sm"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Preview Area (Desktop Only) */}
        <div className="hidden md:flex w-1/2 h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10 items-center justify-center relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center max-w-md px-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
                JAY BHUPTANI
              </h3>
              <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full" />
              <div className="pt-2">
                <p className="text-xl text-gray-300 font-light italic">
                  &quot;{randomQuote.text}&quot;
                </p>
                <p className="text-sm text-blue-400 font-bold tracking-widest uppercase mt-2">
                  — {randomQuote.source}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links - Moved to Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 flex gap-6"
          >
            <a
              href="https://github.com/jaybhuptani10"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jay-bhuptani-566343194/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/BhuptaniJay"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/jaybhuptani_10"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

OverlayNav.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNavItemClick: PropTypes.func,
  activePage: PropTypes.string,
};

export default OverlayNav;
