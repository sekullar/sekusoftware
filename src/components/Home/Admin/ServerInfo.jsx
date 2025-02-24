import { useContext, useEffect } from "react"
import { AdminContext } from "../Context/AdminContext"
import { useNavigate } from "react-router-dom"
import "../../../css/AdminServerInfo.css"

const ServerInfo = () => {

    const navigate = useNavigate();

    const {loggedContext} = useContext(AdminContext)

    useEffect(() => {
        if(!loggedContext){
            navigate("/SekuSoftwareAdminPanel")
        }
    }, [])

    return(
        <>  
            {loggedContext ? 
                <div className="flex w-screen h-screen bodyGradient justify-center items-center">
                    <div className="flex flex-col bg-semiwhite p-4 rounded-lg">
                        <p className="inter-600 text-4xl opacity-70">Bu işleme devam edebilmek için <br /> yeniden giriş yapmanız gerekiyor</p>
                    </div>
                </div> 
            : 
            <>
            </>}
        </>
    )
}

export default ServerInfo