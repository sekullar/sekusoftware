import React, { useState } from "react";
import Header from "../MainComponents/Header";
import Bottom from "../../../images/bottom.svg";
import "../../../css/OrderNowMain.css";
import { useCookies } from "react-cookie";

const OrderNowMain = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [cookies, setCookie] = useCookies(["darkMode"]);

    const options = [
        { value: "", label: "Seçiniz..." },
        { value: "professional", label: "Profesyonel web sitesi" },
        { value: "qrweb", label: "QR Menü sitesi" },
        { value: "special", label: "Özel web sitesi" },
        { value: "love", label: "Anı sitesi" },
        { value: "production", label: "İşletme tanıtım sitesi" }
    ];

    return (
        <div className="flex flex-col select-none">
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
                            />
                            <p className="mt-6 mb-3">E-Posta</p>
                            <input
                                type="mail"
                                className="p-2 rounded-lg w-[300px] outline-0 border focus:border-sky-600 transition-all duration-300"
                                placeholder="E-Posta"
                            />
                            <p className="mt-6 mb-3">Telefon Numarası</p>
                            <input
                                type="tel"
                                className="p-2 rounded-lg w-[300px] outline-0 border focus:border-sky-600 transition-all duration-300"
                                placeholder="Telefon Numarası"
                            />
                            <div className="flex justify-center mt-5">
                                <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-4 py-2 rounded-lg w-[250px] text-white outline-0">
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
