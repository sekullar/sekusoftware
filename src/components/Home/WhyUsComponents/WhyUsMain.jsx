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
            <div className="pt-24 select-none" id="whyUs">
                <p className="inter-600 text-3xl sm:text-5xl sm:ms-12 text-center">Neden mi <br className="sm:hidden block"/> <span className="roboto-light">Seku Software</span>?</p>
                <div className="flex justify-around mt-10 sm:mt-20 gap-12">
                    <img src={mainPhoto4} className="xl:block hidden" loading="lazy" alt="Some Software Icons" />
                    <div className="flex flex-col">
                        <p className="text-4xl sm:text-5xl inter-600  sm:text-start text-center">Çünkü:</p>
                        <div className="flex flex-col sm:mt-12 mt-16  gap-20 sm:gap-12 ">
                            <div className="flex items-center sm:flex-row flex-col gap-2">
                                <img src={Rocket} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col sm:items-start items-center">
                                    <p className="inter-500 text-lg sm:text-2xl w-[320px] sm:w-[500px] sm:text-start text-center">Sitelerimiz ve yazılımlarımız yapılabilinecek en son hızda hazırlanmaktadır</p>
                                    <p className="inter-400 sm:text-base text-sm sm:text-start text-center sm:px-0 px-5">Evet, bazen mesai saatlerimiz uyuklayınca bitiyor.</p>
                                </div>
                            </div>
                            <div className="flex items-center sm:flex-row flex-col gap-2">
                                <img src={Diamond} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col sm:items-start items-center">
                                    <p className="inter-500 text-lg sm:text-2xl w-[320px] sm:w-[500px] sm:text-start text-center">Hazır şablon yok. Tamamen özel tasarım</p>
                                    <p className="inter-400 sm:text-base text-sm sm:text-start text-center sm:px-0 px-5">Bizde bas geç yok, sen nasıl istersen.</p>
                                </div>
                            </div>
                            <div className="flex items-center sm:flex-row flex-col gap-2">
                                <img src={Fast} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col sm:items-start items-center">
                                    <p className="inter-500 text-lg sm:text-2xl w-[320px] sm:w-[500px] sm:text-start text-center">Hızlı, Performanslı, Optimize yazılımlar</p>
                                    <p className="inter-400 sm:text-base text-sm sm:text-start text-center sm:px-0 px-5">Sitelerimiz ve yazılımlarımız son model Bugatti'yle yarışır.</p>
                                </div>
                            </div>
                            <div className="flex items-center sm:flex-row flex-col gap-2">
                                <img src={Secure} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col sm:items-start items-center">
                                    <p className="inter-500 text-lg sm:text-2xl w-[320px] sm:w-[500px] sm:text-start text-center">Güvenlik ve Koruma her zaman var.</p>
                                    <p className="inter-400 sm:text-base text-sm sm:text-start text-center sm:px-0 px-5">Sitenin kapısında bekçi değil, özel koruma ekibi duruyor.</p>
                                </div>
                            </div>
                            <div className="flex items-center sm:flex-row flex-col gap-2">
                                <img src={Support} className={`w-[35px] ${cookies.darkMode ? "invert" : ""}`}  alt="" />
                                <div className="flex flex-col sm:items-start items-center">
                                    <p className="inter-500 text-lg sm:text-2xl w-[320px] sm:w-[500px] sm:text-start text-center">Aktif İletişim, Hızlı Teknik Destek</p>
                                    <p className="inter-400 sm:text-base text-sm sm:text-start text-center sm:px-0 px-5">Bir sorun mu oldu? Bir telefon uzağındayız.</p>
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