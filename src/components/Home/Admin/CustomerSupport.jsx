import { useEffect, useState, useContext } from "react"
import AdminHeader from "./AdminHeader"
import { createClient } from "@supabase/supabase-js"
import toast from "react-hot-toast"
import Loading from "../tools/Loading"
import { AdminContext } from "../Context/AdminContext"
import { useNavigate } from "react-router-dom"
import TelegramBot from "../tools/TelegramBot"
import Modal from 'react-modal';
import Close from "../../../images/close.svg"


const CustomerSupport = () => {

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
    const [loggedCheck,setLoggedCheck] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
    const [addUrl,setAddUrl] = useState("");


    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const cstsUrl = process.env.REACT_APP_CSTS_URL;
    const cstsApiKey = process.env.REACT_APP_CSTS_APIKEY;

    const csts_supabase = createClient(cstsUrl, cstsApiKey);

    const {loggedContext,setCustomerSupportSite,setToken} = useContext(AdminContext);

    const navigate = useNavigate();

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


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            login();
        }
    };

    const login = async () => {
        toast.loading("Yükleniyor...")
        try{
            const { data,error } = await csts_supabase.auth.signInWithPassword({ email, password });
            if (error) {
                toast.dismiss();
                setEmail("");
                setPassword("");
                toast.error("E-Posta veya şifre yanlış!");
            } else {
                setUser(data);
                setToken(data.access_token);
                if(data.user.id){
                    setLoggedCheck(true);
                }
                getSites();
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

    const siteAdd = async () => {
        toast.loading("Yükleniyor...")
        const {data,error} = await csts_supabase
        .from("cs_sites")
        .insert([
            {
                siteUrl: addUrl
            }
        ])
        
        if(error){
            toast.dismiss();
            console.error(error);
            toast.error("Site URL'si eklenirken hata oluştu!");
        }
        else{
            toast.dismiss();
            setModalOpen(!modalOpen);
            getSites();
            toast.success("Site URL eklendi!")
        }
    }

    const getSites =  async () => {
        setLoading(true);
        const {data,error} = await csts_supabase
        .from("cs_sites")
        .select("siteUrl")

        if(error){
            console.error(error);
            toast.error("getSites alınırken hata oluştu")
        }
        else{
            console.log(data);
            setData(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        if(!loggedContext){
            navigate("/SekuSoftwareAdminPanel")
        }
    }, [])

    const filteredUsers = data.filter(site =>
        site.siteUrl.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return(
        <>  
            <Modal isOpen={modalOpen} style={customStyles}>
                <div className="flex justify-end">
                    <img src={Close} className="w-[35px] cursor-pointer" alt="Close" onClick={() => setModalOpen(!modalOpen)} />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="inter-500 text-xl">Site adı:</p>
                    <input type="text" value={addUrl} placeholder="Site adı" onChange={(e) => setAddUrl(e.target.value)} className="p-2 rounded-lg outline-0 border"/>
                    <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-4 py-2 rounded-lg inter-500 text-white" onClick={() => siteAdd(1)}>Ekle</button>
                </div>
            </Modal>
            {loading ? <Loading /> : 
                <>
                    {loggedCheck ? 
                    <>
                        <AdminHeader />
                        <div className="ms-4 flex flex-col items-start">
                            <TelegramBot task="test"/>
                            <button className="mt-4 bg-sky-500 hover:bg-sky-600 px-4 py-2 transition-all duration-300 rounded-lg inter-500 text-white outline-0" onClick={() => setModalOpen(!modalOpen)}>Site ekle</button>
                        </div>  
                        <div className="flex flex-col relative">
                            <p className="ms-5 inter-500 text-xl mt-4">Lütfen destek vermek istediğiniz siteyi seçin: </p> 
                            <input type="text" value={searchTerm} onChange={handleSearchChange} className="outline-0 border p-2 rounded-lg ms-4 w-[200px] my-5" placeholder="Site ara"/>
                            <div className="flex items-center overflow-auto ms-4 gap-5">
                                {filteredUsers && filteredUsers.map((site,key) => {
                                    return(
                                        <>
                                            <div key={key} className="flex items-center justify-center p-4 rounded-lg border shadow-lg cursor-pointer" onClick={() => {setCustomerSupportSite(site.siteUrl); navigate("/SekuSoftwareAdminPanel/CustomerSupport/CustomerSupportDetail")}}>
                                                <p className="inter-500 text-lg">{site.siteUrl}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div> 
                        </div>
                    </> : 
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
                    </div> }
                    
                </>
            }   
        </>
    )
}

export default CustomerSupport