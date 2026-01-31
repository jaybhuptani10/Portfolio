import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Layers } from "lucide-react";
import PropTypes from "prop-types";

const Card = ({ project }) => {
  const stackItems = project.Stack ? project.Stack.split(", ") : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full bg-[#0F1624] dark:bg-white border border-gray-800 dark:border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.Img}
          alt={project.Title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay Links */}
        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
              title="View Source"
            >
              <Github size={18} />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-100 dark:text-gray-900 group-hover:text-blue-400 transition-colors mb-2">
            {project.Title}
          </h3>
          <div className="h-1 w-12 bg-blue-500 rounded-full mb-3 group-hover:w-20 transition-all duration-300" />
          <p className="text-gray-400 dark:text-gray-900 text-sm leading-relaxed mb-4">
            {project.Description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3 text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider">
            <Layers size={14} className="text-blue-500" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {stackItems.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 dark:text-blue-700 border border-blue-500/20 dark:border-blue-200"
              >
                {tech.trim()}
              </span>
            ))}
            {stackItems.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-800 dark:bg-gray-100 text-gray-400 dark:text-gray-600 border border-gray-700 dark:border-gray-200">
                +{stackItems.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Call to Action - Mobile only mostly, but nice to have */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
        >
          View Project{" "}
          <ArrowUpRight
            size={16}
            className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </a>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    Stack: PropTypes.string,
    Img: PropTypes.string,
    Title: PropTypes.string,
    github: PropTypes.string,
    link: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
};

export default Card;
