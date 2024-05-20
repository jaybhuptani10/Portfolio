import React from "react";
import "./home.css";
import { motion, transform } from "framer-motion";
import Resume from "./Jay Resume.pdf";

const Left = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex left sm:py-10 flex-col text-white items-center justify-between sm:justify-between fixed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7  mt-6 sm:mt-0 cursor-pointer  "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <div className="text flex flex-col gap-2">
        <h2 className="Left-h1">Bhuptani</h2>
        <h2 className="Left-h1">Jay</h2>
      </div>

      <motion.h2
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
        className="cursor-pointer mb-5 sm:mb-0 "
      >
        <a className="Resume" href={Resume} download="Jay Resume.pdf">
          RESUME
        </a>
      </motion.h2>
    </div>
  );
};

export default Left;
