import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import { motion, useViewportScroll } from "framer-motion";

import Left from "./Left";
import Right from "./Right";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import cursor from "./Pages/Images/cursor.png";
import lamp from "./Pages/Images/lamp.png";
import sun from "./Pages/Images/sun.png";
import moon from "./Pages/Images/moon.png";
import scrollingImage from "./Pages/Images/1.png";
import closed from "./Pages/Images/closed.png";
import Page5 from "./Pages/Page5";
import Navbar from "../nav/Navbar";
import { useLocation } from "react-router-dom";
import Page6 from "./Pages/Page6";
import Slider from "./Pages/Slider";

const Home = () => {
  const location = useLocation();
  const { index } = location.state || {};
  const [navbar, setNavbar] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const { scrollY } = useViewportScroll();
  const [offsetY, setOffsetY] = useState(0);
  const [maxScrollHeight, setMaxScrollHeight] = useState(0);
  const [lightMode, setLightMode] = useState(false);

  // Refs
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const page6Ref = useRef(null);
  const cursorRef = useRef(null);
  const motiveRef = useRef(null);

  // Scroll function
  const scrollToPage = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Assign refs
  useEffect(() => {
    page1Ref.current = document.getElementById("page1");
    page2Ref.current = document.getElementById("page2");
    page3Ref.current = document.getElementById("page3");
    page4Ref.current = document.getElementById("page4");
    page5Ref.current = document.getElementById("page5");
    page6Ref.current = document.getElementById("page6");

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
      case 5:
        scrollToPage(page6Ref);
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
                pageName = "Experience";
                break;
              case "page5":
                pageName = "Projects";
                break;
              case "page6":
                pageName = "Contact";
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
    if (page6Ref.current) observer.observe(page6Ref.current);

    return () => {
      // Clean up the observer
      observer.disconnect();
    };
  }, [index]);

  useEffect(() => {
    const motiveElement = motiveRef.current;
    const cursorElement = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursorElement) {
        cursorElement.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseEnter = () => {
      setIsCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setIsCursorVisible(false);
    };

    if (motiveElement) {
      motiveElement.addEventListener("mousemove", handleMouseMove);
      motiveElement.addEventListener("mouseenter", handleMouseEnter);
      motiveElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (motiveElement) {
        motiveElement.removeEventListener("mousemove", handleMouseMove);
        motiveElement.removeEventListener("mouseenter", handleMouseEnter);
        motiveElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const updateMaxScrollHeight = () => {
      const page1Height = page1Ref.current ? page1Ref.current.clientHeight : 0;
      const page2Height = page2Ref.current ? page2Ref.current.clientHeight : 0;
      const page3Height = page3Ref.current ? page3Ref.current.clientHeight : 0;
      const page4Height = page4Ref.current ? page4Ref.current.clientHeight : 0;
      const page5Height = page5Ref.current ? page5Ref.current.clientHeight : 0;
      setMaxScrollHeight(
        page1Height + page2Height + page3Height + page4Height + page5Height
      );
    };

    updateMaxScrollHeight();
    window.addEventListener("resize", updateMaxScrollHeight);
    return () => window.removeEventListener("resize", updateMaxScrollHeight);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setOffsetY(latest);
    });
  }, [scrollY]);
  const [isImageOpen, setIsImageOpen] = useState(true); // State to manage the image open/close
  const toggleImage = () => {
    setIsImageOpen(!isImageOpen); // Toggle the state value
  };
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  // Main
  return (
    <div
      // className={`${
      //   lightMode ? "Main Main-light flex relative" : "Main flex relative"
      // }`}
      className={`${
        !lightMode
          ? "Main  flex relative"
          : "dark Main Main-light flex relative"
      } `}
    >
      <div className="left">
        <Left lightMode={lightMode} />
      </div>
      <div className="centre">
        <div
          id="page1"
          ref={page1Ref}
          className="sm:p-0  inside-class min-h-screen w-full flex justify-center items-center relative dark:bg-[#EC9192]"
        >
          <div className="theme-shifter">
            <Slider setLightMode={setLightMode} />
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            ref={motiveRef}
            className="circle motive dark:bg-[#307473]"
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <Page1 />
          </motion.div>
        </div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={variants}
          src={isImageOpen ? scrollingImage : closed} // Use isImageOpen state to toggle between images
          alt="Scrolling"
          style={{
            position: "fixed",

            top: `calc(${(offsetY / maxScrollHeight) * 100}%)`, // Adjust the position based on scroll progress
            width: "200px",
            zIndex: 1,
            transition: "top 1s ease", // Smooth transition for the movement
          }}
          onClick={toggleImage} // Handle click event to toggle the image
          whileTap={{ scale: 0.9 }} // Apply tap animation
        />
        <div
          id="page2"
          ref={page2Ref}
          className="inside-class min-h-screen w-full dark:bg-[#EC9192]"
        >
          <Page2 />
        </div>
        <div
          id="page3"
          ref={page3Ref}
          className="inside-class min-h-screen w-full dark:bg-[#EC9192]"
        >
          <Page3 />
        </div>
        <div
          id="page4"
          ref={page4Ref}
          className="inside-class min-h-screen w-full dark:bg-[#EC9192] "
        >
          <Page4 />
        </div>
        <div
          id="page5"
          ref={page5Ref}
          className="inside-class h-[60vh] sm:h-[70vh] w-full dark:bg-[#EC9192]"
        >
          <Page5 />
        </div>
        <div
          id="page6"
          ref={page6Ref}
          className="inside-class min-h-screen w-full dark:bg-[#EC9192]"
        >
          <Page6 />
        </div>
      </div>
      <div className="right">
        <Right
          navbar={navbar}
          currentPage={currentPage}
          setNavbar={setNavbar}
        />
      </div>
      {/* Custom Cursor */}
      <div
        className="cursor "
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "100px",
          height: "100px",
          backgroundImage: `url(${cursor})`,
          backgroundSize: "cover",
          pointerEvents: "none", // Ensure cursor doesn't block interactions
          zIndex: 100,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease",
          display: isCursorVisible ? "block" : "none",
        }}
      ></div>
      {/* Scrolling Image */}
    </div>
  );
};

export default Home;
