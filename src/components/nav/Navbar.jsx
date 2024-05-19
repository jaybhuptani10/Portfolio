import React from "react";
import { animate, motion } from "framer-motion";
import "./style.css";
const Navbar = () => {
  return (
    <motion.div className="nav-main w-full ">
      <div className="text-white absolute bottom-10 p-4 flex flex-col gap-4 nav-text ">
        <h1 className="">JAY BHUPTANI</h1>
        <h2 className="">MENU</h2>
      </div>
      <div className="flex justify-end min-h-screen">
        <div className="text-white  nav-out overflow-hidden">
          <motion.h1 whileHover={{}}>HOME</motion.h1>
          <motion.h1>Profile</motion.h1>
          <motion.h1>Skills</motion.h1>
          <motion.h1>Experience</motion.h1>
          <motion.h1>Projects</motion.h1>
        </div>
      </div>
      <div className="h-20">hy</div>
    </motion.div>
  );
};

export default Navbar;
