import mainPhoto4 from "../../../images/mainPhoto4.svg"
import { useCookies } from "react-cookie";
import Diamond from "../../../images/diamond.svg"
import Fast from "../../../images/fast.svg"
import Rocket from "../../../images/rocket.svg"
import Secure from "../../../images/secure.svg"
import Support from "../../../images/support.svg"


const WhyUsMain = () => {

    const [cookies, setCookie] = useCookies(["darkMode"]);

    return(
        <>
            <div className="mt-24">
                <p className="inter-600 text-5xl ms-12 text-center">Neden mi <span className="roboto-light">Seku Software</span>?</p>
                <div className="flex justify-around mt-20 gap-12">
                    <img src={mainPhoto4} loading="lazy" alt="Some Software Icons" />
                    <div className="flex flex-col">
                        <p className="text-5xl inter-600">Çünkü:</p>
                        <div className="flex flex-col mt-12  gap-12">
                            <div className="flex items-center gap-2">
                                <img src={Rocket} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col">
                                    <p className="inter-500 text-2xl w-[500px]">Sitelerimiz ve yazılımlarımız yapılabilinecek en son hızda hazırlanmaktadır</p>
                                    <p className="inter-400">Evet, bazen mesai saatlerimiz uyuklayınca bitiyor.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Diamond} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col">
                                    <p className="inter-500 text-2xl w-[500px]">Hazır şablon yok. Tamamen özel tasarım</p>
                                    <p className="inter-400">Bizde bas geç yok, sen nasıl istersen.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Fast} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col">
                                    <p className="inter-500 text-2xl w-[500px]">Hızlı, Performanslı, Optimize yazılımlar</p>
                                    <p className="inter-400">Sitelerimiz ve yazılımlarımız son model Bugatti'yle yarışır.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Secure} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col">
                                    <p className="inter-500 text-2xl w-[500px]">Güvenlik ve Koruma her zaman var.</p>
                                    <p className="inter-400">Sitenin kapısında bekçi değil, özel koruma ekibi duruyor.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={Support} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col">
                                    <p className="inter-500 text-2xl w-[500px]">Aktif İletişim, Hızlı Teknik Destek</p>
                                    <p className="inter-400">Bir sorun mu oldu? Bir telefon uzağındayız.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUsMain