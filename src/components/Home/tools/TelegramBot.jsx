import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const TelegramBot = ({ task, messageParam, trigger }) => {
    const botToken = process.env.REACT_APP_TELEGRAMAPIKEY;
    const chatId = process.env.REACT_APP_TELEGRAMCHATID;
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const [message, setMessage] = useState("");
    const [shouldSend, setShouldSend] = useState(false);
    const [supportMessage,setSupportMessage] = useState("");

    useEffect(() => {
        if (shouldSend && message !== "") {
            sendMessage();
            setShouldSend(false);
        }
    }, [message]);

    const sendMessage = async () => {
        console.log("Gönderilecek mesaj:", message, messageParam, supportMessage);
        await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: task == "support" ? `✉️ Yeni bir destek talebi bulunuyor! İçerik:${messageParam}` : task == "order" ? `📬Yeni sipariş var!:${messageParam}` : message,
                parse_mode: "Markdown",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleClick = () => {
        if (task === "test") {
            setMessage("Bu bir test mesajıdır. Bugün nasılsınız?");
            setShouldSend(true);
        }
    };

    useEffect(() => {
        if(task == "support" && trigger != 1){
            sendMessage();
        }
        if(task == "order" && trigger != 1){
            sendMessage();
        }
    }, [trigger])

    return (
        <>
            {task === "test" ? (
                <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 outline-0 text-white inter-500 px-4 py-2 rounded-lg" onClick={handleClick}>
                    Telegram botunu test et
                </button>
            ) : (
                ""
            )}
        </>
    );
};

export default TelegramBot;
