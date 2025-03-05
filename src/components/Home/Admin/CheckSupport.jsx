import { useEffect, useState, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import { AdminContext } from '../Context/AdminContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../tools/Loading';
import Modal from 'react-modal';
import Close from "../../../images/close.svg"



    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

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

const CheckSupport = () => {

    const [tickets,setTickets] = useState("");
    const [ticketDetail,setTicketDetail] = useState([]);
    const [loading,setLoading] = useState(true);
    const [modalOpen,setModalOpen] = useState(false);
    const {loggedContext} = useContext(AdminContext);
    const navigate = useNavigate();

    const getSupportTickets =  async () => {
        const {data,error} = await supabase
        .from("support_tickets")
        .select("*");

        if(error){
            console.error("Veri çekme hatası: ", error.message);
        }
        else{
            setLoading(false);
            console.log(data);
            setTickets(data);
        }
    }

    useEffect(() => {
        if(!loggedContext){
            navigate("/SekuSoftwareAdminPanel")
        }
        else{
            getSupportTickets();
        }
    }, [])

    const formatDate = (isoString) => {
        if (!isoString) return "Tarih bulunamadı"; // Tarih yoksa hata döndürmemesi için
        const date = new Date(isoString);
      
        if (isNaN(date.getTime())) return "Geçersiz tarih"; // Geçersiz tarih kontrolü
      
        return new Intl.DateTimeFormat("tr-TR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(date);
       };

    return(
        <>  
        <Modal isOpen={modalOpen} style={customStyles}>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <img src={Close} onClick={() => setModalOpen(false)} className='w-[40px]' alt="Close" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className='inter-500'>İletişim Numarası: {ticketDetail.contact}</p>
                    <p className='inter-500'>Konu: {ticketDetail.title}</p>
                    <p className='inter-500'>Mesaj: {ticketDetail.message}</p>
                    <p className='inter-500'>Şu tarihte gönderildi: {formatDate(ticketDetail.created_at)}</p>
                </div>
            </div>
        </Modal>
        {loading ?
             <Loading /> : 
            <div className="flex flex-col h-screen w-full items-center sm:justify-center sm:mt-0 mt-4">
                <p className="inter-500 text-xl mb-8">Destek Biletleri</p>
                <div className="flex flex-col max-w-[400px] w-[400px] justify-center max-h-[500px] overflow-auto">
                    {tickets && tickets.map((ticket,key) => {
                        return(
                            <div key={key} className="flex justify-between items-center">
                                <p className="inter-600 text-lg">{ticket.title}</p>
                                <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 py-2 px-4 text-white rounded-lg inter-600" onClick={() => {setTicketDetail(ticket); setModalOpen(true)}}>...</button>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>
    )
}

export default CheckSupport