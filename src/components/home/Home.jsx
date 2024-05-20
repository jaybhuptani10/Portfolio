import React, { useState, useRef, useEffect } from "react";
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
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { index } = location.state || {};
  console.log(index);
  const [navbar, setNavbar] = useState(false);

  // Refs
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);

  // Scroll function
  const scrollToPage = (ref) => {
    if (ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect to assign refs

  useEffect(() => {
    page1Ref.current = document.getElementById("page1");
    page2Ref.current = document.getElementById("page2");
    page3Ref.current = document.getElementById("page3");
    page4Ref.current = document.getElementById("page4");
    page5Ref.current = document.getElementById("page5");

    // Debug logs
    if (index === 0) {
      scrollToPage(page1Ref);
    } else if (index === 1) {
      scrollToPage(page2Ref);
    } else if (index === 2) {
      scrollToPage(page3Ref);
    } else if (index === 3) {
      scrollToPage(page4Ref);
    } else if (index === 4) {
      scrollToPage(page5Ref);
    }
  }, []);
  return (
    <div className="Main flex relative">
      <div className="left">
        <Left />
      </div>
      <div className="centre">
        <div
          id="page1"
          className="sm:p-0 inside-class min-h-screen w-full flex justify-center items-center relative"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            className="circle"
            onClick={() => scrollToPage(page4Ref)}
            transition={{ ease: "easeOut", duration: 2 }}
          ></motion.div>
          <Page1 />
        </div>
        <div id="page2" className="inside-class min-h-screen w-full">
          <Page2 />
        </div>
        <div id="page3" className="inside-class min-h-screen w-full">
          <Page3 />
        </div>
        <div id="page4" className="inside-class min-h-screen w-full">
          <Page4 />
        </div>
        <div id="page5" className="inside-class min-h-screen w-full">
          <Page5 />
        </div>
      </div>
      <div className="right">
        <Right navbar={navbar} setNavbar={setNavbar} />
      </div>
    </div>
  );
};

export default Home;
