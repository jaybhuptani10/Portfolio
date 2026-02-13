import { useState, useEffect } from "react";

import { RevealOnScroll } from "../../utils/Reveal"; // Adjust path if necessary
import formal2 from "./Images/formal2.jpg";
import formal6 from "./Images/formal6.jpg";
import formal7 from "./Images/formal7.jpg";
import formal8 from "./Images/formal8.jpg";
import { motion } from "framer-motion";
import { Trophy, Users, Code, Mail, FileText, Award } from "lucide-react";

const Page6 = () => {
  const array = [formal8, formal7, formal6, formal2];

  const variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [array.length]);

  const achievements = [
    {
      title: "Code Unnati 3.0 Winner",
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Developer Club Student Coordinator",
      subtitle: "Karnavati University",
      icon: <Code className="w-5 h-5 text-green-400" />,
    },
    {
      title: "GeeksforGeeks Student Chapter Lead",
      subtitle: "Karnavati University",
      icon: <Users className="w-5 h-5 text-blue-400" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-white z-20 px-4 py-12 min-h-screen">
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row gap-8 z-20">
        {/* Left Content Section */}
        <div className="w-full lg:w-3/5 space-y-6">
          <RevealOnScroll>
            {/* Main "Thank You" Card */}
            <div className="bg-[#1A202B]/90 dark:bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 dark:border-gray-200 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 dark:from-gray-900 dark:to-gray-600 bg-clip-text text-transparent mb-6">
                Let&apos;s Build Something Amazing
              </h1>
              <p className="text-gray-300 dark:text-gray-900 text-lg leading-relaxed mb-8 max-w-2xl">
                Thank you for visiting my portfolio. I&apos;m always open to
                discussing new projects, creative ideas, or opportunities to be
                part of your visions.
              </p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center group/mail cursor-pointer">
                  <div className="p-3 bg-blue-500/10 rounded-full mr-4 group-hover/mail:bg-blue-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400 dark:text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Get in touch
                    </p>
                    <a
                      href="mailto:jaybhuptani1054@gmail.com"
                      className="text-lg font-medium text-white dark:text-gray-900 hover:text-blue-400 transition-colors"
                    >
                      jaybhuptani1054@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6 pl-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jay-bhuptani-566343194/"
                    className="p-2 bg-gray-800 dark:bg-gray-200 rounded-lg hover:bg-[#0077b5] hover:text-white transition-all duration-300 text-gray-400 dark:text-gray-600"
                    aria-label="LinkedIn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[1.4rem] h-[1.4rem]"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5.106v-7.962c0-.505.065-3.134 3.507-3.134 2.875 0 2.924 2.492 2.924 5.253v5.843h4.944v-9.102c0-5.83-2.916-7.578-7.382-7.578-2.671 0-3.81 1.437-4.133 2.103h.002v-2.01z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://x.com/BhuptaniJay"
                    className="p-2 bg-gray-800 dark:bg-gray-200 rounded-lg hover:bg-black dark:hover:bg-gray-900 hover:text-white transition-all duration-300 text-gray-400 dark:text-gray-600"
                    aria-label="Twitter/X"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[1.4rem] h-[1.4rem]"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/jaybhuptani_10"
                    className="p-2 bg-gray-800 dark:bg-gray-200 rounded-lg hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 text-gray-400 dark:text-gray-600"
                    aria-label="Instagram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[1.4rem] h-[1.4rem]"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.583.069-4.849.149-3.226 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Achievements Sub-section */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Recognitions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 dark:bg-gray-100 rounded-lg hover:bg-white/10 dark:hover:bg-gray-200 transition-colors"
                    >
                      {achievement.icon}
                      <div>
                        <p className="text-sm font-medium text-gray-200 dark:text-gray-800">
                          {achievement.title}
                        </p>
                        {achievement.subtitle && (
                          <p className="text-xs text-gray-500">
                            {achievement.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* RESEARCH PAPER SECTION */}
          <RevealOnScroll delay={0.2}>
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 dark:from-blue-600/10 dark:to-purple-600/10 backdrop-blur-md border border-blue-500/30 dark:border-blue-200 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-32 h-32 text-white dark:text-gray-300" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-xs font-bold text-blue-300 dark:text-blue-700 uppercase tracking-widest bg-blue-500/20 px-2 py-1 rounded">
                    Research Publication
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white dark:text-gray-900 mb-3 group-hover:text-blue-200 dark:hover:text-blue-800 transition-colors">
                  Smart Matchmaking via Semantic Embedding: An NLP-Based Model
                  for Compatibility in Online Dating
                </h2>

                <div className="space-y-2 text-sm text-gray-300 dark:text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                    <span>
                      16th International Conference on Computing, Communication
                      and Networking Technologies (ICCCNT 2025), IIT Indore
                    </span>
                  </p>
                  <p className="flex items-center gap-2 text-green-400 dark:text-green-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 dark:bg-green-600"></span>
                    Published in IEEE Proceedings
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-2/5 min-h-[500px] lg:min-h-[700px] relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 dark:border-gray-300">
          <RevealOnScroll delay={0.4} className="absolute inset-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1624]/80 dark:from-white/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              <motion.div
                className="absolute inset-0"
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
              >
                <img
                  src={array[index]}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-2 drop-shadow-lg">
                  Jay Bhuptani
                </h2>
                <p className="text-blue-400 dark:text-blue-600 font-medium text-lg">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Page6;
