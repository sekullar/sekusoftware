import { useState, useContext } from "react"
import Bar from "../../../images/header-bar.svg"
import Logo from "../../../images/logo3.svg"
import "../../../css/AdminOffcanvas.css"
import Close from "../../../images/close.svg"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { useNavigate } from "react-router-dom"
import { AdminContext } from "../Context/AdminContext"



const AdminHeader = () => {

    const [offcanvas,setOffcanvas] = useState(false);

    const {setLoggedContext} = useContext(AdminContext);

    const navigate = useNavigate();

    return(
        <>
            <div className={`${offcanvas ? "opacity-100 w-full" : " opacity-0 w-[0px]"}  h-screen fixed transition-all duration-300 z-50 bg-semiblack-2`}>
                <div className={`h-full w-1/4 bg-white flex flex-col fixed end-0 ${offcanvas ? "slideAni w-[full]" : "w-[0px]"}`}>
                    <div className="flex justify-end my-4 me-4">
                        <img src={Close} className="w-[50px] cursor-pointer" onClick={() => setOffcanvas(!offcanvas)} alt="Close" />
                    </div>
                    <Accordion transition transitionTimeout={250} className="transition-all duration-300 select-none">
                        <AccordionItem className="w-full border p-3 outline-0" header="Yönetici Erişimi">
                                <div className="flex flex-col outline-0" >
                                    <a className="outline-0 inter-400 mt-3 text-xl"  >Ödeme tarihi ekle</a>
                                </div>
                        </AccordionItem>
                        <AccordionItem  className="w-full border p-3 outline-0 transition-all" header="Site Yönetimi">
                                <div className="flex flex-col outline-0" >
                                    <p onClick={() => navigate("/SekuSoftwareAdminPanel/SiteAccess")} className="outline-0 inter-400 mt-3 text-xl">Site Erişimi</p>
                                </div>
                                <div className="flex flex-col outline-0" >
                                    <p onClick={() => navigate("/SekuSoftwareAdminPanel/SiteInfo")} className="outline-0 inter-400 mt-3 text-xl">Site Bilgileri</p>
                                </div> 
                        </AccordionItem>
                        <AccordionItem className="w-full border p-3 outline-0" header="Müşteri Destek Paneli">
                                <div className="flex flex-col outline-0" >
                                    <p onClick={() => navigate("/SekuSoftwareAdminPanel/CheckSupport")} className="outline-0 inter-400 mt-3 text-xl">Destek Biletleri</p>
                                </div>
                                <div className="flex flex-col outline-0" >
                                    <p onClick={() => navigate("/SekuSoftwareAdminPanel/CustomerSupport")} className="outline-0 inter-400 mt-3 text-xl">Müşteri Teknik Destek</p>
                                </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="flex w-full justify-between items-center p-4">
                <img src={Logo} alt="Logo" onClick={() => navigate("/SekuSoftwareAdminPanel")} className="w-[55px]"/>
                <img src={Bar} alt="Bar" onClick={() => (setOffcanvas(!offcanvas))} className="w-[45px]" />
            </div>
        </>
    )
}

export default AdminHeader