import React, { useEffect, useState, useContext } from "react";
import SekuLogo from "../../../images/logo3.svg";
import { useCookies } from "react-cookie";
import { LanguageContext } from "../Context/LanguageContext";
import Night from "../../../images/night.svg"
import Sunny from "../../../images/sunny.svg"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [cookies, setCookie] = useCookies(["darkMode"]);
  const [isDarkMode, setIsDarkMode] = useState(cookies.darkMode === "true"); 
  const {language} = useContext(LanguageContext);

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
      <div className="flex items-center justify-between bg-white p-5 header select-none">
        <div className="flex items-center gap-3" onClick={() => navigate("/home")}>
          <img
            src={SekuLogo}
            className="w-[70px] drop-shadow-lg"
            alt="Seku Software Logo"
          />
          <p className="roboto-light text-3xl">Seku Software</p>
        </div>
        <div className="flex items-center">
          <div className="theme-toggle me-3">
            <img src={Sunny} className={`w-[25px] ${cookies.darkMode == true ? "invert" : ""} me-3`} alt="Sunny svg" />
            <div
              className={`toggle-switch ${cookies.darkMode ? "dark" : "light"}`}
              onClick={toggleTheme}
            >
              <div className="toggle-circle"></div>
            </div>
            <img src={Night} className={`w-[25px] ${cookies.darkMode == true ? "invert" : ""} ms-2`} alt="Night svg" />
          </div>
          <button className="transition-all duration-300 px-4 py-2 rounded-lg text-white roboto-light bg-sky-600 roboto-regular text-lg cursor-pointer outline-0" onClick={() => navigate("/OrderNow")}>{language == "en" ? "Order Now" : "Sipariş ver"}</button>

         </div>
      </div>
    </>
  );
};

export default Header;
