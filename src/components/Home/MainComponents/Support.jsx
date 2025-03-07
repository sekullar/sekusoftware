import Header from "./Header"
import { useCookies } from "react-cookie";
import { createClient } from '@supabase/supabase-js'
import toast from "react-hot-toast";
import { useState } from "react";
import TelegramBot from "../tools/TelegramBot"

const Support = () => {

    const [cookies, setCookie] = useCookies(["darkMode"]);

    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [contact,setContact] = useState("");


    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl,supabaseKey);

    const sendSupport = async () => {
        toast.loading("Yükleniyor...");
        if (!title || !message || !contact) {
            toast.error("Lütfen tüm alanları doldurun!");
            return;
        }

        try{
            const {data,error} = await supabase
            .from("support_requests")
            .insert([
                { title: title, contact, message }
            ]);

            if (error) {
                toast.dismiss();
                toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
            } else {
                toast.dismiss();
                toast.success("Destek talebiniz başarıyla gönderildi!");
                setTitle("");
                setMessage("");
                setContact("");
            }
        }
        catch(error){
            toast.dismiss();
            toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    }

    return(
        <>
            <Header />
            <div className="flex justify-center select-none">
                <div className="flex flex-col items-start gap-6">
                    <div className="flex flex-col">
                        <p className="inter-500 text-xl mb-3">Konu</p>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} className={`w-[350px] border p-2 rounded-lg outline-0 ${cookies.darkMode ? "bg-transparent border p-2 rounded-lg border-gray-400 focus:bg-gray-600 transition-all duration-300" : ""}`} placeholder="Konu"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="inter-500 text-xl mb-3">Size ulaşabileceğimiz telefon numarası</p>
                        <input type="text" onChange={(e) => setContact(e.target.value)} className={`w-[350px] border p-2 rounded-lg outline-0 ${cookies.darkMode ? "bg-transparent border p-2 rounded-lg border-gray-400 focus:bg-gray-600 transition-all duration-300" : ""}`} placeholder="İletişim adresi"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="inter-500 text-xl mb-3">Mesajınız</p>
                        <input type="text" onChange={(e) => setMessage(e.target.value)} className={`w-[350px] border p-2 rounded-lg outline-0 ${cookies.darkMode ? "bg-transparent border p-2 rounded-lg border-gray-400 focus:bg-gray-600 transition-all duration-300" : ""}`} placeholder="Mesajınız"/>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 inter-500 text-white px-5 py-2 rounded-lg" onClick={() => sendSupport()}>Gönder</button>
                </div>
            </div>
            <TelegramBot task={"support"} messageParam={message}/>
        </>        
    )
}

export default Support