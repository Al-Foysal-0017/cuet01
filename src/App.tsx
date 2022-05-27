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
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";

export default () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  return (
    <BrowserRouter>
      <div style={{ position: "fixed", width: "100vw", zIndex: "9999999" }}>
        <NavbarMain />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
