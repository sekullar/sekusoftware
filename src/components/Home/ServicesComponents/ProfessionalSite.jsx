import Header from "../MainComponents/Header"
import Ok from "../../../images/ok.svg"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import Page from "../../../images/page.svg"
import Footer from "../MainComponents/Footer"
import Close from "../../../images/close.svg"
import { useState } from "react";
import Right from "../../../images/right.svg"
import Modal from 'react-modal';
import "../../../css/InfoSite.css"

const ProfessionalSite = () => {

    const [cookies, setCookie] = useCookies(["darkMode"]);
    const navigate = useNavigate();

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          overflow:"auto",
          
        },
      };

    const [modalOpen,setModalOpen] = useState(false);

    return(
        <>
            <Modal style={customStyles} isOpen={modalOpen}>
                <div className="flex flex-col max-h-[600px]">
                    <div className="flex justify-end items-center">
                        <img src={Close} className="w-[45px]" onClick={() => setModalOpen(!modalOpen)} alt="Close" />
                    </div>
                    <div className={`flex flex-col items-center w-[320px] sm:w-[550px] overflow-auto  py-5`}>
                        <p className="text-2xl inter-600 text-black">Bu paketin yanında alabileceğiniz ek paketler</p>
                        <div className="flex flex-col gap-5 sm:w-[500px] overflow-auto">
                            <div className="flex justify-between border-b pb-3 ">
                                <p className="inter-500 text-black">İsteğe bağlı hizmet <br /> geliştirme</p>
                                <p className="inter-500 text-black">99TL - 6999TL</p>
                            </div>
                            <div className="flex justify-between items-center border-b pb-3 ">
                                <p className="inter-500 text-black">Trello revizyon takip <br /> (+150 revizyon hakkı)</p>
                                <p className="inter-500 text-black">799TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3 mt-4">
                                <p className="inter-500 text-black">İçerik Yönetim Paneli</p>
                                <p className="inter-500 text-black">699TL</p>
                            </div>
                            <div className="flex justify-between border-b pb-3">
                                <p className="inter-500 text-black">Canlı destek entegrasyonu</p>
                                <p className="inter-500 text-black">499TL</p>
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
                                <p className="inter-500 text-black">Ürün yedekleme hizmeti</p>
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
                <p className="inter-600 text-2xl sm:text-6xl text-center">Profesyonel Web Sitesi</p>
                <div className="flex items-center px-4 mt-12 justify-center">
                    <p className="inter-500 text-lg sm:w-1/2 select-none">Profesyonel Web Siteleri, işletmelerin dijital dünyada güçlü bir varlık göstermeleri, müşterilerine güven vermeleri ve iş süreçlerini daha verimli yönetmeleri için tasarlanmış özel bir web sitesi paketidir. Bu paket, işletmelerin kurumsal kimliğini en iyi şekilde yansıtmasını sağlarken, modern, hızlı ve kullanıcı dostu bir deneyim sunar. <br /> <br /> Bu paket kapsamında, işletmelerin sektörde profesyonel bir duruş sergilemesi ve rakiplerinden bir adım önde olması hedeflenmektedir. Gelişmiş SEO altyapısı, mobil uyumlu tasarım, kolay yönetilebilir içerik paneli ve güvenlik önlemleriyle donatılmış web siteleri, işletmelerin dijital başarısını artırmak için özel olarak hazırlanır. <br /> <br /> Ayrıca, profesyonel web sitesi paketi, işletmelerin müşterileriyle etkili bir şekilde iletişim kurmasını sağlayacak iletişim formları, blog bölümleri, dinamik içerik yönetimi ve isteğe bağlı özel entegrasyonlarla desteklenmektedir. Hem kurumsal firmalar hem de bireysel girişimciler için ideal olan bu paket, işletmenizin çevrimiçi dünyada güçlü bir iz bırakmasına yardımcı olur. <br /> <br /> Siz de profesyonel bir web sitesine sahip olarak işletmenizi dijital dünyada daha ileriye taşımak istiyorsanız, Seku Software’in Profesyonel Web Sitesi Paketini keşfedin!</p>
                </div>
                <div className="flex flex-col items-center px-4 mt-24 justify-center gap-5">
                    <p className="inter-600 text-2xl sm:text-4xl text-center">Neden Profesyonel Web Sitesi tercih etmelisiniz?</p>
                    <p className="inter-500 text-lg sm:w-[600px] lg:w-[800px] text-center">İşletminizde kontrolü elinize almak isterseniz, profesyonel olmak isterseniz, stok kontrolünü ve satış kontrolünü arttırmak isterseniz, Google'da en üst sıralarda çıkmak isterseniz, işletmenizin site tasarımını harika gözükmesini isterseniz; <br /> <span className="inter-600  text-xl sm:text-3xl">bu paketi seçmelisiniz.</span></p>
                </div>
                <div className="flex justify-center mt-32">
                    <div className={`flex flex-col mt-5 ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer p-5 rounded-lg   px-8 hover:border-sky-200 transition-all duration-300 w-[500px]`}>
                        <p className="inter-600 text-3xl text-center">Profesyonel Web Sitesi Paketi</p>
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
                </div>
                <p className="text-center inter-500 text-sm mt-5 sm:mt-2 text-underline flex justify-center items-center" onClick={() => setModalOpen(!modalOpen)}>Bu hizmetin yanında <br className="sm:hidden block"/> alabileceğiniz ek paketler <img src={Right} className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} alt="Right" /></p>
            </div>
            <Footer />
        </>
    )
}

export default ProfessionalSite