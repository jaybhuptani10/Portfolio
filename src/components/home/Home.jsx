import { useState, useRef, useEffect, useCallback } from "react";
import "./home.css";
import { AnimatePresence, motion } from "framer-motion";
import Left from "./Left";
import Right from "./Right";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import { useLocation } from "react-router-dom";
import Page6 from "./Pages/Page6";
import SkillsSection from "./Pages/Page3";
import OverlayNav from "../nav/OverlayNav";
import { Plane } from "lucide-react";
import { useScroll } from "../utils/SmoothScroll";
import Slider from "./Pages/Slider";

const Home = () => {
  const location = useLocation();
  const { index } = location.state || {};
  const [navbar, setNavbar] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [lightMode, setLightMode] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const lenisRef = useScroll();

  // Refs
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const page6Ref = useRef(null);

  const scrollToPage = useCallback(
    (ref) => {
      if (lenisRef?.current && ref.current) {
        lenisRef.current.scrollTo(ref.current);
      } else if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenisRef],
  );

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  const handleOverlayNavigation = (id) => {
    const refs = {
      page1: page1Ref,
      page2: page2Ref,
      page3: page3Ref,
      page4: page4Ref,
      page5: page5Ref,
      page6: page6Ref,
    };

    const targetRef = refs[id];
    if (!targetRef?.current) return;

    // Close menu instantly so user sees the page
    setNavbar(false);

    const targetIndex = parseInt(id.replace("page", "")) - 1;
    const currentIndex = menuItems.indexOf(currentPage);

    if (targetIndex > currentIndex) {
      // Going down: Trigger plane and slow scroll
      setIsFlying(true);

      if (lenisRef?.current) {
        lenisRef.current.scrollTo(targetRef.current, { duration: 2 });
      } else {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }

      // Stop flying after scroll
      setTimeout(() => setIsFlying(false), 2000);
    } else {
      // Normal scroll for going up
      scrollToPage(targetRef);
    }
  };

  // Scroll logic and Active Page Detection
  useEffect(() => {
    // Scroll to the page based on the index from location state
    // We wrap this in a timeout to ensure Lenis is ready if needed, though usually not required
    const timer = setTimeout(() => {
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
    }, 100);

    return () => clearTimeout(timer);
  }, [index, scrollToPage]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "Home", ref: page1Ref },
        { name: "About", ref: page2Ref },
        { name: "Skills", ref: page3Ref },
        { name: "Experience", ref: page4Ref },
        { name: "Projects", ref: page5Ref },
        { name: "Contact", ref: page6Ref },
      ];

      const viewportCenter = window.innerHeight / 2;
      let closestSection = currentPage; // Default to current
      let minDistance = Infinity;

      sections.forEach((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);

          // Check if section is effectively visible (within reasonable range)
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section.name;
          }
        }
      });

      if (closestSection !== currentPage) {
        setCurrentPage(closestSection);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]); // Removed scrollToPage from here as it wasn't used, but added it to the other effect

  const planeVariants = {
    initial: {
      top: "-10%",
      left: "50%",
      x: "-50%",
      opacity: 0,
      rotate: 135, // Pointing down
      scale: 0.5,
    },
    animate: {
      top: "110%",
      left: "50%",
      x: "-50%",
      opacity: 1,
      rotate: 135,
      scale: 1.5,
      transition: {
        duration: 2, // Match scroll duration
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1],
        opacity: { duration: 0.2 },
      },
    },
  };

  // Main
  return (
    <div
      className={`${
        !lightMode
          ? "Main bg-[#4F646F] sm:bg-[#1A202B]  flex relative"
          : "dark bg-[#F1DEDC] sm:bg-[#F1DEDC]  Main  flex relative"
      } `}
    >
      {isFlying && (
        <motion.div
          className="fixed z-[9999] pointer-events-none"
          variants={planeVariants}
          initial="initial"
          animate="animate"
        >
          <Plane
            size={140}
            className="text-blue-500 fill-blue-500/20 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
          <motion.div
            className="absolute -top-10 -left-10 w-48 h-2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-md"
            style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
          />
        </motion.div>
      )}

      <div className="left sm:z-50">
        <Left lightMode={lightMode} />
      </div>
      <div className="centre">
        <div
          id="page1"
          ref={page1Ref}
          className="sm:p-0 inside-class min-h-screen w-full flex justify-center items-center relative dark:bg-[#F1DEDC]"
        >
          <div className="theme-shifter">
            <Slider setLightMode={setLightMode} />
          </div>

          <div className="w-full h-full">
            <Page1 onNavigate={handleOverlayNavigation} />
          </div>
        </div>

        <div
          id="page2"
          ref={page2Ref}
          className="inside-class min-h-screen w-full dark:bg-[#F1DEDC]"
        >
          <Page2 />
        </div>
        <div
          id="page3"
          ref={page3Ref}
          className="inside-class z-10  sm:min-h-[80vh] w-full dark:bg-[#F1DEDC]"
        >
          <SkillsSection />
        </div>
        <div
          id="page4"
          ref={page4Ref}
          className="inside-class min-h-screen z-10 w-full dark:bg-[#F1DEDC] "
        >
          <Page4 />
        </div>
        <div
          id="page5"
          ref={page5Ref}
          className="inside-class w-full dark:bg-[#F1DEDC] sm:pt-20"
        >
          <Page5 />
        </div>
        <div
          id="page6"
          ref={page6Ref}
          className="inside-class w-full dark:bg-[#F1DEDC] sm:pt-20 pb-20"
        >
          <Page6 />
        </div>
      </div>
      <div className="right sm:z-50">
        <Right
          navbar={navbar}
          currentPage={currentPage}
          setNavbar={setNavbar}
        />
      </div>

      {/* Navbar Overlay */}
      <AnimatePresence>
        {navbar && (
          <OverlayNav
            onClose={() => setNavbar(false)}
            onNavigate={handleOverlayNavigation}
            activePage={currentPage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
