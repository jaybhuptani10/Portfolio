import React, { useState, useEffect } from "react";
import "../home.css";
import Card from "./Card";
import IMG1 from "./Images/Airbnb.png";
import IMG2 from "./Images/Eco Eats.png";
import IMG3 from "./Images/KuNotespedia.png";
import IMG4 from "./Images/Jawaan.png";
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
      Title: "Airbnb Clone",
      Img: IMG1,
      Stack: "React, NODE, MongoDB, Tailwindcss",
      Description:
        "A clone of the popular website Airbnb. This project demonstrates the full-stack development skills, including user authentication, property listings, booking functionality, and a responsive design.",
      link: "https://airbnb-clone-1a7b7.web.app/",
    },
    {
      Title: "EcoEats",
      Img: IMG2,
      Stack: "React, NODE, MongoDB, Express",
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
      Title: "Project 5",
      Img: IMG1,
      Stack: "React, NODE, MongoDB, Express",
      Description:
        "Project 5 description. Overview of the functionalities and technologies implemented.",
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
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="  carousel-container m-auto"
    >
      <Slider {...settings}>
        {data.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Page5;
