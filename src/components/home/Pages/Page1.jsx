import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Page1 = () => {
  const array = [
    "Jay Bhuptani",
    "Front-End Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 4000); // Change name every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div className="text-header sm:h-20 overflow-hidden z-20">
      <motion.h1
        key={array[index]}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        className="Heads text-black"
      >
        {array[index]}
      </motion.h1>
    </motion.div>
  );
};

export default Page1;
