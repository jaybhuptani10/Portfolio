import { useRef, useEffect, createContext, useContext } from "react";
import Lenis from "lenis";
import PropTypes from "prop-types";

// Create context for Lenis
const ScrollContext = createContext(null);

export const useScroll = () => {
  return useContext(ScrollContext);
};

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Add lenis class to HTML element
    document.documentElement.classList.add("lenis");

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Bind global click for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
      document.documentElement.classList.remove("lenis");
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollContext.Provider value={lenisRef}>{children}</ScrollContext.Provider>
  );
};

SmoothScroll.propTypes = {
  children: PropTypes.node,
};

export default SmoothScroll;
