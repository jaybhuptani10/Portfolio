import React, { useState, useEffect } from "react";
import "../home.css";
import Card from "./Card";
import IMG1 from "./Images/Airbnb.png";
import cinevault from "./Images/cinevault.png";
import elderly from "./Images/Elderly.png";
import uptodate from "./Images/uptodate.png";
import eco from "./Images/eco.png";
import IMG2 from "./Images/Eco Eats.png";
import IMG3 from "./Images/KuNotespedia.png";
import IMG4 from "./Images/Jawaan.png";
import IMG5 from "./Images/Pass.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page5 = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setSlidesToShow(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const data = [
    {
      Title: "Elderly Health Monitoring System",
      Img: elderly,
      Stack: "MERN Stack, ML, Python,  ESP-32 ",
      Description:
        "Developed a health monitoring system utilizing IoT sensors to collect vitals in real-time. The system employs machine learning algorithms to analyze the data and provide alerts for any abnormalities. The project is designed to enhance the well-being of elderly individuals by ensuring timely medical attention.",
      link: "https://health-tracker-one-orcin.vercel.app ",
    },
    {
      Title: "UptoDate Dating App",
      Img: uptodate,
      Stack: "React Native, MERN Stack, ML, AWS, Web Sockets  ",
      Description:
        "A dating application that utilizes machine learning algorithms to analyze user preferences and behavior, providing personalized matches. The app is built using React Native for cross-platform compatibility and employs AWS for backend services. It also incorporates web sockets for real-time chat functionality, enhancing user engagement.",
      link: "https://upto-date.vercel.app/ ",
    },
    {
      Title: "CinemaVault ",
      Img: cinevault,
      Stack: "MERN Stack ",
      Description:
        "Developed a web application to efficiently manage and organize movies and TV shows, providing users with personalized recommendations and seamless content tracking. ",
      link: "hhttps://cinevaultt.vercel.app/",
    },
    {
      Title: "WASTE MANAGEMENT WEB APPLICATION ",
      Img: IMG2,
      Stack: " MERN Stack ",
      Description:
        "A web application focusing on efficient waste management. Features user management, waste tracking, reporting capabilities, and a mobile-friendly interface.",
      link: "https://eco-eats-delta.vercel.app",
    },
    {
      Title: "KuNotespedia",
      Img: IMG3,
      Stack: "HTML, CSS, JavaScript, Bootstrap, GSAP",
      Description:
        "KuNotespedia is a comprehensive platform catering to college students' academic needs. It offers a systematic repository of notes covering diverse subjects. The platform extends beyond notes, providing solutions for assignments and lab exercises",
      link: "https://jaybhuptani10.github.io/KuNotespedia/index.html",
    },
    {
      Title: "Jawaan (Website)",
      Img: IMG4,
      Stack: "HTML, CSS, JavaScript, FireBase, Bootstrap, Shrey.js",
      Description:
        "Jawaan Website serves as an exclusive Human Resource platform designed for Indian Army officers, streamlining personnel management. It provides a secure environment for officers to upload essential documents, ensuring confidentiality by restricting access to higher-ranking officials. id-jawan@indianarmy.com pass-indianarmy",
      link: "https://jaybhuptani10.github.io/jawan/user.auth.html",
    },
    {
      Title: "Pass Generator",
      Img: IMG5,
      Stack: "React",
      Description:
        "SecurePass is a powerful and user-friendly password generator application built using React. The project is designed to help users create strong, unique passwords that enhance online security. SecurePass aims to provide a seamless and efficient solution for generating secure passwords.",
      link: "https://pass-generator-eight.vercel.app",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="  carousel-container m-auto">
      <Slider {...settings}>
        {data.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Page5;
