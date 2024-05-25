import { useState, useEffect } from "react";
import React from "react";
import IMG1 from "./Images/j1.jpeg";

import IMG2 from "./Images/j2.jpeg";
import IMG3 from "./Images/j3.jpeg";
import IMG4 from "./Images/j4.jpeg";
import IMG5 from "./Images/j5.jpeg";
import desk from "./Images/2.png";
import { motion } from "framer-motion";
const Page6 = () => {
  const array = [IMG1, IMG2, IMG3, IMG4, IMG5];

  const variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 7000); // Change name every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white z-20  ">
      <div className="bg-black h-[60vh] sm:h-[70vh] w-[70vw] flex flex-col rounded-xl overflow-hidden sm:flex-row z-20">
        <div className="w-100 h-[40%] sm:h-full sm:w-1/2 ">
          <h1 className="contact-me mt-10 sm:mt-20 px-6 ">
            Thanks for visiting my Portfolio.....
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-red-600 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </h1>
          <h2 className="px-6 sm:mt-5  text-sm sm:text-xl">
            Pop me an email at <br />{" "}
            <span className="px-20 text-white">jaybhuptani@outlook.com</span>
          </h2>

          <h2 className="px-6 text-sm sm:text-xl">or text me on my socials.</h2>
          <div className="flex  justify-center gap-6 mt-5 px-6 cursor-pointer socials">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jay-bhuptani-566343194/"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2.5em"
                width="2.5em"
              >
                <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/jaybhuptani_10?igsh=MXJpNWMyOXJyc3NnNg=="
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2.5em"
                width="2.5em"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
              </svg>
            </a>
            <a target="_blank" href="https://x.com/BhuptaniJay">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2.5em"
                width="2.5em"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-100 sm:w-1/2 h-[60%] sm:h-full">
          <motion.img
            className="w-full h-full object-cover"
            key={array[index]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            src={array[index]}
            alt=""
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Page6;
