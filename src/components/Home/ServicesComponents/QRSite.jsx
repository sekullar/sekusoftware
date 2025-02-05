import Header from "../MainComponents/Header"
import Ok from "../../../images/ok.svg"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import Page from "../../../images/page.svg"
import Footer from "../MainComponents/Footer"
import False from "../../../images/false.svg"
import Close from "../../../images/close.svg"
import { useState } from "react";
import Right from "../../../images/right.svg"
import Modal from 'react-modal';


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
        },
    };

    const [modalOpen,setModalOpen] = useState(false);

    return(
        <>
                        <Modal style={customStyles} isOpen={modalOpen}>
                <div className="flex justify-end items-center">
                    <img src={Close} className="w-[45px]" onClick={() => setModalOpen(!modalOpen)} alt="Close" />
                </div>
                <div className={`flex flex-col items-center w-[550px]`}>
                    <p className="text-2xl inter-600 text-black">Bu paketin yanında alabileceğiniz ek paketler</p>
                    <div className="flex flex-col gap-5 w-[500px]">
                        <div className="flex justify-between border-b pb-3 mt-4">
                            <p className="inter-500 text-black">İsteğe bağlı hizmet geliştirme</p>
                            <p className="inter-500 text-black">99TL - 6999TL</p>
                        </div>
                        <div className="flex justify-between border-b pb-3 mt-4">
                            <p className="inter-500 text-black">Trello revizyon takip (+150 revizyon hakkı)</p>
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
                            <p className="inter-500 text-black">Ek revizyon hakkı (+10)</p>
                            <p className="inter-500 text-black">199TL</p>
                        </div>
                        <div className="flex justify-between border-b pb-3">
                            <p className="inter-500 text-black">Hız optimizasyonu</p>
                            <p className="inter-500 text-black">99TL</p>
                        </div>
                    </div>
                </div>
            </Modal>
            <Header />
            <div className="flex flex-col">
                <p className="inter-600 text-6xl text-center">QR Menü Sitesi</p>
                <div className="flex items-center px-4 mt-12 justify-center">
                    <p className="inter-500 text-lg w-1/2 select-none">Dijital dünyada restoranlar, kafeler ve işletmeler için pratik ve modern bir çözüm sunan QR Menü, müşterilerinize hızlı ve kolay bir şekilde menünüzü sunmanızı sağlar. Bu sistem, işletmenizin profesyonel bir imaj sergilemesine yardımcı olurken, temassız ve hijyenik bir deneyim sunar. Modern, hızlı ve kullanıcı dostu arayüzü sayesinde, müşterileriniz menünüze anında erişebilir ve daha iyi bir hizmet deneyimi yaşayabilir.<br /><br />QR Menü Paketi, işletmenizin dijital dönüşümünü hızlandırarak sizi rakiplerinizden bir adım öne taşır. Mobil uyumlu yapısı, kolay yönetilebilir içerik paneli ve gelişmiş analiz araçları sayesinde menünüzü anında güncelleyebilir, stok takibi yapabilir ve müşteri deneyimini optimize edebilirsiniz. Güçlü altyapısı ve güvenlik önlemleri ile sorunsuz bir kullanım sağlar.<br /><br />Ayrıca, QR Menü sistemi, çoklu dil desteği, promosyon ve kampanya ekleme, sipariş entegrasyonu ve özelleştirilebilir tasarım seçenekleri ile işletmenize özel çözümler sunar. Restoranlar, kafeler, oteller ve tüm gıda işletmeleri için ideal olan bu sistem, müşteri memnuniyetinizi artırırken operasyonel verimliliğinizi yükseltir.<br /> <br />Siz de QR Menü sistemine geçerek, işletmenizi dijital dünyada daha modern ve yenilikçi bir konuma taşımak istiyorsanız, Seku Software’in QR Menü Paketini keşfedin!</p>
                </div>
                <div className="flex flex-col items-center px-4 mt-24 justify-center gap-5">
                    <p className="inter-600 text-4xl text-center">Neden QR Menü sitesi tercih etmelisiniz?</p>
                    <p className="inter-500 text-lg w-[800px] text-center">İşletmenize yeni nesil teknoloji barındırmak için, yıpranmış menü masrafından kurtulmak için, estetik-şık bir menü tasarımı için, <br /> <span className="inter-600 text-3xl">bu paketi seçmelisiniz.</span></p>
                </div>
                <div className="flex justify-center mt-32">
                <div className={`flex flex-col mt-5 ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer p-5 rounded-lg  hover:border-sky-200 transition-all duration-300 px-8`}>
                    <p className="inter-600 text-3xl text-center">QR Menü sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500 py-3 border-b flex items-center flex items-center"><img src={Page} className={`w-[20px] me-2 ${cookies.darkMode ? "invert" : ""}`} alt="Page" />Çift/Tek Sayfa</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Sosyal Medya Entegrasyonu</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Ön yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Arka yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500 py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Teknik Destek</p>

                    </div>
                    <div className="flex flex-col mt-auto">
                        <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 5.199₺</p>
                        <p className="inter-600 text-xl text-center mt-3">Sonrasında Aylık: 1.499₺</p>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg text-center py-2 px-4 text-white inter-500 transition-all duration-300 mt-5" onClick={() => navigate("/OrderNow")}>Satın Al</button>
                    </div>
                </div>
                </div>
                <p className="text-center inter-500 text-sm mt-2 text-underline flex justify-center items-center" onClick={() => setModalOpen(!modalOpen)}>Bu hizmetin yanında alabileceğiniz ek paketler <img src={Right} className={`w-[30px] ${cookies.darkMode ? "invert" : ""}`} alt="Right" /></p>
            </div>
            <Footer />
        </>
    )
}

export default ProfessionalSite