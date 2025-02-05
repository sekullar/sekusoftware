import mainPhoto from "../../../images/mainPhoto.svg"
import Marquee from "react-fast-marquee";
import DownArrow from "../../../images/downArrow.svg"
import "../../../css/Article.css"
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import t1 from "../../../images/t1.png"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Article = () => {

    const images = [t1,t1,t1,t1,t1,t1,t1,t1,t1]

    const {language} = useContext(LanguageContext)
    const [cookies, setCookie] = useCookies(["darkMode"]);

    const navigate = useNavigate();

    return(
        <>
            <a href="#whyUs" className="flex justify-center w-full absolute bottom-0 mb-12 select-none">
                <img src={DownArrow} className="w-[50px] downArrowAni"  alt="" />
            </a>
            <div className="flex w-full flex-col h-screen-spec items-top overflow-hidden select-none">
                <div  className="w-full" style={{overflow: "hidden", position: "relative"}}>
                    <Marquee gradient={false} speed={50}>
                        {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} className={`h-[300px] ${cookies.darkMode ? "invert" : ""}`}/>
                        ))}
                    </Marquee>
                </div>
                {language == "en" ?
                <>
                    <div className="flex flex-col items-center mt-4 ">
                        <p className="inter-400 text-6xl text-center">On Websites</p>
                        <p className="inter-600 text-7xl text-center">Next-Generation Solutions!</p>
                    </div>

                </>
                :
                <>
                    <div className="flex flex-col items-center mt-4 ">
                        <p className="inter-400 text-6xl text-center">Web Sitelerinde</p>
                        <p className="inter-600 text-7xl text-center">Yeni Nesil Çözümler!</p>
                    </div>
                </>}
                <div className="flex items-center justify-center gap-3 mt-12">
                    <button className="outline-0 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500 px-4 py-2 rounded-lg w-[150px] text-xl" onClick={() => navigate("/OrderNow")}>{language == "en" ? "Order Now" : "Sipariş Ver"}</button>
                    <a href="#GetInfo" className="outline-0 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500 px-4 py-2 rounded-lg w-[150px] text-xl text-center">{language == "en" ? "Get Information" : "Bilgi al"}</a>
                </div>
            </div>
        </>
    )
} 

export default Article