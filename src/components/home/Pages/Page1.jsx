import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { RevealOnScroll } from "../../utils/Reveal";
import { MagneticButton } from "../../utils/MagneticButton";
import { HackerText } from "../../utils/HackerText";
import PropTypes from "prop-types";
import StarBackground from "../StarBackground";

// Helper for floating background shapes
const FloatingShape = ({ delay, top, left, right, bottom, size, color }) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-xl`}
    style={{ top, left, right, bottom, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

FloatingShape.propTypes = {
  delay: PropTypes.number,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

const Page1 = ({ onNavigate }) => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "React Native Developer",
    "UI/UX Enthusiast",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative w-full h-full flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#0a192f]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Star Background */}
      <StarBackground />

      {/* Background Glows - refined for better blend */}
      <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

      <div className="z-10 flex flex-col items-center perspective-1000">
        <RevealOnScroll delay={0.1}>
          <h2 className="text-xl md:text-2xl font-medium text-blue-200/80 mb-4 tracking-wide uppercase font-mono">
            Hello, I&apos;m
          </h2>
        </RevealOnScroll>

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="mb-8 p-4"
        >
          <RevealOnScroll delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white flex flex-col sm:flex-row gap-2 sm:gap-6 items-center justify-center drop-shadow-2xl">
              <span className="relative group">
                <HackerText text="Jay" />
                <span className="absolute -inset-1 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-text relative group">
                <HackerText text="Bhuptani" />
                <span className="absolute -inset-1 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              </span>
            </h1>
          </RevealOnScroll>
        </motion.div>

        <RevealOnScroll delay={0.3} className="w-full">
          <div className="h-12 md:h-20 mb-12 overflow-hidden relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute text-2xl md:text-5xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12 mix-blend-screen">
            Crafting scalable web applications and seamless digital experiences
            with modern technologies. Expertise in{" "}
            <span className="text-blue-400 font-semibold">MERN Stack</span>,{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>, and
            <span className="text-pink-400 font-semibold">
              {" "}
              Mobile Development
            </span>
            .
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <MagneticButton strength={40}>
              <button
                onClick={() => onNavigate && onNavigate("page5")}
                className="group relative px-8 py-4 rounded-full bg-blue-600 text-white font-bold flex items-center gap-3 overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                View Projects{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </MagneticButton>

            <MagneticButton strength={40}>
              <a
                href="/Jay_Resume.pdf"
                download="Jay_Bhuptani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-bold flex items-center gap-3 hover:border-blue-400 hover:text-blue-400 transition-all hover:scale-105 backdrop-blur-sm bg-white/5"
              >
                Download CV{" "}
                <Download
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>

      {/* Custom floating shapes in background for depth */}
      <FloatingShape
        delay={0}
        top="20%"
        left="10%"
        size="60px"
        color="bg-blue-500/10"
      />
      <FloatingShape
        delay={2}
        top="60%"
        right="15%"
        size="100px"
        color="bg-purple-500/10"
      />
      <FloatingShape
        delay={4}
        top="80%"
        left="25%"
        size="40px"
        color="bg-cyan-500/10"
      />
    </div>
  );
};

Page1.propTypes = {
  onNavigate: PropTypes.func,
};

export default Page1;
