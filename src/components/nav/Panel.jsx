import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Panel = ({ panel, index }) => {
  const navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0, y: -50, x: -100 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay: 0.5 * index }}
      className="sm:h-[33.3vh] panel h-1/6 cursor-pointer w-full sm:w-1/2 relative"
    >
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="white-bg"></div>
        <h1
          onClick={() => navigate("/", { state: { index } })}
          className="navel-text"
        >
          {panel.Title}
        </h1>
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
