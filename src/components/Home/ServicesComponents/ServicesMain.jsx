import Professional from "../../../images/professional.svg"
import Shop from "../../../images/shop.svg"
import QRSvg from "../../../images/qr.svg"
import Love from "../../../images/love.svg"
import Right from "../../../images/right.svg"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useEffect, useState, useRef } from "react";


const ServicesMain = () => {

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(["darkMode"]);

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.2 }
        )
    
        if (ref.current) observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, []);

    return(
        <>
            <div ref={ref} className={`flex flex-col items-center mt-32 select-none py-24 transition-all duration-[1.5s] ${isVisible ? "opacity-100" : "opacity-0"}`} id="GetInfo">
                <p className="inter-600 sm:text-6xl text-3xl">Hizmetlerimiz</p>
                <div className="flex  flex-wrap justify-center sm:gap-4 gap-16 mt-6 ">
                    <a href="/ProfessionalSiteInfo" className={`flex flex-col sm:items-start items-center shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border ${cookies.darkMode ? "border-stone-700" : ""} border-stone-50 sm:w-[auto] w-[350px] transition-all hover:scale-[1.05] duration-[0.8s] hover:shadow-gray-700  h-[260px] sm:h-[220px] relative`}>
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={Professional} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-xl sm:text-3xl mt-2">Profesyonel Web Siteleri</p>
                        <p className="inter-400 mt-2 opacity-90 sm:text-left text-center">Profesyonel çalışmak isteyenler için profesyonel web siteleri</p>
                        <a href="/ProfessionalSiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </a>
                    <a href="/QRSiteInfo" className={`flex flex-col sm:items-start items-center shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 sm:w-[auto] w-[350px] transition-all hover:scale-[1.05] duration-[0.8s] hover:shadow-gray-700  h-[220px] sm:h-[220px] relative ${cookies.darkMode ? "border-stone-700" : ""}`}>
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={QRSvg} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-xl sm:text-3xl mt-2">QR Menüler</p>
                        <p className="inter-400 mt-2 opacity-90 sm:text-left text-center">QR okutarak açılan menüler/siteler</p>
                        <a href="/QRSiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </a>
                    <a href="/MemorySiteInfo" className={`flex flex-col sm:items-start items-center shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 sm:w-[auto] w-[340px] transition-all hover:scale-[1.05] duration-[0.8s] hover:shadow-gray-700  h-[230px] sm:h-[220px] relative ${cookies.darkMode ? "border-stone-700" : ""}`}>
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={Love} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-xl sm:text-3xl mt-2">Anı web sitesi</p>
                        <p className="inter-400 mt-2 opacity-90 sm:text-left text-center">En güzel anılarınızı siteye koymak ve göstermek için web siteleri</p>
                        <a href="/MemorySiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </a>
                    <a href="/PromotionSiteInfo" className={`flex flex-col sm:items-start items-center shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 sm:w-[auto] w-[350px] transition-all hover:scale-[1.05] duration-[0.8s] hover:shadow-gray-700  h-[230px] sm:h-[220px] ${cookies.darkMode ? "border-stone-700" : ""} relative`}>
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={Shop} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-xl sm:text-3xl mt-2">Tanıtım siteleri</p>
                        <p className="inter-400 mt-2 opacity-90 sm:text-left text-center">İşletmenizi tanıtmak ve bilgi vermek için web siteleri</p>
                        <a href="/PromotionSiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </a>
                </div>
                <a href="/PlanInfo" className="sm:mt-12 mt-16 bg-sky-500 hover:bg-sky-600 transition-all duration-300 inter-500 text-xl px-4 py-2 rounded-lg text-white">Fiyat planlarımız</a>
            </div>
        </>
    )
}

export default ServicesMain