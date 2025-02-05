import Professional from "../../../images/professional.svg"
import Shop from "../../../images/shop.svg"
import QRSvg from "../../../images/qr.svg"
import Love from "../../../images/love.svg"
import Right from "../../../images/right.svg"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"


const ServicesMain = () => {

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(["darkMode"]);

    return(
        <>
            <div className="flex flex-col items-center mt-32 select-none py-24" id="GetInfo">
                <p className="inter-600 text-6xl">Hizmetlerimiz</p>
                <div className="flex items-center gap-4 mt-6 ">
                    <div className="flex flex-col shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 h-[220px] relative">
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={Professional} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-3xl mt-2">Profesyonel Web Siteleri</p>
                        <p className="inter-400 mt-2 opacity-90">Profesyonel çalışmak isteyenler için profesyonel web siteleri</p>
                        <a href="/ProfessionalSiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </div>
                    <div className="flex flex-col shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 h-[220px] relative">
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={QRSvg} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-3xl mt-2">QR Menüler</p>
                        <p className="inter-400 mt-2 opacity-90">QR okutarak açılan menüler/siteler</p>
                        <a href="/QRSiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </div>
                    <div className="flex flex-col shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 h-[220px] relative">
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={Love} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-3xl mt-2">Anı web sitesi</p>
                        <p className="inter-400 mt-2 opacity-90">En güzel anılarınızı siteye koymak ve göstermek için web siteleri</p>
                        <a href="/MemorySiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </div>
                    <div className="flex flex-col shadow-2xl p-5 px-8 items-start rounded-2xl max-w-[400px] border border-stone-50 h-[220px] relative">
                        <div className="bg-sky-600 rounded-full p-2">
                            <img src={Shop} className={`w-[35px] `} alt="Professional" />
                        </div>
                        <p className="inter-600 text-3xl mt-2">Tanıtım siteleri</p>
                        <p className="inter-400 mt-2 opacity-90">İşletmenizi tanıtmak ve bilgi vermek için web siteleri</p>
                        <a href="/PromotionSiteInfo" className="flex items-center absolute bottom-0 mb-4 opacity-80">Bilgi al <img src={Right} className={`w-[25px] ${cookies.darkMode ? "invert" :""}`} alt="Right" /></a>
                    </div>
                </div>
                <a href="/PlanInfo" className="mt-6 bg-sky-500 hover:bg-sky-600 transition-all duration-300 inter-500 text-xl px-4 py-2 rounded-lg">Fiyat planlarımız</a>
            </div>
        </>
    )
}

export default ServicesMain