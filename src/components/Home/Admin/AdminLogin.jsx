import { useState, useContext } from "react"
import Logo from "../../../images/logo3.svg"
import { createClient } from '@supabase/supabase-js';
import toast from "react-hot-toast";
import Main from "./Main";
import { AdminContext } from "../Context/AdminContext";

const AdminLogin = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState();
    const [logged,setLogged] = useState(false);

    const {setLoggedContext} = useContext(AdminContext);


    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const login = async () => {
        toast.loading("Yükleniyor...")
        try{
            const { data,error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                toast.dismiss();
                setEmail("");
                setPassword("");
                toast.error("E-Posta veya şifre yanlış!");
            } else {
                setUser(data);
                toast.dismiss();
                setLogged(true);
                setLoggedContext(true);
                toast.success("Giriş başarılı!");
            }
        }
        catch(error){
            toast.dismiss();
            console.error(error)
            toast.error("Admin paneline giriş yapılırken sorun oluştu!");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            login();
        }
    };
    

    return(
        <>
            {logged ? 
            <>
                <Main />

            </> : 
                <div className="flex justify-center items-center h-screen w-full flex-col">
                    <img src={Logo} className="w-[75px] mb-6" alt="Logo" />
                    <div className="flex flex-col p-8 border rounded-lg">
                        <div className="flex flex-col">
                            <p className="inter-500 ">Kullanıcı adı</p>
                            <input type="text" value={email} onKeyDown={handleKeyDown} onChange={(e) => setEmail(e.target.value)} className="p-2 rounded-lg outline-0 border" placeholder="E-Posta"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <p className="inter-500 ">Şifre</p>
                            <input type="password" value={password} onKeyDown={handleKeyDown} onChange={(e) => setPassword(e.target.value)} className="p-2 rounded-lg outline-0 border" placeholder="Şifre"/>
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 rounded-lg py-2 mt-4 text-white inter-500" onClick={() => login()}>Giriş yap</button>
                    </div>
                </div>
            }
        </>
    )
}

export default AdminLogin