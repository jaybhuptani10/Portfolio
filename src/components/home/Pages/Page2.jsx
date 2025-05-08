import React from "react";

// import mongodb from "./Images/mongodb-icon.png";
// import react from "./Images/react.png";
// import js from "./Images/js.png";
// import node from "./Images/node.png";
import { delay, motion } from "framer-motion";

const Page2 = () => {
  // const images = [mongodb, js, react, , node];
  const [visible, setVisible] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const bounceVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [-100],
      opacity: 1,
    },
  };

  return (
    <div className="p-10 flex-col sm:flex-row flex gap-5 z-10">
      <div className="Profile-div-1  dark:bg-[#2E5077] flex p-10 items-center justify-center flex-col">
        <p className="dark:text-white text-r text-left w-90">
          Hello! I'm Jay Bhuptani, a full-stack web developer with a strong
          command of the{" "}
          <motion.span
            className="text-blue-600 text-l sm:text-2xl cursor-pointer uppercase font-bold relative"
            onHoverStart={() => setVisible(true)}
            onHoverEnd={() => setVisible(false)}
          >
            MERN stack
            <motion.div
              className="absolute top-full left-0 mt-2 flex gap-2"
              variants={containerVariants}
              initial="hidden"
              animate={visible ? "visible" : "hidden"}
            >
              {/* {images.map((img, index) => (
                <motion.img
                  transition={{ duration: 0.2, delay: 0.2 * index }}
                  className="w-10 h-10 object-cover object-center"
                  src={img}
                  key={index}
                  variants={bounceVariants}
                />
              ))} */}
            </motion.div>
          </motion.span>{" "}
          development. I’ve built and deployed dynamic web applications and
          contributed to impactful projects like Forecastic, a traffic
          prediction model. I was the winner of Code Unnati Smart Innovation
          Marathon 3.0, shortlisted for the Smart India Hackathon, and
          co-founded the Muse Community to empower tech learners.
        </p>

        <p className="dark:text-white text-r text-left w-90">
          My portfolio spans AI-powered assistants, IoT health dashboards, and a
          matchmaking app. I actively engage in hackathons and coding
          competitions. Beyond tech, I enjoy movies and video games, constantly
          seeking growth through innovation and collaboration.
        </p>
      </div>
      <div className="Profile-div-2 flex flex-col gap-5">
        <div className="boxes dark:bg-[#611C35] flex flex-col p-10 justify-center">
          <h2 className="text-2xl texts dark:text-white">EDUCATION</h2>
          <p className="text-xl texts font-bold dark:text-white">
            Karnavati university
          </p>
          <p className="texts w-2/3 sm:w-full dark:text-white">
            Bachelor's Degree in Computer Science & Engineering
          </p>
          <p className="texts dark:text-white">2022-2026</p>
        </div>
        <div className="boxes dark:bg-[#611C35] flex flex-col p-10 justify-center gap-5">
          <h2 className="text-2xl texts dark:text-white">CONTACT DETAILS</h2>
          <p className="flex items-center gap-2 texts dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            jaybhuptani1054@gmail.com
          </p>
          {/* <p className="flex items-center gap-2 texts dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            8141242093
          </p> */}
          <p className="flex items-center gap-2 texts dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
