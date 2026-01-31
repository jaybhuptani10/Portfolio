import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { RevealOnScroll } from "../../utils/Reveal"; // Adjust path if necessary

import PropTypes from "prop-types";

const Page1 = ({ onNavigate }) => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "React Native Developer",
    "UI/UX Enthusiast",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-xl md:text-2xl font-medium text-white dark:text-gray-800 mb-4 tracking-wide uppercase">
            Hello, I&apos;m
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white dark:text-gray-900">
            Jay{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-800">
              Bhuptani
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3} className="w-full">
          <div className="h-12 md:h-16 mb-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-full text-2xl md:text-4xl font-semibold text-gray-300 dark:text-blue-900/80"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
            Crafting scalable web applications and seamless digital experiences
            with modern technologies. Expertise in MERN Stack, Next.js, and
            Mobile Development.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate && onNavigate("page5")}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              View Projects <ArrowRight size={20} />
            </button>

            <a
              href="/Jay_Resume.pdf"
              download="Jay_Bhuptani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-gray-600 dark:border-gray-400 text-gray-300 dark:text-gray-700 font-semibold flex items-center gap-2 hover:border-white dark:hover:border-gray-900 hover:text-white dark:hover:text-gray-900 transition-all hover:scale-105"
            >
              Download CV <Download size={20} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

Page1.propTypes = {
  onNavigate: PropTypes.func,
};

export default Page1;
