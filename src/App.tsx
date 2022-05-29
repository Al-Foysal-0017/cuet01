/* eslint-disable import/no-anonymous-default-export */
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./_app.scss";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Footer from "./components/footer";

export default () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  return (
    <BrowserRouter>
      <div style={{ position: "absolute", width: "100%", zIndex: "9999999" }}>
        <NavbarMain />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
