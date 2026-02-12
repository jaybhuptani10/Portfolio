import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ShootingStar = ({ delay, startX, startY }) => {
  return (
    <motion.div
      initial={{
        x: startX, // Pixel or percent value
        y: startY,
        opacity: 0,
        scale: 0.5,
        width: "0px",
        rotate: 45,
      }}
      animate={{
        x: `calc(${startX} + 20vw)`, // Travel diagonally
        y: `calc(${startY} + 20vh)`,
        opacity: [0, 1, 0], // Flash in and out
        width: ["0px", "100px", "0px"], // Streak length
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2.5, // Slower for elegance
        repeat: Infinity,
        repeatDelay: delay,
        ease: "easeInOut",
      }}
      className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent shadow-[0_0_15px_2px_rgba(59,130,246,0.5)] z-0"
      style={{
        transformOrigin: "left center",
        // Position is handled by x/y in animate
        top: 0,
        left: 0,
      }}
    />
  );
};
ShootingStar.propTypes = {
  delay: PropTypes.number,
  startX: PropTypes.string,
  startY: PropTypes.string,
};
const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Generate static twinkling stars positions
    const newStars = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);

    // Generate shooting stars config
    const newShootingStars = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      startX: `${Math.random() * 80}vw`, // Start mostly left/center
      startY: `${Math.random() * 40}vh`, // Start top half
      delay: Math.random() * 10 + 5, // 5-15s delay
    }));
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f]/80 z-0" />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      <AnimatePresence>
        {shootingStars.map((star) => (
          <ShootingStar
            key={star.id}
            delay={star.delay}
            startX={star.startX}
            startY={star.startY}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StarBackground;
