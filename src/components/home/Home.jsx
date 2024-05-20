import React, { useState } from "react";
import "./home.css";
import { motion } from "framer-motion";
import Left from "./Left";

import Right from "./Right";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Navbar from "../nav/Navbar";
const Home = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="Main flex relative">
      <div className="left">
        <Left />
      </div>
      {navbar ? (
        <div className="centre">
          <Navbar />
        </div>
      ) : (
        <div className="centre ">
          <div className="sm:p-0 inside-class min-h-screen w-full flex justify-center items-center relative">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              className="circle"
              transition={{ ease: "easeOut", duration: 2 }}
            ></motion.div>
            <Page1 />
          </div>
          <div className="inside-class min-h-screen w-full">
            <Page2 />
          </div>
          <div className="inside-class min-h-screen w-full">
            <Page3 />
          </div>
          <div className="inside-class min-h-screen w-full">
            <Page4 />
          </div>
          <div className="inside-class min-h-screen w-full">
            <Page5 />
          </div>
        </div>
      )}

      <div className="right ">
        <Right navbar={navbar} setNavbar={setNavbar} />
      </div>
    </div>
  );
};

export default Home;
