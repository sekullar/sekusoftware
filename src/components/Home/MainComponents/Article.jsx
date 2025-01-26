import mainPhoto from "../../../images/mainPhoto.svg"
import Marquee from "react-fast-marquee";
import DownArrow from "../../../images/downArrow.svg"
import "../../../css/Article.css"
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

const Article = () => {

    const images = [mainPhoto,mainPhoto,mainPhoto,mainPhoto]

    const {language} = useContext(LanguageContext)

    return(
        <>
            <div className="flex justify-center w-full absolute bottom-0 mb-12">
                <img src={DownArrow} className="w-[50px] downArrowAni"  alt="" />
            </div>
            <div className="flex w-full flex-col h-screen-spec items-top overflow-hidden">
                <div  className="w-full" style={{overflow: "hidden", position: "relative"}}>
                    <Marquee gradient={false} speed={50}>
                        {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} className="h-[300px]"/>
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
                    <button className="outline-0 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500 px-4 py-2 rounded-lg w-[150px] text-xl">{language == "en" ? "Order Now" : "Sipariş Ver"}</button>
                    <button className="outline-0 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500 px-4 py-2 rounded-lg w-[150px] text-xl">{language == "en" ? "Get Information" : "Bilgi al"}</button>
                </div>
            </div>
        </>
    )
} 

export default Article