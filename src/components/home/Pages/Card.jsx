import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, ArrowRight } from "lucide-react";

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  const stackItems = project.Stack.split(", ");

  return (
    <div
      className="relative w-full h-[40vh] cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full rounded-xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => setIsAnimating(false)}
        onClick={handleFlip}
      >
        {/* Front Card */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden flex flex-col bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-48 overflow-hidden relative">
            <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              {project.Category || "Project"}
            </div>
            <img
              src={project.Img}
              alt={project.Title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.Title}
            </h3>

            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {stackItems.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech.trim()}
                </span>
              ))}
              {stackItems.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  +{stackItems.length - 3}
                </span>
              )}
            </div>

            <div className="mt-auto flex items-center text-blue-500 font-medium">
              <span>Know More</span>
              <ArrowRight size={16} className="ml-1" />
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden p-6 flex flex-col bg-gradient-to-br from-blue-500 to-blue-700 text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4">{project.Title}</h3>

          <div className="flex-grow overflow-auto mb-4 pr-2">
            <p className="text-white opacity-90 leading-relaxed">
              {project.Description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {stackItems.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-white bg-opacity-20 text-white"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className="flex justify-between mt-auto pt-2 border-t border-white border-opacity-20">
            {project.github && (
              <button className="flex items-center justify-center px-4 py-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors">
                <Code size={16} className="mr-2" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </button>
            )}
            <button className="flex items-center justify-center px-4 py-2 rounded-md bg-white text-blue-700 hover:bg-opacity-90 transition-colors ml-auto">
              <ExternalLink size={16} className="mr-2" />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
