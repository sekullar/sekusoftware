import "../../../css/Admin.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "../tools/Loading"
import { createClient } from "@supabase/supabase-js"
import toast from "react-hot-toast"
import AdminHeader from "./AdminHeader"

const Main = () => {

    const navigate = useNavigate();

    const [activeSiteValue,setActiveSiteValue] = useState(0);
    const [activeOrders,setActiveOrders] = useState(0);
    const [monthPay,setMonthPay] = useState(0);
    const [supportTickets,setSupportTickets] = useState(0);


    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [loading,setLoading] = useState(true);

    useEffect(() => {  
        getActiveSite();
    }, [])

    const MonthPayPlusAndReduce = (data) => {
        const currentTimestamp = new Date().getTime();

        function getMonthFromTimestamp(timestamp) {
          const date = new Date(parseInt(timestamp));
          return `${date.getFullYear()}-${date.getMonth() + 1}`; 
        }
        
        let totalPrice = 0;
        
        data.forEach(item => {
          const itemEndPayMonth = getMonthFromTimestamp(item.endPayDate);
          const currentMonth = getMonthFromTimestamp(currentTimestamp);
        
          if (itemEndPayMonth === currentMonth) {
            totalPrice += parseInt(item.price);
            setMonthPay(totalPrice);
          }
        });
    }

    const getSupportTickets = async () => {
        const {data,error} = await supabase
        .from("support_tickets")
        .select("*")

        if(error){
            toast.error("getSupportTickets alınırken hata oluştu")
        }
        else{
            setSupportTickets(data.length);
            setLoading(false);
        }
    }

    const getMonthPay = async () => {
        const {data,error} = await supabase
        .from("create_pay_date")
        .select("*")

        if(error){
            console.error(error);
            toast.error("getMonthPay alınırken hata oluştu!")
        }
        else{
            MonthPayPlusAndReduce(data);
            getSupportTickets();
        }
    }


    const getActiveOrders = async () => {
        const {data,error} = await supabase
        .from("orders")
        .select("*")
        .eq("active",true)

        if(error){
            console.error(error);
            toast.error("getActiveOrders alınırken hata oluştu");
        }
        else{
            setActiveOrders(data.length);
            getMonthPay();
        }
    }
    

    const getActiveSite = async () => {
        const {data,error} = await supabase
        .from("site_access")
        .select("*")

        if(error){
            console.error(error);
            toast.error("getActiveSite alınırken hata oluştu!")
        }
        else{
            setActiveSiteValue(data.length)
            getActiveOrders();
        }
    }

  

    

    return(
        <>  
            {loading ? 
            <Loading />
            : 
            <>
                 <div className="flex flex-col">
                    <AdminHeader />
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <p className="inter-500 mb-6 text-3xl mt-14 ms-8">Anasayfa</p>
                            <div className="flex items-center gap-5  mx-8 max-w-screen overflow-auto">
                                <div className="flex flex-col relative">
                                    <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-2xl">Aktif Site Sayısı</p>
                                        <p className="inter-600 text-6xl mt-3">{activeSiteValue}</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                    </div>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-2xl">Aktif Sipariş Sayısı</p>
                                        <p className="inter-600 text-6xl mt-3">{activeOrders}</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                    </div>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="flex flex-col w-[420px] h-[170px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-2xl">Bu ay alınması gereken ödeme</p>
                                        <p className="inter-600 text-5xl mt-3">{monthPay} TL</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                    </div>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-2xl">Destek Biletleri</p>
                                        <p className="inter-600 text-6xl mt-3">{supportTickets}</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 flex flex-col">
                            <p className="inter-500 mb-6 text-3xl mt-14 ms-8">Araçlar</p>
                            <div className="flex overflow-auto items-center gap-5 mx-8">
                                <div className="flex flex-col relative" onClick={() => navigate("/SekuSoftwareAdminPanel/ServerInfo")}>
                                    <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-3xl">Site bilgileri</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0" />
                                </div>
                                <div className="flex flex-col relative" onClick={() => navigate("/SekuSoftwareAdminPanel/SiteAccess")}>
                                    <div className="flex flex-col w-[400px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-3xl">Site erişimi</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0" />
                                </div>
                                <div className="flex flex-col relative" onClick={() => navigate("/SekuSoftwareAdminPanel/CheckSupport")}>
                                    <div className="flex flex-col w-[430px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-3xl">Destek biletlerini görüntüle</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0" />
                                </div>
                                <div className="flex flex-col relative" onClick={() => navigate("/SekuSoftwareAdminPanel/CreatePayDate")}>
                                    <div className="flex flex-col w-[430px] min-w-[40px] border hover:border-0 hover-ani-shadow p-8 rounded-lg cursor-pointer">
                                        <p className="inter-500 text-3xl">Ödeme tarihi ekle</p>
                                    </div>
                                    <div className="w-full gradientBgAdmin rounded-b-lg h-[15px] absolute bottom-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Main