import React from "react";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
