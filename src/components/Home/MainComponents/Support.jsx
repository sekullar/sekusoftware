import Header from "./Header"
import { useCookies } from "react-cookie";

const Support = () => {

    const [cookies, setCookie] = useCookies(["darkMode"]);

    return(
        <>
            <Header />
            <div className="flex justify-center select-none">
                <div className="flex flex-col items-start gap-6">
                    <div className="flex flex-col">
                        <p className="inter-500 text-xl mb-3">Konu</p>
                        <input type="text" className={`w-[350px] border p-2 rounded-lg outline-0 ${cookies.darkMode ? "bg-transparent border p-2 rounded-lg border-gray-400 focus:bg-gray-600 transition-all duration-300" : ""}`} placeholder="Konu"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="inter-500 text-xl mb-3">Size ulaşabileceğimiz e-posta veya telefon numarası</p>
                        <input type="text" className={`w-[350px] border p-2 rounded-lg outline-0 ${cookies.darkMode ? "bg-transparent border p-2 rounded-lg border-gray-400 focus:bg-gray-600 transition-all duration-300" : ""}`} placeholder="İletişim adresi"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="inter-500 text-xl mb-3">Konu</p>
                        <input type="text" className={`w-[350px] border p-2 rounded-lg outline-0 ${cookies.darkMode ? "bg-transparent border p-2 rounded-lg border-gray-400 focus:bg-gray-600 transition-all duration-300" : ""}`} placeholder="Konu"/>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 inter-500 text-white px-5 py-2 rounded-lg">Gönder</button>
                </div>
            </div>
        </>        
    )
}

export default Support