import { useEffect, useState, useContext } from 'react';
import toast from "react-hot-toast";
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import Switch from '../tools/Switch';
import AdminAccessButton from '../tools/AdminAccessButton';


const SiteAccess = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [loggedTrue,setLoggedTrue] = useState(false);
    const [user,setUser] = useState("");
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState();

    const [innerFunc,setInnerFunc] = useState(1);  

    const navigate = useNavigate();


    const supabaseUrl = process.env.REACT_APP_APIURL;
    const supabaseKey = process.env.REACT_APP_APIKEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            login();
        }
    };

    const {loggedContext,setToken} = useContext(AdminContext);

    useEffect(() => {
        if(!loggedContext){
            navigate("/SekuSoftwareAdminPanel")
        }
    }, [])

    useEffect(() => {
        if(innerFunc != 1){
            getAllAccessibleSite();
        }
    }, [innerFunc])

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
                setToken(data.access_token);
                if(data.user.id){
                    setLoggedTrue(true);
                }
                toast.dismiss();
                toast.success("Giriş başarılı!");
            }
        }
        catch(error){
            toast.dismiss();
            console.error(error)
            toast.error("Admin paneline giriş yapılırken sorun oluştu!");
        }
    }

    const getAllAccessibleSite = async () => {
        setLoading(true);
        const{data,error} = await supabase
        .from("site_access")
        .select("*")

        if (error) {
            console.error("Veri çekme hatası:", error.message);
            toast.dismiss();
            toast.error("Veriler alınırken hata oluştu!");
        } else {
            setData(data);
            setLoading(false);
        }
    }

    

    useEffect(() => {
        if(loggedTrue){
            getAllAccessibleSite();
        }
    }, [loggedTrue])

    return(
        <>
            {!loggedTrue ? 
                <div className="flex w-screen h-screen bodyGradient justify-center items-center">
                    <div className="flex flex-col items-center bg-semiwhite p-5 px-8 rounded-lg">
                        <p className="inter-600 text-3xl opacity-80 ">Bu işleme devam edebilmek için <br /> yeniden giriş yapmanız gerekiyor</p>
                        <div className="flex flex-col items-center mt-12">
                            <div className="flex flex-col w-[330px]">
                                <p className="inter-500 text-xl mb-3">E-posta</p>
                                <input type="text" onKeyDown={handleKeyDown} onChange={(e) => setEmail(e.target.value)} className="rounded-md p-1 outline-0 border" placeholder="E-Posta"/>
                            </div>
                            <div className="flex flex-col mt-8 w-[330px]">
                                <p className="inter-500 text-xl mb-3">Parola</p>
                                <input type="password" onKeyDown={handleKeyDown} onChange={(e) => setPassword(e.target.value)} className="rounded-md p-1 outline-0 border" placeholder="Parola"/>
                            </div>
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300 inter-600 text-lg w-[330px] mt-8 outline-0 rounded-lg py-2" onClick={() => login()}>Giriş yap</button>
                    </div>
                </div> 
            : 
            <>
                <div className="flex items-center gap-4 flex-wrap w-full h-screen">
                    <div className="flex h-full w-full justify-center items-center">
                            {data && data.map((site,key) => {
                                return(
                                    <>
                                        <div key={key} className="flex flex-col items-center border p-5 shadow-xl rounded-lg">
                                            <p className="text-black text-2xl inter-500 mb-3">{site.siteUrl}</p>
                                            <AdminAccessButton isActive={site.site_online} id={site.id} triggerFunc={setInnerFunc}/>
                                        </div>
                                    </>
                                )
                            })}
                    </div>
                </div>
            </>}
        </>
    )
}

export default SiteAccess