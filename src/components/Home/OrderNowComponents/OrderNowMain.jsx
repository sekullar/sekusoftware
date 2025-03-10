import React, { use, useState } from "react";
import Header from "../MainComponents/Header";
import Bottom from "../../../images/bottom.svg";
import "../../../css/OrderNowMain.css";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { createClient } from '@supabase/supabase-js'
import TelegramBot from "../tools/TelegramBot";


const OrderNowMain = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [customerName,setCustomerName] = useState("");
    const [customerMail,setCustomerMail] = useState("");
    const [customerPhone,setCustomerPhone] = useState("");
    const [cookies, setCookie] = useCookies(["darkMode"]);
    const [trigger,setTrigger] = useState(1);

    const options = [
        { value: "", label: "Seçiniz..." },
        { value: "professional", label: "Profesyonel web sitesi" },
        { value: "qrweb", label: "QR Menü sitesi" },
        { value: "special", label: "Özel web sitesi" },
        { value: "love", label: "Anı sitesi" },
        { value: "production", label: "İşletme tanıtım sitesi" }
    ];

    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl,supabaseKey);

    const sendOrder = async () => {
        setTrigger(trigger + 1)
        toast.loading("Yükleniyor...")
        try{
            const {data,error} = await supabase
            .from("orders")
            .insert([
                {website_type: selectedOption, customer_name: customerName, customer_mail: customerMail, customer_phone: customerPhone}
            ]);

            if (error) {
                toast.dismiss();
                toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
            } else {
                toast.dismiss();
                toast.success("Siparişiniz başarıyla gönderildi!");
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col select-none">
            <TelegramBot task="order" messageParam={customerName} trigger={trigger}/>
            <Header />
            <div className="w-full flex items-center flex-col">
                <div className={`flex flex-col p-4 shadow-2xl border ${cookies.darkMode ? "border-stone-700" : ""} rounded-lg w-[330px] sm:w-[500px]`}>
                    <p className="inter-500 mb-3">Ne tür bir web sitesine ihtiyacınız var?</p>
                    <select
                        className={`p-2 border ${cookies.darkMode ? "border-stone-700" : ""} rounded-lg w-[250px] sm:w-[350px] outline-0 focus:border-sky-600 transition-all duration-300 ${cookies.darkMode ? "bg-stone-800" :"bg-transparent"}`}
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                <span></span>{option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedOption ? (
                    <div className="flex flex-col items-center">
                        <img src={Bottom} alt="Bottom" className={`my-5 w-[35px] downAni2 ${cookies.darkMode ? "invert" : ""}`} />
                        <div className={`lateAni1 flex flex-col p-4 items-center shadow-2xl border ${cookies.darkMode ? "border-stone-700" : ""} rounded-lg w-[330px] sm:w-[500px]`}>
                            <p className="inter-500 text-3xl text-center">İletişim bilgilerinizi girin</p>
                            <p className="inter-400 text-center mt-3">
                                Sitenizin yapımına başlamak için bilgilerinizi girin{" "}
                                <span className="inter-500">sizi arayalım.</span>
                            </p>
                            <p className="mt-6 mb-3">İsim</p>
                            <input
                                type="text"
                                className="p-2 rounded-lg w-[300px] outline-0 border focus:border-sky-600 transition-all duration-300"
                                placeholder="İsim"
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                            <p className="mt-6 mb-3">E-Posta</p>
                            <input
                                type="mail"
                                className="p-2 rounded-lg w-[300px] outline-0 border focus:border-sky-600 transition-all duration-300"
                                placeholder="E-Posta"
                                onChange={(e) => setCustomerMail(e.target.value)}
                            />
                            <p className="mt-6 mb-3">Telefon Numarası</p>
                            <input
                                type="tel"
                                className="p-2 rounded-lg w-[300px] outline-0 border focus:border-sky-600 transition-all duration-300"
                                placeholder="Telefon Numarası"
                                onChange={(e) => setCustomerPhone(e.target.value)}
                            />
                            <div className="flex justify-center mt-5">
                                <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-4 py-2 rounded-lg w-[250px] text-white outline-0" onClick={() => sendOrder()}>
                                    Gönder
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default OrderNowMain;
