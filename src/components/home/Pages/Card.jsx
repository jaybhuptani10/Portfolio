import React, { useState } from "react";
import { motion } from "framer-motion";
import "../home.css";

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className="flip-card w-[100%] dark:bg-[#2E5077]  z-20 "
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner  z-20 w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front flex flex-col items-center">
          <img src={project.Img} alt={project.Title} />
          <h3 className="mt-2 sm:px-0 px-5 h-10 sm:h-12 text-xl dark:text-white">
            {project.Title}
          </h3>
          <p className="mt-4 text-center h-20 dark:text-white  p-2 text-black">
            Stack: {project.Stack}
          </p>
          <button className="mt-4">Know More</button>
        </div>

        <div className="flip-card-back flex flex-col h-full justify-center items-center">
          <p className="sm:py-2 h-60 text-center  text-black">
            {project.Description}
          </p>
          <button className="mt-5 sm:mt-10">
            <a target="_blank" href={project.link}>
              LINK
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
