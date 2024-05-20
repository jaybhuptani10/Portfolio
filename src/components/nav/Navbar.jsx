import React, { useState } from "react";
import Panel from "./Panel";
import "./style.css";
import Left from "../home/Left";
import Right from "../home/Right";
import { useLocation } from "react-router-dom";

const Navbar = ({}) => {
  const [navbar, setNavbar] = useState(true);
  const panelList = [
    {
      Title: "Home",
      link: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      Title: "Profile",
      link: "https://images.unsplash.com/photo-1572361050255-002ce82a888c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      Title: "Skills",
      link: "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      Title: "Experience",
      link: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      Title: "Projects",
      link: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      Title: "Contact Me",
      link: "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="Main flex relative">
      <div className="left">
        <Left />
      </div>
      <div className="centre">
        <div className="nav-main py-5 sm:py-0 sm:overflow-hidden flex flex-wrap flex-col sm:flex-row">
          {panelList.map((panel, index) => (
            <Panel key={index} index={index} panel={panel} />
          ))}
        </div>
      </div>
      <div className="right">
        <Right navbar={navbar} setNavbar={setNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
