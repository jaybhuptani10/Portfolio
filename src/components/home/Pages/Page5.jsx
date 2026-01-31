import "../home.css";
import Card from "./Card";
import cinevault from "./Images/cinevault.png";
import elderly from "./Images/Elderly.png";
import uptodate from "./Images/uptodate.png";
import IMG2 from "./Images/Eco Eats.png";
import IMG3 from "./Images/KuNotespedia.png";
import IMG4 from "./Images/Jawaan.png";
import IMG5 from "./Images/Pass.png";
import duotrack from "./Images/duotrack.png";
import { RevealOnScroll } from "../../utils/Reveal"; // Adjust path if necessary

const Page5 = () => {
  const data = [
    {
      Title: "DuoTrack – AI-Powered Productivity",
      Img: duotrack,
      Stack: "MERN, Socket.io, Gemini AI",
      Description:
        "Integrated Gemini AI to provide personalized productivity insights and behavioral analysis for long-distance couples, currently supporting 10+ active pairs. Constructed a multi-modular tracking system with real-time synchronization via Socket.io.",
      link: "https://duotrack.vercel.app",
    },
    {
      Title: "EarlyAid - Elderly Health Monitoring System",
      Img: elderly,
      Stack: "MERN Stack, ML, Python, ESP-32",
      Description:
        "Developed a health monitoring system utilizing IoT sensors to collect vitals in real-time. The system employs machine learning algorithms to analyze the data and provide alerts for any abnormalities.",
      link: "https://earlyaidd.vercel.app/",
    },
    {
      Title: "CinemaVault",
      Img: cinevault,
      Stack: "MERN Stack",
      Description:
        "Developed a web application to efficiently manage and organize movies and TV shows, providing users with personalized recommendations and seamless content tracking.",
      link: "https://cine-vaultt.vercel.app/",
    },
    {
      Title: "UptoDate Dating App",
      Img: uptodate,
      Stack: "React Native, MERN Stack, ML, AWS",
      Description:
        "A dating application that utilizes machine learning algorithms to analyze user preferences and behavior. Built using React Native for cross-platform compatibility and employs AWS for backend services.",
      link: "https://upto-date.vercel.app/",
    },

    {
      Title: "Eco Eats - Waste Management",
      Img: IMG2,
      Stack: "MERN Stack",
      Description:
        "A web application focusing on efficient waste management. Features user management, waste tracking, reporting capabilities, and a mobile-friendly interface to support eco-friendly initiatives.",
      link: "https://eco-eats-delta.vercel.app",
    },
    {
      Title: "KuNotespedia",
      Img: IMG3,
      Stack: "HTML, CSS, JavaScript, Bootstrap",
      Description:
        "KuNotespedia is a comprehensive platform catering to college students' academic needs. It offers a systematic repository of notes covering diverse subjects, assignments, and lab exercises.",
      link: "https://jaybhuptani10.github.io/KuNotespedia/index.html",
    },
    {
      Title: "Jawaan (Army HR Platform)",
      Img: IMG4,
      Stack: "HTML, CSS, JS, FireBase",
      Description:
        "Jawaan serves as an exclusive Human Resource platform designed for Indian Army officers, streamlining personnel management and providing a secure environment for document uploads.",
      link: "https://jaybhuptani10.github.io/jawan/user.auth.html",
    },
    {
      Title: "SecurePass Generator",
      Img: IMG5,
      Stack: "React",
      Description:
        "SecurePass is a powerful and user-friendly password generator application built using React. Designed to help users create strong, unique passwords that enhance online security.",
      link: "https://pass-generator-eight.vercel.app",
    },
  ];

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-gray-400 dark:text-gray-900 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, ranging from AI-powered applications
              to thoughtful design solutions.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {data.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <Card project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page5;
