import { useState } from "react"
import Bar from "../../../images/header-bar.svg"
import Logo from "../../../images/logo3.svg"
import "../../../css/AdminOffcanvas.css"
import Close from "../../../images/close.svg"



const AdminHeader = () => {

    const [offcanvas,setOffcanvas] = useState(false);

    return(
        <>
            <div className={`${offcanvas ? "opacity-100 " : " opacity-0"} w-full h-screen fixed transition-all duration-300 z-50 bg-semiblack-2`}>
                <div className={`h-full w-1/4 bg-white flex flex-col fixed end-0 ${offcanvas ? "slideAni" : ""}`}>
                    <div className="flex justify-end mt-4 me-4">
                        <img src={Close} className="w-[50px] cursor-pointer" onClick={() => setOffcanvas(!offcanvas)} alt="Close" />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between items-center p-4">
                <img src={Logo} alt="Logo" className="w-[55px]"/>
                <img src={Bar} alt="Bar" onClick={() => (setOffcanvas(!offcanvas))} className="w-[45px]" />
            </div>
        </>
    )
}

export default AdminHeader