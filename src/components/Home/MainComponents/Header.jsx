import React, { useEffect, useState, useContext } from "react";
import SekuLogo from "../../../images/logo3.webp";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../Context/LanguageContext";
import Night from "../../../images/night.svg"
import Sunny from "../../../images/sunny.svg"
import { useNavigate } from "react-router-dom";
import HeaderBar from "../../../images/header-bar.svg"
import "../../../css/Header.css"
import { motion } from "framer-motion";
import Close from "../../../images/close.svg"
import WhatsApp from "../../../images/ic--baseline-whatsapp.svg"

const Header = () => {
  const [cookies, setCookie] = useCookies(["darkMode"]);
  const [isDarkMode, setIsDarkMode] = useState(cookies.darkMode === "true"); 
  const {language} = useContext(LanguageContext);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode; 
    setIsDarkMode(newMode); 
    setCookie("darkMode", newMode, { path: "/", maxAge: 3600 }); 
  };

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = cookies.darkMode ? "dark-mode" : "light-mode";

    const header = document.querySelector(".header");
    if (header) {
      if (cookies.darkMode) {
        header.classList.add("dark-mode");
        header.classList.remove("light-mode");
      } else {
        header.classList.add("light-mode");
        header.classList.remove("dark-mode");
      }
    }
  }, [isDarkMode]); 

  return (
    <>
      {offcanvasOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOffcanvasOpen(false)}
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: offcanvasOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 end-0 h-full bg-white  p-5 shadow-lg z-50 w-full sm:w-[300px] lg:w-[300px]"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <img src={Close} className="w-[35px] cursor-pointer" alt="Close" onClick={() => setOffcanvasOpen(false)} />
            </div>
            <ul className="space-y-3 mt-4">
              <li><a href="/Home"  className="hover:underline text-black transition-all inter-500 text-2xl">Anasayfa</a></li>
              <li><a href="/PlanInfo" className="hover:underline text-black transition-all inter-500 text-2xl">Bilgi Al</a></li>
              <li><a href="/OrderNow" className="hover:underline text-black transition-all inter-500 text-2xl">Sipariş Ver</a></li>
              <li><a href="/Support" className="hover:underline text-black transition-all inter-500 text-2xl">Destek Talebi Oluştur</a></li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={WhatsApp} className="w-[45px]" alt="WhatsApp" />
            <p className="inter-500 text-xl sm:block hidden">İletişim için tıklayın</p>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-between bg-white p-5 header select-none">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/home")}>
          <img
            src={SekuLogo}
            className="sm:w-[70px] w-[45px] drop-shadow-lg"
            alt="Seku Software Logo"
          />
          <p className="roboto-light text-3xl sm:block hidden">Seku Software</p>
        </div>
        <div className="flex items-center">
          <div className="theme-toggle me-3 sm:flex hidden">
            <img src={Sunny} className={`w-[25px] ${cookies.darkMode == true ? "invert" : ""} me-3`} alt="Sunny svg" />
            <div
              className={`toggle-switch ${cookies.darkMode ? "dark" : "light"}`}
              onClick={toggleTheme}
            >
              <div className="toggle-circle"></div>
            </div>
            <img src={Night} className={`w-[25px] ${cookies.darkMode == true ? "invert" : ""} ms-2`} alt="Night svg" />
          </div>
          <button className="transition-all duration-300 px-4 py-2 rounded-lg text-white roboto-light bg-sky-600 roboto-regular text-lg cursor-pointer outline-0 sm:block hidden me-4" onClick={() => navigate("/OrderNow")}>{language == "en" ? "Order Now" : "Sipariş ver"}</button>
          <img src={HeaderBar} className={`w-[35px] ${cookies.darkMode ? "invert" : ""} cursor-pointer`} onClick={() => setOffcanvasOpen(true)} alt="Bar" />
        </div>
      </div>
    </>
  );
};

export default Header;
