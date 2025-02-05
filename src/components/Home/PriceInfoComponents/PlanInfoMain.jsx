import { useNavigate } from "react-router-dom"
import Header from "../MainComponents/Header"
import Page from "../../../images/page.svg"
import Ok from "../../../images/ok.svg"
import False from "../../../images/false.svg"
import King from "../../../images/king.svg"
import "../../../css/PriceInfo.css"
import { useCookies } from "react-cookie"
import Footer from "../MainComponents/Footer"

const PlanInfoMain = () => {

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(["darkMode"]);
    
    return(
        <>
            <Header/>
            <div className="flex  gap-3 justify-center flex-wrap px-5 select-none">
                <div className={`flex flex-col mt-5 ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer p-5 rounded-lg   px-8 hover:border-sky-200 transition-all duration-300`}>
                    <p className="inter-600 text-3xl text-center">Profesyonel Web Sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500  py-3 border-b flex items-center flex items-center"><img src={Page} className={`w-[20px] me-2 ${cookies.darkMode ? "invert" : ""}`} alt="Page" />14 Sayfa içeriği (Hakkımızda, Blog vs. dahil)</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz e-pos entegrasyonu</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel SEO</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Hız optimizasyonu</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Sosyal Medya Entegrasyonu</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />20 Ön yüz revizyon hakkı</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />20 Arka yüz revizyon hakkı</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Google Sıralamaya Girme</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Üyelik sistemleri</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500  py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Bakım & Teknik Destek</p>
                    </div>
                    <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 17.199₺</p>
                    <p className="inter-600 text-xl text-center mt-3">Sonrasında Aylık: 5.999₺</p>
                    <button className="bg-sky-500 hover:bg-sky-600 rounded-lg text-center py-2 px-4 text-white inter-500 transition-all duration-300 mt-5" onClick={() => navigate("/OrderNow")}>Satın Al</button>
                </div>
                <div className={`flex flex-col mt-5 ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer p-5 rounded-lg  px-8 hover:border-sky-200 `}>
                    <p className="inter-600 text-3xl text-center">İşletme tanıtım sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500 py-3 border-b flex items-center flex items-center"><img src={Page} className="w-[20px] me-2" alt="Page" />10 Sayfa (Hakkımızda, Blog dahil)</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel SEO</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Sosyal Medya Entegrasyonu</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />15 Ön yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />15 Arka yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500 py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Bakım & Teknik Destek</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Ücretsiz e-pos entegrasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Hız optimizasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Google Sıralamaya Girme</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Üyelik Sistemleri</span></p>
                    </div>
                    <div className="flex flex-col mt-auto">
                        <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 7.999₺</p>
                        <p className="inter-600 text-lg text-center mt-3">Sonrasında aylık 1.999₺</p>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg text-center py-2 px-4 text-white inter-500 transition-all duration-300 mt-5" onClick={() => navigate("/OrderNow")}>Satın Al</button>
                    </div>
                </div>
                <div className={`flex flex-col mt-5 ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer p-5 rounded-lg  hover:border-sky-200 transition-all duration-300 px-8`}>
                    <p className="inter-600 text-3xl text-center">QR Menü sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500 py-3 border-b flex items-center flex items-center"><img src={Page} className="w-[20px] me-2" alt="Page" />Tek Sayfa</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Sosyal Medya Entegrasyonu</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Ön yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Arka yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500 py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Teknik Destek</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Ücretsiz e-pos entegrasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Temel SEO</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Hız Optimizasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Google Sıralamaya Girme</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Üyelik Sistemleri</span></p>
                    </div>
                    <div className="flex flex-col mt-auto">
                        <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 5.199₺</p>
                        <p className="inter-600 text-xl text-center mt-3">Sonrasında Aylık: 1.499₺</p>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg text-center py-2 px-4 text-white inter-500 transition-all duration-300 mt-5" onClick={() => navigate("/OrderNow")}>Satın Al</button>
                    </div>
                </div>
                <div className={`flex flex-col mt-5  p-5 rounded-lg ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer hover:border-sky-200 transition-all duration-300 px-8`}>
                    <p className="inter-600 text-3xl text-center">Anı web sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500 py-3 border-b flex items-center flex items-center"><img src={Page} className="w-[20px] me-2" alt="Page" />Tek Sayfa</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Ön yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Arka yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500 py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Teknik Destek</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Ücretsiz e-pos entegrasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Sosyal Medya Entegrasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Temel SEO</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Hız Optimizasyonu</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Google Sıralamaya Girme</span></p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={False} className="w-[20px] me-2 opacity-100" alt="Okey" /><span className="opacity-50">Üyelik Sistemleri</span></p>
                    </div>
                    <div className="flex flex-col mt-auto">
                        <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 2.199₺</p>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg text-center py-2 px-4 text-white inter-500 transition-all duration-300 mt-5" onClick={() => navigate("/OrderNow")}>Satın Al</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12 py-12">
                <div className={`flex justify-around items-center px-12 gap-36 ${!cookies.darkMode ? "shadow-2xl border" : ""} bg-stone-900 mx-12 py-4 rounded-lg`}>
                    <div className="flex flex-col">
                        <p className="inter-600 text-5xl flex items-center animated-text-blue py-2"><img src={King} alt="King" className="w-[50px] me-2"/>Özel Web Sitesi</p>
                        <p className="inter-500 text-white inter-500">Her şeyin en baştan özel olarak tasarlandığı siteler</p>
                        <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-600 rounded-lg px-4 py-2 outline-0 mt-4" onClick={() => navigate("/OrderNow")}>Detayları görüşelim</button>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <p className="inter-500 py-3 border-b flex items-center text-white">Sınrsız sayfa içeriği</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Ücretsiz Hosting</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Ücretsiz e-pos entegrasyonu</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Yüksek SEO</p>
                            <p className="inter-500 py-3 flex items-center text-white">Hız optimizasyonu</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="inter-500 py-3 border-b flex items-center text-white">Sosyal Medya Entegrasyonu</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Sınırsız Ön yüz revizyon hakkı</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Sınırsız Arka yüz revizyon hakkı</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Google Sıralamaya Girme</p>
                            <p className="inter-500 py-3  flex items-center text-white">SSL Sertifikası</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="inter-500 py-3 border-b flex items-center text-white">Üyelik sistemleri</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Temel Güvenlik</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Admin Paneli</p>
                            <p className="inter-500 py-3 border-b flex items-center text-white">Analiz desteği</p>
                            <p className="inter-500 py-3  flex items-center text-white">Bakım & Teknik Destek</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PlanInfoMain