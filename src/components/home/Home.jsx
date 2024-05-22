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
  const [navbar, setNavbar] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  // Refs
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);

  // Scroll function
  const scrollToPage = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Assign refs
    page1Ref.current = document.getElementById("page1");
    page2Ref.current = document.getElementById("page2");
    page3Ref.current = document.getElementById("page3");
    page4Ref.current = document.getElementById("page4");
    page5Ref.current = document.getElementById("page5");

    // Scroll to the page based on the index from location state
    switch (index) {
      case 0:
        scrollToPage(page1Ref);
        break;
      case 1:
        scrollToPage(page2Ref);
        break;
      case 2:
        scrollToPage(page3Ref);
        break;
      case 3:
        scrollToPage(page4Ref);
        break;
      case 4:
        scrollToPage(page5Ref);
        break;
      default:
        break;
    }

    // Intersection Observer to detect which page is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageId = entry.target.id;
            let pageName = "Home";
            switch (pageId) {
              case "page1":
                pageName = "Home";
                break;
              case "page2":
                pageName = "About";
                break;
              case "page3":
                pageName = "Skills";
                break;
              case "page4":
                pageName = "Exerience";
                break;
              case "page5":
                pageName = "Projects";
                break;
              default:
                break;
            }
            setCurrentPage(pageName);
            console.log(`Currently on page: ${pageName}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe each page
    if (page1Ref.current) observer.observe(page1Ref.current);
    if (page2Ref.current) observer.observe(page2Ref.current);
    if (page3Ref.current) observer.observe(page3Ref.current);
    if (page4Ref.current) observer.observe(page4Ref.current);
    if (page5Ref.current) observer.observe(page5Ref.current);

    return () => {
      // Clean up the observer
      observer.disconnect();
    };
  }, [index]);

  return (
    <div className="Main flex relative">
      <div className="left">
        <Left />
      </div>
      <div className="centre">
        <div
          id="page1"
          ref={page1Ref}
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
        <div
          id="page2"
          ref={page2Ref}
          className="inside-class min-h-screen w-full"
        >
          <Page2 />
        </div>
        <div
          id="page3"
          ref={page3Ref}
          className="inside-class min-h-screen w-full"
        >
          <Page3 />
        </div>
        <div
          id="page4"
          ref={page4Ref}
          className="inside-class min-h-screen w-full"
        >
          <Page4 />
        </div>
        <div
          id="page5"
          ref={page5Ref}
          className="inside-class min-h-screen w-full"
        >
          <Page5 />
        </div>
      </div>
      <div className="right">
        <Right
          navbar={navbar}
          currentPage={currentPage}
          setNavbar={setNavbar}
        />
      </div>
    </div>
  );
};

export default Home;
