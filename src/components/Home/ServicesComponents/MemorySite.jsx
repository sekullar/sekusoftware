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
                            <p className="inter-500 text-black">İçerik Yönetim Paneli</p>
                            <p className="inter-500 text-black">299TL</p>
                        </div>
                        <div className="flex justify-between border-b pb-3">
                            <p className="inter-500 text-black">Fotoğraf yedekleme hizmeti</p>
                            <p className="inter-500 text-black">199TL</p>
                        </div>
                        <div className="flex justify-between border-b pb-3 ">
                            <p className="inter-500 text-black">Ek sayfa + Tasarım</p>
                            <p className="inter-500 text-black">99TL</p>
                        </div>
                        <div className="flex justify-between border-b pb-3">
                            <p className="inter-500 text-black">Ek revizyon hakkı (10 adet)</p>
                            <p className="inter-500 text-black">149TL</p>
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
            </Modal>
            <Header />
            <div className="flex flex-col">
                <p className="inter-600 text-6xl text-center">Anı Web Sitesi</p>
                <div className="flex items-center px-4 mt-12 justify-center">
                    <p className="inter-500 text-lg w-1/2 select-none">Bazı anılar asla unutulmaz ve her zaman özel kalmalıdır. Anı Sitesi, aileniz, arkadaşlarınız veya sevgilinizle paylaştığınız en değerli anıları saklayabileceğiniz, onlara <span className="inter-700">sitenin tasarımıyla harika hediyeler verebileceğiniz</span>, düzenleyebileceğiniz ve her zaman erişebileceğiniz özel bir dijital alan sunar. Modern, şık ve kullanıcı dostu tasarımıyla, hatıralarınızı güvenli bir şekilde saklayarak zamana meydan okumanızı sağlar.<br /><br />Anı Sitesi Paketi, fotoğraflarınızı, videolarınızı ve özel notlarınızı ekleyebileceğiniz, istediğiniz zaman düzenleyip güncelleyebileceğiniz bir yapıya sahiptir. İster aile arşivi oluşturun, ister sevgilinizle özel anılarınızı bir yerde toplayın, isterseniz de en mutlu anlarınızı arkadaşlarınızla paylaşın – tümü sizin kontrolünüzde!<br /><br />Bu paket, kişiye özel tasarım, şifreli erişim, mobil uyum, kolay yönetim paneli ve güvenli veri saklama gibi özelliklerle donatılmıştır. İsteğe bağlı olarak ortak düzenleme, zaman kapsülü modu ve özel video mesajlar gibi ek özellikler de eklenebilir.<br /><br />Siz de anılarınıza dijital bir dokunuş katmak, özel anlarınızı korumak ve sevdiklerinizle paylaşmak istiyorsanız, Seku Software’in Anı Sitesi Paketini keşfedin!</p>
                </div>
                <div className="flex flex-col items-center px-4 mt-24 justify-center gap-5">
                    <p className="inter-600 text-4xl text-center">Neden Anı Web Sitesi tercih etmelisiniz?</p>
                    <p className="inter-500 text-lg w-[800px] text-center">Ailenizle, eşinizle, dostunuzla, sevgilinizle, kardeşinizle anılarınızı ölümsüzleştirmek isterseniz, sonsuza kadar saklamak isterseniz; <br /> <span className="inter-600 text-3xl">bu paketi seçmelisiniz.</span></p>
                </div>
                <div className="flex justify-center mt-32">
                <div className={`flex flex-col mt-5  p-5 rounded-lg ${!cookies.darkMode ? "shadow-2xl" : "border border-gray-500"} cursor-pointer hover:border-sky-200 transition-all duration-300 px-8`}>
                    <p className="inter-600 text-3xl text-center">Anı web sitesi</p>
                    <div className="flex flex-col border-y mt-4">
                        <p className="inter-500 py-3 border-b flex items-center flex items-center"><img src={Page} className={`w-[20px] me-2 ${cookies.darkMode ? "invert" : ""}`} alt="Page" />Tek Sayfa</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Ücretsiz Hosting</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Ön yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />10 Arka yüz revizyon hakkı</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />SSL Sertifikası</p>
                        <p className="inter-500 py-3 border-b flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Temel Güvenlik</p>
                        <p className="inter-500 py-3 flex items-center"><img src={Ok} className="w-[20px] me-2" alt="Okey" />Teknik Destek</p>
                    </div>
                    <div className="flex flex-col mt-auto">
                        <p className="inter-600 text-4xl text-center mt-6">Tek Seferlik: 2.199₺</p>
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