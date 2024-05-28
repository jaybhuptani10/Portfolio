import React from "react";
import react from "./Images/react.png";
import node from "./Images/node.png";
import lamp from "./Images/lamp.png";
import js from "./Images/js.png";
import python from "./Images/python.png";
import mongodb from "./Images/mongodb-icon.png";
import redux from "./Images/redux.png";
import reactRouter from "./Images/REACT ROUTER-2.png";
import GSAP from "./Images/GSAP.png";
import bootstrap from "./Images/bootstrap.png";
import html from "./Images/html.png";
import tailwind from "./Images/tailwind.png";
import css from "./Images/css.png";
import framer from "./Images/framerm.png";
import name from "./Images/skills.png";
import java from "./Images/java.png";
const Skills = () => {
  const row1 = [
    {
      name: "React",
      link: react,
    },
    {
      name: "Node",
      link: node,
    },
    {
      name: "JS",
      link: js,
    },
    {
      name: "MongoDB",
      link: mongodb,
    },
    {
      name: "python",
      link: python,
    },
  ];

  const row2 = [
    {
      name: "Redux",
      link: redux,
    },
    {
      name: "React Router",
      link: reactRouter,
    },
    {
      name: "GSAP",
      link: GSAP,
    },
    {
      name: "Bootstrap",
      link: bootstrap,
    },
    {
      name: "Tailwind",
      link: tailwind,
    },
  ];
  const row3 = [
    {
      name: "HTML",
      link: html,
    },
    {
      name: "CSS",
      link: css,
    },
    {
      name: "JAVA",
      link: java,
    },
    {
      name: "MYSQL",
      link: bootstrap,
    },
    {
      name: "Framer-motion",
      link: framer,
    },
  ];

  //const row2 = ["Redux", "React Router", "GSAP", "Bootstrap", "Framer-Motion"];
  //const row3 = ["HTML", "CSS", "Python", "MYSQL", "Tailwind"];
  return (
    <div className="flex items-centre justify-centre">
      <div className="wrapper ">
        <h3 className="text-3xl sm:text-6xl text-white dark:text-black">
          SKILLS
        </h3>
        <div className="marquee">
          <div className="marquee-group">
            {row1.map((item, index) => (
              <div className="item-group">
                <h1 className="marquee-text">{item.name}</h1>
                <img
                  key={index}
                  className="marquee-item"
                  src={item.link}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {row1.map((item, index) => (
              <div className="item-group">
                <h1 className="marquee-text">{item.name}</h1>
                <img className="marquee-item" src={item.link} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee ">
          <div className="marquee-group row-2">
            {row2.map((item, index) => (
              <div className="item-group">
                <h1 className="marquee-text">{item.name}</h1>
                <img
                  key={index}
                  className="marquee-item"
                  src={item.link}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="marquee-group row-2">
            {row2.map((item, index) => (
              <div className="item-group">
                <h1 className="marquee-text">{item.name}</h1>
                <img className="marquee-item" src={item.link} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-group">
            {row3.map((item, index) => (
              <div className="item-group">
                <h1 className="marquee-text">{item.name}</h1>
                <img
                  key={index}
                  className="marquee-item"
                  src={item.link}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {row3.map((item, index) => (
              <div className="item-group">
                <h1 className="marquee-text">{item.name}</h1>
                <img className="marquee-item" src={item.link} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
