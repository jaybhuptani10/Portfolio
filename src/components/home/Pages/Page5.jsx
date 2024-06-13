import React, { useState, useEffect } from "react";
import "../home.css";
import Card from "./Card";
import IMG1 from "./Images/Airbnb.png";
import IMG2 from "./Images/Eco Eats.png";
import IMG3 from "./Images/KuNotespedia.png";
import IMG4 from "./Images/Jawaan.png";
import IMG5 from "./Images/amazon.png";
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
      Title: "AMAZON CLONE",
      Img: IMG5,
      Stack: "HTML,CSS",
      Description:
        "The Amazon Clone project replicates Amazon's homepage in a frontend design exercise. It emulates the visual layout and structure of the Amazon website, offering a practice environment for web development enthusiasts to hone their HTML, CSS, and frontend design skills by recreating the familiar Amazon interface.",
      link: "https://jaybhuptani10.github.io/Amazon-Clone/",
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
