import { useContext,useEffect, useState } from "react"
import { AdminContext } from "../Context/AdminContext"
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../tools/Loading";
import "../../../css/CustomerSupportDetail.css"
import AdminHeader from "./AdminHeader"
import Modal from 'react-modal';
import Close from "../../../images/close.svg"


const CustomerSupportDetail = () => {

    const {customerSupportSite,loggedContext} = useContext(AdminContext); 
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [modalData,setModalData] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);

    const cstsUrl = process.env.REACT_APP_CSTS_URL;
    const cstsApiKey = process.env.REACT_APP_CSTS_APIKEY;

    const navigate = useNavigate();
    const csts_supabase = createClient(cstsUrl, cstsApiKey);

    const getSupportTickets = async () => {
        setLoading(true)
        const {data,error} = await csts_supabase
        .from("customer_support_tickets")
        .select("*")
        .eq("siteUrl", String(customerSupportSite).trim())

        if(error){
            console.error(error);
            toast.error("Veriler çekilirken hata oluştu!")
        }
        else{
            setLoading(false);
            setData(data);
            console.log(data);  
        }
    }

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


    useEffect(() => {
        if(!loggedContext){
            navigate("/SekuSoftwareAdminPanel")
        }
        else if(!customerSupportSite){
            navigate("/SekuSoftwareAdminPanel/CustomerSupport")
        }
        else{
            getSupportTickets();
            console.log(customerSupportSite)
        }
    }, [])

    const maxChar = (str,limit) =>  {
        if (str.length > limit) {
            return str.slice(0, limit) + "...";
        }
        return str;
    }

   
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);  // Tarih objesine dönüştür
    
        const day = date.getDate();  // Gün
        const month = date.toLocaleString('tr-TR', { month: 'long' });  // Ay (long formatta)
        const year = date.getFullYear();  // Yıl
        const hour = date.getHours();  // Saat
        const minute = date.getMinutes();  // Dakika
    
        // Burada formatlanmış tarihi döndürüyoruz
        return `${day} ${month} ${year} ${hour}:${minute}`;
    };

    return(
        <>
            <Modal style={customStyles} isOpen={modalOpen}>
                <div className="flex justify-end">
                    <img src={Close} className="w-[45px]" onClick={() => setModalOpen(!modalOpen)} alt="Close" />
                </div>
                <div className="flex flex-col items-center w-[1000px] max-w-[1000px]">
                    <p className="inter-600 text-xl mb-5">{modalData.title}</p>
                    <div className="max-w-[800px] w-[800px] max-h-[400px] overflow-h-auto">
                        <p className="inter-500 text-lg mb-5">{modalData.message}</p>
                    </div>
                    <p className="inter-500">Gönderen: {modalData.customerName}</p>
                    <p className="inter-500">Önem derecesi: {modalData.priority}/3</p>
                    <p className="inter-500">{formatDate(modalData.created_at)} tarihinde oluşturuldu.</p>
                    
                </div>
            </Modal>
            {loading ? 
            <Loading /> : 
            <>
                <AdminHeader />
                <div className="flex flex-col items-center justify-center ">
                    <div className="flex items-center gap-2 my-5">
                        <p className="inter-600 text-2xl">{customerSupportSite}</p>
                        <p className="inter-500 text-2xl">için destek biletleri</p>
                    </div>  
                    <div className="h-[350px] max-w-[1000px] w-[1000px] flex flex-col gap-2 overflow-auto">
                        {data && data.slice().reverse().map((ticket,key) => {
                            return(
                                <>
                                    <div key={key} className="flex justify-between items-center border p-4 rounded-lg w-full">
                                        <p className="inter-600 text-xl w-1/3">{ticket.title}</p>
                                        <p className="inter-500 w-1/3">{maxChar(ticket.message,32)}</p>
                                        <div className="w-1/3 flex justify-end">
                                            <button className="inter-600 bg-sky-500 hover:bg-sky-600 px-4  py-2 text-white rounded-lg transition-all duration-300 outline-0" onClick={() => {setModalData(ticket); setModalOpen(!modalOpen)}}>...</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>}
        </>
    )
}

export default CustomerSupportDetail