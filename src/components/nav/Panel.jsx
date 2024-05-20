import React from "react";
import { motion } from "framer-motion";

const Panel = ({ panel, index }) => {
  const variants = {
    hidden: { opacity: 0, y: -50, x: -100 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      layoutId={index}
      transition={{ duration: 0.5, delay: 0.5 * index }} // Adjusted delay for each panel
      className="sm:h-[33.3vh] panel h-1/3 cursor-pointer w-full sm:w-1/2 relative "
    >
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="white-bg"></div>
        <h1 className="navel-text">{panel.Title}</h1>
      </div>
      <img
        className="w-full h-full object-cover object-center"
        src={panel.link}
        alt={panel.Title}
      />
    </motion.div>
  );
};

export default Panel;
