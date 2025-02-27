import Logo from "../../../images/logo3.svg"
import Bar from "../../../images/header-bar.svg"
import "../../../css/Admin.css"
import Web from "../../../images/page.svg"
import Order from "../../../images/order.svg"
import Calendar from "../../../images/month.svg"
import Ticket from "../../../images/ticket.svg"
import { useNavigate } from "react-router-dom"

const Main = () => {

    const navigate = useNavigate();

    return(
        <>
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center p-4">
                    <img src={Logo} alt="Logo" className="w-[55px]"/>
                    <img src={Bar} alt="Bar" className="w-[45px]" />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <p className="inter-500 mb-6 text-3xl mt-14 ms-8">Anasayfa</p>
                        <div className="flex items-center gap-5  mx-8 max-w-screen overflow-auto">
                            <div className="flex flex-col relative">
                                <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                    <p className="inter-500 text-2xl">Aktif Site Sayısı</p>
                                    <p className="inter-600 text-6xl mt-3">0</p>
                                </div>
                                <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                    <p className="inter-500 text-2xl">Aktif Sipariş Sayısı</p>
                                    <p className="inter-600 text-6xl mt-3">0</p>
                                </div>
                                <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="flex flex-col w-[420px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                    <p className="inter-500 text-2xl">Bu ay alınması gereken ödeme</p>
                                    <p className="inter-600 text-6xl mt-3">0</p>
                                </div>
                                <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                    <p className="inter-500 text-2xl">Destek Biletleri</p>
                                    <p className="inter-600 text-6xl mt-3">0</p>
                                </div>
                                <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col">
                        <p className="inter-500 mb-6 text-3xl mt-14 ms-8">Araçlar</p>
                        <div className="flex items-center gap-5 mx-8">
                            <div className="flex flex-col relative" onClick={() => navigate("/SekuSoftwareAdminPanel/ServerInfo")}>
                                <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                    <p className="inter-500 text-3xl">Sunucu bilgileri</p>
                                </div>
                                <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0" />
                            </div>
                            <div className="flex flex-col relative" onClick={() => navigate("/SekuSoftwareAdminPanel/SiteAccess")}>
                                <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                    <p className="inter-500 text-3xl">Sunucu erişimi</p>
                                </div>
                                <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main