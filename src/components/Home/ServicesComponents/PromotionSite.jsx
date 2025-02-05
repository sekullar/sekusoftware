import Header from "../MainComponents/Header"
import Ok from "../../../images/ok.svg"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import Page from "../../../images/page.svg"
import Footer from "../MainComponents/Footer"
import Modal from 'react-modal';
import Close from "../../../images/close.svg"
import { useState } from "react";
import Right from "../../../images/right.svg"



const ProfessionalSite = () => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const [modalOpen,setModalOpen] = useState(false);

    const [cookies, setCookie] = useCookies(["darkMode"]);
    const navigate = useNavigate();

    return(
        <>
            <Modal style={customStyles} isOpen={modalOpen}>
                <div className="flex flex-col max-h-[600px]">
                    <div className="flex justify-end items-center">
                        <img src={Close} className="w-[45px]" onClick={() => setModalOpen(!modalOpen)} alt="Close" />
                    </div>
                    <div className={`flex flex-col items-center sm:w-[550px] overflow-auto`}>
                        <p className="text-2xl inter-600 text-black">Bu paketin yanında alabileceğiniz ek paketler</p>
                        <div className="flex flex-col gap-5 sm:w-[500px] overflow-auto">
                            <div className="flex justify-between border-b pb-3 mt-4">
                                <p className="inter-500 text-black">İsteğe bağlı hizmet <br /> geliştirme</p>
                                <p className="inter-500 text-black">99TL - 6999TL</p>
                            </div>
                            <div className="flex justify-between items-center border-b pb-3">
                                <p className="inter-500 text-black">Trello revizyon takip <br /> (+150 revizyon hakkı)</p>
                                <p className="inter-500 text-black">799TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3 ">
                                <p className="inter-500 text-black">İçerik Yönetim Paneli</p>
                                <p className="inter-500 text-black">699TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Ek revizyon hakkı (+10)</p>
                                <p className="inter-500 text-black">349TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3 ">
                                <p className="inter-500 text-black">Ek sayfa + Tasarım</p>
                                <p className="inter-500 text-black">299TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Fotoğraf yedekleme hizmeti</p>
                                <p className="inter-500 text-black">299TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Ek dil desteği (Dil Başına)</p>
                                <p className="inter-500 text-black">299TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">E-Posta adresi kurulumu</p>
                                <p className="inter-500 text-black">299TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Analiz hizmeti</p>
                                <p className="inter-500 text-black">199TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Özel form ve anketler</p>
                                <p className="inter-500 text-black">199TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Google Sıralama ve Aratılma</p>
                                <p className="inter-500 text-black">99TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Siteye QR Tanımlama</p>
                                <p className="inter-500 text-black">99TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Hız optimizasyonu</p>
                                <p className="inter-500 text-black">99TL</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </Modal>
            <Header />
            <div className="flex flex-col">
                <p className="inter-600 text-2xl sm:text-6xl text-center">Tanıtım Web Sitesi</p>
                <div className="flex items-center px-4 mt-12 justify-center">
                    <p className="inter-500 text-lg sm:w-1/2 select-none">İşletmenizin dijital dünyada etkileyici bir ilk izlenim bırakmasını ister misiniz? Tanıtım Web Sitesi, markanızı en iyi şekilde yansıtacak modern, şık ve profesyonel bir web sitesi sunar. Müşterilerinizin sizi daha iyi tanımasını sağlarken, sunduğunuz hizmetler hakkında detaylı bilgi alabilecekleri kullanıcı dostu bir deneyim sunar.<br /><br />Tanıtım Web Sitesi Paketi, işletmelerin kurumsal kimliğini güçlendirmesi, müşteri güvenini artırması ve online görünürlüğünü sağlamlaştırması için tasarlanmıştır. Mobil uyumlu, hızlı yüklenen, SEO dostu ve şık bir tasarıma sahip olan bu paket, firmanızı en iyi şekilde temsil eder.<br /><br />Eğer siz de işletmenizi dijital dünyada profesyonel bir şekilde tanıtmak, müşterilerinizin güvenini kazanmak ve online varlığınızı güçlendirmek istiyorsanız, Seku Software’in Tanıtım Web Sitesi Paketini keşfedin! </p>
                </div>
                <div className="flex flex-col items-center px-4 mt-24 justify-center gap-5">
                    <p className="inter-600 text-2xl sm:text-4xl text-center">Neden Tanıtım Web Sitesi tercih etmelisiniz?</p>
                    <p className="inter-500 text-lg sm:w-[600px] lg:w-[800px] text-center">İşletmenizi tanıtmak ve bilgi sağlamak istiyorsanız, müşterilerinize kendinizi en iyi şekilde tanıtmak istiyorsanız; <br /> <span className="inter-600 text-xl sm:text-3xl">bu paketi seçmelisiniz.</span></p>
                </div>
                <div className="flex justify-center mt-32">
                <div className={`flex flex-col mt-5 ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer p-5 rounded-lg  px-8 hover:border-sky-200 `}>
                    <p className="inter-600 text-3xl text-center">İşletme tanıtım sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500 py-3 border-b flex items-center flex items-center"><img src={Page} className={`w-[20px] me-2 ${cookies.darkMode ? "invert" : ""}`} alt="Page" />10 Sayfa (Hakkımızda, Blog dahil)</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500  py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel SEO</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Sosyal Medya Entegrasyonu</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />15 Ön yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />15 Arka yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500 py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Bakım & Teknik Destek</p>
                    </div>
                    <div className="flex flex-col mt-auto">
                        <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 7.999₺</p>
                        <p className="inter-600 text-lg text-center mt-3">Sonrasında aylık 1.999₺</p>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg text-center py-2 px-4 text-white inter-500 transition-all duration-300 mt-5" onClick={() => navigate("/OrderNow")}>Satın Al</button>
                    </div>
                </div>
                </div>
                <p className="text-center inter-500 text-sm mt-6 sm:mt-2 text-underline flex justify-center items-center" onClick={() => setModalOpen(!modalOpen)}>Bu hizmetin yanında <br className="sm:hidden block"/> alabileceğiniz ek paketler <img src={Right} className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} alt="Right" /></p>

            </div>
            <Footer />
        </>
    )
}

export default ProfessionalSite