import React, { useEffect, useState } from "react";
import SekuLogo from "../../images/logo3.svg";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie] = useCookies(["darkMode"]);
  const [isDarkMode, setIsDarkMode] = useState(cookies.darkMode === "true"); 

  const toggleTheme = () => {
    const newMode = !isDarkMode; 
    setIsDarkMode(newMode); 
    setCookie("darkMode", newMode, { path: "/", maxAge: 3600 }); 
  };

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
      <div className="flex items-center justify-between bg-white p-5 header">
        <div className="flex items-center gap-3">
          <img
            src={SekuLogo}
            className="w-[100px] drop-shadow-lg"
            alt="Seku Software Logo"
          />
          <p className="roboto-light text-3xl">Seku Software</p>
        </div>
        <div className="flex items-center">
          <div className="theme-toggle">
            <div
              className={`toggle-switch ${cookies.darkMode ? "dark" : "light"}`}
              onClick={toggleTheme}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
