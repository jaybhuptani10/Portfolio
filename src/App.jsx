import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./components/home/Pages/Page2";
import ScrollToHashElement from "./components/home/ScrollHashElement";
import SmoothScroll from "./components/utils/SmoothScroll";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/#Profile" Component={Page2} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
