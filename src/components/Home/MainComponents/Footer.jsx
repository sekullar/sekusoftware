import Logo from "../../../images/logo3.svg"
import WhatsApp from "../../../images/ic--baseline-whatsapp.svg"
import { useCookies } from "react-cookie";
import Mail from "../../../images/mail.svg"
import Instagram from "../../../images/instagram.svg"
import Support2 from "../../../images/support2.svg"
import FAQ from "../../../images/faq.svg"
import Shop2 from "../../../images/shop2.svg"
import Privacy from "../../../images/privacy.svg"
import Home from "../../../images/home.svg"
import Order from "../../../images/shop.svg"
import Packages from "../../../images/packages.svg"
import Info from "../../../images/info.svg"

const Footer = () => {

    const [cookies, setCookie] = useCookies(["darkMode"]);

    return(
        <>
            <div className="flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-20 lg:justify-around sm:mt-56 mt-24 py-12">
                <img loading="lazy" src={Logo} className="w-[100px]" alt="Logo" />
                <div className="flex flex-col">
                    <p className="inter-600 text-3xl">Hızlı Menü</p>
                    <div className="flex flex-col mt-6 gap-3">
                        <a className="flex items-center gap-2" href="/home"><img loading="lazy" src={Home}  alt="Support" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>Anasayfa</a>
                        <a className="flex items-center gap-2" href="/OrderNow"><img loading="lazy" src={Order}  alt="Order" className={`w-[30px] ${cookies.darkMode ? "" : "invert"}`}/>Sipariş Ver</a>
                        <a className="flex items-center gap-2" href="/PlanInfo"><img loading="lazy" src={Packages}  alt="Packages" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>Paketler</a>
                        <a className="flex items-center gap-2" href="/PlanInfo"><img loading="lazy" src={Info}  alt="Info" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>Bilgi Al</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="inter-600 text-3xl">Yardım ve Destek</p>
                    <div className="flex flex-col mt-6 gap-3">
                        <a className="flex items-center gap-2" href="/Support"><img loading="lazy" src={Support2}  alt="Support" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>Destek Talebi Oluştur</a>
                        <a className="flex items-center gap-2" href="#"><img loading="lazy" src={FAQ}  alt="FAQ" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>S.S.S.</a>
                        <a className="flex items-center gap-2" href="/ShopTerms"><img loading="lazy" src={Shop2}  alt="Sipariş şartları" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>Sipariş Şartları</a>
                        <a className="flex items-center gap-2" href="#"><img loading="lazy" src={Privacy}  alt="Gizlilik Politikası" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`}/>Gizlilik Politikası</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="inter-600 text-3xl">İletişim</p>
                    <div className="flex flex-col mt-6 gap-3">
                        <a className="flex items-center gap-2" href="https://wa.me/380955380590"><img loading="lazy" src={WhatsApp} alt="WhatsApp" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} />WhatsApp için tıklayın</a>
                        <a className="flex items-center gap-2" href="mail:sekusoftware@gmail.com"><img loading="lazy" src={Mail} alt="Mail" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} />sekusoftware@gmail.com</a>
                        <a className="flex items-center gap-2" href="https://www.instagram.com/sekusoftware"><img loading="lazy" src={Instagram} alt="Mail" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} />sekusoftware</a>
                        <a className="flex items-center gap-2" href="/Support"><img loading="lazy" src={Support2} alt="Mail" className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} />Destek Talebi Oluştur</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer