import toast from "react-hot-toast";
import AdminHeader from "./AdminHeader";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState, useContext } from "react";
import { AdminContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"
import Close from "../../../images/close.svg"
import Loading from "../tools/Loading";



const Orders = () => {
    const [siteData, setSiteData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [modalOpen,setModalOpen] = useState(false);
    const [loading,setLoading] = useState(false);
    const [selectedOption,setSelectedOption] = useState("");

    const [customerName,setCustomerName] = useState("");
    const [websiteType,setWebsiteType] = useState("");
    const [customerMail,setCustomerMail] = useState("");
    const [customerPhone,setCustomerPhone] = useState("");

    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { loggedContext } = useContext(AdminContext);
    const navigate = useNavigate();



    const getOrders = async () => {
        setLoading(true);
        const { data, error } = await supabase
        .from("orders")
        .select("*");

        if (error) {
            console.error(error);
            toast.error("Siteler alınırken bir hata oluştu");
        } else {
            setLoading(false);
            setSiteData(data);
            console.log(data);
        }
    };

    const createOrders = async () => {
        toast.loading("Yükleniyor...")
        const {data,error} = await supabase
        .from("orders")
        .insert([
            {
                website_type:selectedOption, customer_name:customerName,customer_mail:customerMail,customer_phone:customerPhone,active:true
            }
        ])

        if(error){
            console.error(error)
            toast.dismiss();
            toast.error("Sipariş eklenirken bir hata oluştu!")
        }
        else{
            toast.dismiss();
            getOrders();
            setModalOpen(!modalOpen);
            toast.success("Sipariş başarıyla eklendi!")
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
        if (!loggedContext) {
            navigate("/SekuSoftwareAdminPanel");
        } else {
            getOrders();
        }
    }, []);

    const options = [
        { value: "", label: "Seçiniz..." },
        { value: "professional", label: "Profesyonel web sitesi" },
        { value: "qrweb", label: "QR Menü sitesi" },
        { value: "special", label: "Özel web sitesi" },
        { value: "love", label: "Anı sitesi" },
        { value: "production", label: "İşletme tanıtım sitesi" }
    ];

    const filteredData = siteData.filter((order) => {
        return (
            (order.customer_name && order.customer_name.toLowerCase().includes(keyword.toLowerCase())) ||
            (order.website_type && order.website_type.toLowerCase().includes(keyword.toLowerCase())) ||
            (order.customer_email && order.customer_email.toLowerCase().includes(keyword.toLowerCase())) ||
            (order.customer_phone && order.customer_phone.toLowerCase().includes(keyword.toLowerCase()))
        );
    });
    

    return (
        <>  
            <Modal style={customStyles} isOpen={modalOpen}>
                <div className="flex justify-end">
                    <img src={Close} className="w-[35px]" onClick={() => setModalOpen(!modalOpen)} alt="Close" />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <p className="inter-500 text-lg">Müşteri ismi</p>
                        <input type="text" onChange={(e) => setCustomerName(e.target.value)} className="p-2 border rounded-lg outline-0" placeholder="Müşteri ismi"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="inter-500 text-lg">Website tipi</p>
                        <select value={selectedOption} className="bg-white p-2 rounded-lg border" onChange={(e) => setSelectedOption(e.target.value)}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    <span></span>{option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p className="inter-500 text-lg">Müşteri E-Postası</p>
                        <input type="text" onChange={(e) => setCustomerMail(e.target.value)} className="p-2 border rounded-lg outline-0" placeholder="Müşteri E-Postası"/>
                    </div>  
                    <div className="flex flex-col">
                        <p className="inter-500 text-lg">Müşteri Telefon Numarası</p>
                        <input type="text" onChange={(e) => setCustomerPhone(e.target.value)} className="p-2 border rounded-lg outline-0" placeholder="Müşteri Telefon Numarası"/>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 inter-500 text-white px-4 py-2 rounded-lg outline-0" onClick={() => createOrders()}>Sipariş Ekle</button>
                </div>
            </Modal>
            {loading ? <Loading /> : 
            <>
                 <AdminHeader />
                <div className="flex flex-col " style={{zIndex: "60"}}>
                    <p className="inter-500 text-2xl px-8">Aktif siparişler</p>

                    <div className="flex justify-around px-8">
                        <input
                            type="text"
                            placeholder="Anahtar kelime girin"
                            onChange={(e) => setKeyword(e.target.value)}
                            className="border px-2 rounded-lg"
                        />
                        <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 rounded-lg px-4 py-2 inter-500 text-white" onClick={() => setModalOpen(!modalOpen)}>Sipariş ekle</button>
                    </div>
                    <div className="flex flex-col items-center mt-6 overflow-auto">
                        <div className="flex justify-between max-w-[1200px]">
                            <p className="w-[250px] flex justify-center border">Müşteri İsmi</p>
                            <p className="w-[250px] flex justify-center border">Website Tipi</p>
                            <p className="w-[250px] flex justify-center border">Müşteri E-Postası</p>
                            <p className="w-[250px] flex justify-center border">Müşteri Telefon Numarası</p>
                            <p className="w-[250px] flex justify-center border">Durum</p>
                        </div>
                        <div className="flex flex-col max-w-[1200px]">
                            {filteredData.map((order) => (
                                <div key={order.id} className="flex justify-between border-t">
                                    <p className="w-[250px] flex justify-center">{order.customer_name}</p>
                                    <p className="w-[250px] flex justify-center">{order.website_type}</p>
                                    <p className="w-[250px] flex justify-center">{order.customer_mail}</p>
                                    <p className="w-[250px] flex justify-center">{order.customer_phone}</p>
                                    <p className="w-[250px] flex justify-center">{order.active ? "Aktif" : "Pasif"}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>}
        </>
    );
};

export default Orders;
