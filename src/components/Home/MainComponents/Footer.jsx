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
            <div className="flex justify-around mt-56 py-12">
                <img src={Logo} className="w-[100px]" alt="Logo" />
                <div className="flex flex-col">
                    <p className="inter-600 text-3xl">Hızlı Menü</p>
                    <div className="flex flex-col mt-6 gap-3">
                        <a className="flex items-center gap-2" href="/home"><img src={Home}  alt="Support" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>Anasayfa</a>
                        <a className="flex items-center gap-2" href="/OrderNow"><img src={Order}  alt="Order" className={`w-[35px] ${cookies.darkMode ? "" : "invert"}`}/>Sipariş Ver</a>
                        <a className="flex items-center gap-2" href="/PlanInfo"><img src={Packages}  alt="Packages" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>Paketler</a>
                        <a className="flex items-center gap-2" href="/PlanInfo"><img src={Info}  alt="Info" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>Bilgi Al</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="inter-600 text-3xl">Yardım ve Destek</p>
                    <div className="flex flex-col mt-6 gap-3">
                        <a className="flex items-center gap-2" href="/Support"><img src={Support2}  alt="Support" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>Destek Talebi Oluştur</a>
                        <a className="flex items-center gap-2" href="#"><img src={FAQ}  alt="FAQ" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>S.S.S.</a>
                        <a className="flex items-center gap-2" href="/ShopTerms"><img src={Shop2}  alt="Sipariş şartları" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>Sipariş Şartları</a>
                        <a className="flex items-center gap-2" href="#"><img src={Privacy}  alt="Gizlilik Politikası" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}/>Gizlilik Politikası</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="inter-600 text-3xl">İletişim</p>
                    <div className="flex flex-col mt-6 gap-3">
                        <a className="flex items-center gap-2" href="https://wa.me/380955380590"><img src={WhatsApp} alt="WhatsApp" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`} />WhatsApp için tıklayın</a>
                        <a className="flex items-center gap-2" href="mail:sekusoftware@gmail.com"><img src={Mail} alt="Mail" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`} />sekusoftware@gmail.com</a>
                        <a className="flex items-center gap-2" href="https://www.instagram.com/sekusoftware"><img src={Instagram} alt="Mail" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`} />sekusoftware</a>
                        <a className="flex items-center gap-2" href="/Support"><img src={Support2} alt="Mail" className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`} />Destek Talebi Oluştur</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer