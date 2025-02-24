import Marquee from "react-fast-marquee";
import DownArrow from "../../../images/downArrow.svg"
import "../../../css/Article.css"
import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import t1 from "../../../images/t1.webp"



const Article = () => {

    const images = [t1,t1,t1,t1,t1,t1,t1,t1,t1]

    const {language} = useContext(LanguageContext)
    const [cookies, setCookie] = useCookies(["darkMode"]);

    

    const navigate = useNavigate();

    
    
  

    return(
        <>
           
            <div className={`flex w-full flex-col h-screen-spec items-top overflow-hidden select-none relative transition-all duration-300 z-10`}>
                <a href="#whyUs" className="flex justify-center w-full absolute bottom-0 mb-12 select-none downImage">
                    <img src={DownArrow} className="w-[50px] downArrowAni"  alt="" />
                </a>
                <div  className="w-full slider z-0" style={{overflow: "hidden", position: "relative"}}>
                    <Marquee gradient={true} speed={50}>
                        {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} width={"auto"} height={"300px"} className={` h-[150px] sm:h-[300px] ${cookies.darkMode ? "invert" : ""}`}/>
                        ))}
                    </Marquee>
                </div>
                {language == "en" ?
                <>
                    <div className="flex flex-col items-center mt-12 sm:mt-4 ">
                        <p className="inter-400 sm:text-6xl text-3xl text-center mainLabel1">On Websites</p>
                        <p className="inter-600 sm:text-7xl text-4xl text-center mainLabel2">Next-Generation Solutions!</p>
                    </div>

                </>
                :
                <>
                    <div className="flex flex-col items-center mt-12 sm:mt-4 ">
                        <p className="inter-400 sm:text-6xl text-3xl text-center mainLabel1">Web Sitelerinde</p>
                        <p className="inter-600 sm:text-7xl text-4xl text-center mainLabel2">Yeni Nesil Çözümler!</p>
                    </div>
                </>}
                <div className="flex items-center justify-center gap-3  mt-4 sm:mt-6 doubleButtons">
                    <button className="outline-0 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500 px-3 sm:px-4 py-2 rounded-lg w-[150px] text-lg sm:text-xl" onClick={() => navigate("/OrderNow")}>{language == "en" ? "Order Now" : "Sipariş Ver"}</button>
                    <a href="#GetInfo" className="outline-0 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500  px-3 sm:px-4 py-2 rounded-lg w-[150px] text-lg sm:text-xl text-center">{language == "en" ? "Get Information" : "Bilgi al"}</a>
                </div>
            </div>
        </>
    )
} 

export default Article