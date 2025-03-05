import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../Context/AdminContext"
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import toast from "react-hot-toast";
import Modal from 'react-modal';
import Loading from "../tools/Loading";
import Close from "../../../images/close.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isPast } from "date-fns";
import { tr } from "date-fns/locale";

const CreatePayDate = () => {

    const {loggedContext} = useContext(AdminContext);
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);
    const navigate = useNavigate();
    const [detailModal,setDetailModal] = useState([]);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [sendingDate,setSendingDate] = useState(null);
    const [sendingDate2,setSendingDate2] = useState(null);
    const [siteUrlState,setSiteUrlState] = useState("");
    const [priceState,setPriceState] = useState("");
    const [detailPayForModal,setDetailPayForModal] = useState(false);
    const [filteredData,setFilteredData] = useState([]);

    const [filters,setFilters] = useState([{
        unpaid:false,
        dueToday:false,
        overdue:false,
    }])

    const handleDateChange = (date) => {
        const toTimestamp = (dateString) => new Date(dateString).getTime();
        console.log(date)
        setSelectedDate(date);
        setSendingDate(toTimestamp(date))
        console.log(format(date, "d MMMM yyyy", { locale: tr })); 
    };

    const handleDateChange2 = (date) => {
        const toTimestamp = (dateString) => new Date(dateString).getTime();
        setSelectedDate2(date);
        setSendingDate2(toTimestamp(date))
        console.log(format(date, "d MMMM yyyy", { locale: tr })); 
    };


    useEffect(() => {
        if(loggedContext){
            getAllPayments();
        }
        else{
            navigate("/SekuSoftwareAdminPanel")
        }
    }, [])


    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const getAllPayments = async () => {
        const {data,error} = await supabase
        .from("create_pay_date")
        .select("*")

        if(error){
            console.error(error);
            toast.error("Veriler alınırken bir hata oluştu!");   
        }
        else{
            setLoading(false);
            console.log(data);
            setData(data);
            filterSelectPayDate(data);
        }
    }

    const createPaymentDate = async () => {
        setLoading(true);
        toast.loading("Yükleniyor...")
        const {data,error} = await supabase
        .from("create_pay_date")
        .insert([{
            startPayDate: sendingDate,
            endPayDate: sendingDate2,
            price: priceState,
            siteUrl: siteUrlState,
            isPay: false
        }])

        if (error) {
            toast.dismiss();
            toast.error("Ödeme tarihi eklenirken hata oluştu!")
            console.error('Error inserting data:', error);
          } else {
            toast.dismiss();
            getAllPayments();
            setModalOpen(false);
            toast.success("Ödeme tarihi eklendi!")
          }
    }

    const payToggle = async () => {
        toast.loading("Yükleniyor...")
        const {data,error} = await supabase
        .from("create_pay_date")
        .update({isPay: !detailModal.isPay})
        .eq("id",detailModal.id)

        if(error){
            console.error(error)
            toast.dismiss();
            toast.error("Ödeme işaretlenirken bir hata oluştu!")
        }
        else{
            toast.dismiss();
            setDetailPayForModal(!detailPayForModal);
            getAllPayments();
            toast.success("Ödeme değişikliği kaydedildi.")
        }
    }

    const deletePay = async () => {
        toast.loading("Yükleniyor...")
        const {error} = await supabase
        .from("create_pay_date")
        .delete()
        .eq("id", detailModal.id)

        if(error){
            console.error(error)
            toast.dismiss();
            toast.error("Ödeme silinirken bir hata oluştu!")
        }
        else{
            toast.dismiss();
            setDetailPayForModal(!detailPayForModal);
            getAllPayments();
            toast.success("Ödeme başarıyla silindi!")
        }
    }


    const filterSelectPayDate = async (data) => {
        let newData = [...data];
        console.log("started", data);
    
        if (!filters.unpaid && !filters.dueToday && !filters.overdue) {
            console.log("before check", data);
            setFilteredData(data);
            console.log("1");
            return;
        }
    
        if (filters.unpaid) {
            newData = newData.filter(item => item.isPay == false);
            console.log("1x - Unpaid Filtered Data:", newData);
        }
    
        if (filters.overdue) {
            newData = newData.filter(item => {
                const itemDate = Number(item.endPayDate); 
                return itemDate < Date.now() && !item.isPay;
            });
            console.log("2 - Overdue Filtered Data:", newData);
        }
    
        if (filters.dueToday) {
            const now = Date.now(); 
            const fiveDaysLater = now + (5 * 24 * 60 * 60 * 1000); 
    
            newData = newData.filter(item => {
                const itemDate = Number(item.endPayDate); 
                console.log(now,fiveDaysLater,itemDate)
                return itemDate >= now && itemDate <= fiveDaysLater && !item.isPay; 
            });
            console.log("3 - Due Today Filtered Data:", newData);
        }
    
        setFilteredData(newData);
        setLoading(false);
        console.log("end");
    };
    
    
    
    const formatTimestamp = (timestamp) => {
        const timestampNum = Number(timestamp); 
        if (isNaN(timestampNum)) return "Geçersiz tarih"; 

        const date = new Date(timestampNum);
        
        const months = [
          "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
          "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ];
        
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        return `${day} ${month} ${year}`;
      };

    const handleCheckboxChange = (filterName) => {
        setFilters((prev) => ({
            ...prev,
            [filterName]: !prev[filterName],
        }));
    };
    

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

    return(
        <>
        <Modal style={customStyles} isOpen={modalOpen}>
            <div className="flex justify-end">
                <img src={Close} className="w-[35px]" onClick={() => setModalOpen(!modalOpen)} alt="Close" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <p className="inter-500">Site URL</p>
                    <input type="text" value={siteUrlState}  onChange={(e) => setSiteUrlState(e.target.value)} className="p-2 rounded-lg outline-0 border" placeholder="Site URL"/>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="inter-500">Ödeme Başlama Tarihi</p>
                    <DatePicker selected={selectedDate} className="border p-2 rounded-lg" onChange={handleDateChange} dateFormat="dd MMMM yyyy" locale={tr} placeholderText="Tarih Seç"/>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="inter-500">Son Ödeme Tarihi</p> 
                    <DatePicker selected={selectedDate2} className="border p-2 rounded-lg" onChange={handleDateChange2} dateFormat="dd MMMM yyyy" locale={tr} placeholderText="Tarih Seç"/>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="inter-500">Tutar:</p>
                    <input type="text" value={priceState}  className="p-2 rounded-lg outline-0 border" onChange={(e) => setPriceState(e.target.value)} placeholder="Tutar"/>
                </div>
                <button className="bg-sky-500 hover:bg-sky-600 text-center text-white inter-500 rounded-lg py-2 transition-all duration-300" onClick={() => createPaymentDate()}>Oluştur</button>
            </div>
        </Modal>
        <Modal style={customStyles} isOpen={detailPayForModal}>
            <div className="flex justify-end" onClick={() => setDetailPayForModal(false)}>
                <img src={Close} className="w-[35px]"  alt="Close" />
            </div>
            <div className="flex flex-col">
                <p>Site ismi: <span>{detailModal.siteUrl}</span></p>
                <p>Ödeme Başlama Tarihi: <span>{detailModal.startPayDate}</span></p>
                <p>Son Ödeme Tarihi: <span>{detailModal.endPayDate}</span></p>
                <p>Tutar: <span>{detailModal.price}</span></p>
                <p>Ödeme durumu: <span>{detailModal.isPay ? "Ödendi" : "Ödenmedi"}</span></p>
            </div>
            {detailModal.isPay ? 
            <>
                <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white inter-500 rounded-lg px-4 py-2 mt-4" onClick={() => payToggle()}>Ödenmedi olarak işaretle</button>
            </> : 
            <>
                <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white inter-500 rounded-lg px-4 py-2 mt-4" onClick={() => payToggle()}>Ödendi olarak işaretle</button>
            </>}
            <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white inter-500 rounded-lg px-4 py-2 mt-4 ms-4" onClick={() => deletePay()}>Ödemeyi sil</button>
        
        </Modal>
        {loading ? <Loading /> :
            <div className="flex flex-col h-screen w-full p-5 min-w-[1000px] overflow-auto">
                <p className="inter-600 text-2xl">Listelenen ödemeler</p>
                <div className="flex flex-col items-start my-4">
                   <div className="flex items-center gap-4">
                        <p className="inter-500 text-lg bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-4 py-2 text-white inter-600 rounded-lg" onClick={() => {setModalOpen(!modalOpen)}}>Ödeme Ekle</p>
                        <p className="inter-500 text-lg bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-4 py-2 text-white inter-600 rounded-lg cursor-pointer" onClick={() => filterSelectPayDate(data)}>Filtrele</p>
                   </div>
                    <div className="flex items-center gap-5 my-4 overflow-auto max-w-[835px] lg:max-w-none">
                    {[
                        { key: "unpaid", label: "Ödeme yapmayanları listele" },
                        { key: "dueToday", label: "Ödemesi yaklaşanları listele" },
                        { key: "overdue", label: "Ödemesi gecikenleri listele" },
                    ].map(({ key, label }) => (
                        <div key={key} className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={filters[key]}
                                onChange={() => {
                                    handleCheckboxChange(key);
                                }}
                            />
                            <p className="inter-500 text-nowrap">{label}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="flex items-center ">
                        <div className="w-1/5 flex justify-center border">
                            <p className='inter-500 text-nowrap'>Site URL:</p>
                        </div>
                        <div className="w-1/5 flex justify-center border">
                            <p className='inter-500 text-nowrap'>Ödeme Başlama Tarihi</p>
                        </div>
                        <div className="w-1/5 flex justify-center border">
                            <p className='inter-500 text-nowrap'>Son Ödeme Tarihi</p>
                        </div>
                        <div className='w-1/5 flex justify-center border'>
                            <p className='inter-500 text-nowrap'>Tutar:</p>
                        </div>
                        <div className="w-1/5 flex justify-center border">
                            <p className="inter-500 text-nowrap">Ödeme Durumu</p>
                        </div>
                </div>
                <div className="flex flex-col">
                     {filteredData && filteredData.map((pay,key) => {
                        console.log("filteredData here", filteredData)
                        return(
                            <>
                            <div key={key} className="flex items-center" onClick={() => {setDetailModal(pay); setDetailPayForModal(!detailPayForModal)}}>
                                <div className="w-1/5 flex justify-center border">
                                    <p className='inter-500'>{pay.siteUrl}</p>
                                </div>
                                <div className="w-1/5 flex justify-center border">
                                    <p className='inter-500'>{formatTimestamp(pay.startPayDate)}</p>
                                </div>
                                <div className="w-1/5 flex justify-center border">
                                    <p className='inter-500'>{formatTimestamp(pay.endPayDate)}</p>
                                </div>
                                <div className='w-1/5 flex justify-center border'>
                                    <p className='inter-500'>{pay.price}</p>
                                </div>
                                <div className="w-1/5 flex justify-center border">
                                    <p className="inter-500">{pay.isPay ? "Ödendi" : "Ödenmedi"}</p>
                                </div>
                            </div>
                            </>
                        )
                     })}
                </div>
            </div>
        }
            
        </>
    )
}

export default CreatePayDate