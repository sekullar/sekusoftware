import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../Context/AdminContext"
import { useNavigate } from "react-router-dom"
import "../../../css/AdminSiteInfo.css"
import { createClient } from '@supabase/supabase-js';
import toast from "react-hot-toast";
import Plus from "../../../images/plus.svg"
import "../../../css/Loading.css"
import Close from "../../../images/close.svg"
import Right from "../../../images/right.svg"

const ServerInfo = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [data,setData] = useState("");
    const [uset,setUser] = useState("");
    const [loggedTrue,setLoggedTrue] = useState(false);
    const [openAddModal,setOpenAddModal] = useState(false);
    const [pageValue,setPageValue] = useState(1);
    const [loading,setLoading] = useState(true);
    const [openDetailModal,setOpenDetailModal] = useState(false);


    //SENDING DATA

    const [sourceName,setSourceName] = useState("");
    const [sourceMail,setSourceMail] = useState("");
    const [sourcePassword,setSourcePassword] = useState("");

    const [hostName,setHostName] = useState("");
    const [hostMail,setHostMail] = useState("");
    const [hostPassword,setHostPassword] = useState("");

    const [databaseName,setDatabaseName] = useState("");
    const [databaseMail,setDatabaseMail] = useState("");
    const [databasePassword,setDatabasePassword] = useState("");

    const [domainName,setDomainName] = useState("");
    const [domainMail,setDomainMail] = useState("");
    const [domainPassword,setDomainPassword] = useState("");

    const [siteMail,setSiteMail] = useState("");
    const [siteRecoveryMail,setSiteRecoveryMail] = useState("");
    const [siteMailPassword,setSiteMailPassword] = useState("");

    const [siteUrl,setSiteUrl] = useState("");
    const [adminMail,setAdminMail] = useState("");
    const [adminPassword,setAdminPassword] = useState("");



    //SHOWİNG DATA
    const [showingData,setShowingData] = useState();


    const navigate = useNavigate();

    const {loggedContext,setLoggedContext,token} = useContext(AdminContext)

    useEffect(() => {
        if(!loggedContext){
            navigate("/SekuSoftwareAdminPanel")
        }
    }, [])

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
                if(data.user.id){
                    setLoggedTrue(true);
                }
                toast.dismiss();
                getSiteInfos();
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
 
    const getSiteInfos = async () => {
        toast.loading("Veriler getiriliyor...");
        setLoading(true);
    
        const session = await supabase.auth.getSession();
        const userEmail = session.data.session?.user?.email; 
    
        if (!userEmail) {
            console.error("Kullanıcı emaili bulunamadı!");
            toast.dismiss();
            return;
        }
    
        const { data, error } = await supabase
            .from("site_infos")  
            .select("*");
    
        if (error) {
            console.error("Veri çekme hatası:", error.message);
            toast.dismiss();
            toast.error("Veriler alınırken hata oluştu!");
        } else {
            toast.dismiss();
            setData(data);
            setLoading(false);
            console.log("Gelen veriler:", data);
        }
    };    

    const createSiteInfo = async () => {
        toast.loading("Yükleniyor...");
        
        if(!sourceName || !sourceMail || !sourcePassword || !hostName || !hostMail || !hostPassword || !databaseName || !databaseMail || !databasePassword || !domainName || !domainMail || !domainPassword || !siteMail || !siteRecoveryMail || !siteMailPassword || !siteUrl || !adminMail || !adminPassword){
            toast.error("Lütfen tüm bilgileri eksiksiz girin");
            return;
        }
    
        const { data, error } = await supabase
            .from("site_infos")
            .insert([
                {
                    siteSourceName: sourceName,
                    siteSourceMail: sourceMail,
                    siteSourcePassword: sourcePassword,
                    siteMail: siteMail,
                    siteMailRecovery: siteRecoveryMail,
                    siteMailPassword: siteMailPassword,
                    hostName: hostName,
                    hostMail: hostMail,
                    hostPassword: hostPassword,
                    databaseName: databaseName,
                    databaseMail: databaseMail,
                    databasePassword: databasePassword,
                    siteUrl: siteUrl,
                    domainName: domainName,
                    domainMail: domainMail,
                    domainPassword: domainPassword,
                    adminPanelMail: adminMail,
                    adminPanelPassword: adminPassword
                }
            ]);
    
        if (error) {
            console.error("Veri eklenirken hata oluştu:", error.message);
            toast.dismiss();
            toast.error("Site verisi oluşturulurken hata oluştu!");
        } else {
            toast.dismiss();
            setOpenAddModal(!openAddModal);
            setSourceName("");
            setSourceMail("");
            setSourcePassword("");
            setSiteMail("");
            setSiteRecoveryMail("");
            setSiteMailPassword("");
            setHostName("");
            setHostMail("");
            setHostPassword("");
            setDatabaseName("");
            setDatabaseMail("");
            setDatabasePassword("");
            setSiteUrl("");
            setDomainName("");
            setDomainMail("");
            setDomainPassword("");
            setAdminMail("");
            setAdminPassword("");
            setPageValue(1);
            getSiteInfos();
            toast.success("Site verisi oluşturuldu.");
            console.log("Başarıyla eklendi:", data);
        }
    };
    

    return(
        <>   
            {openDetailModal ? 
            <>
                <div className="fixed bg-semiblack w-full h-screen flex flex-col justify-center items-center z-50 ">
                    <div className="bg-white px-4 py-4 shadow-xl rounded-lg mb-4 flex justify-between items-center w-[300px]">
                        <a href={`https://${showingData.siteUrl}`} target="_blank" className="inter-600 text-2xl underline">{showingData.siteUrl}</a>
                        <img src={Close} className="w-[45px]" onClick={() => setOpenDetailModal(!openDetailModal)} alt="Close" />
                    </div>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Kaynak Kod Sağlayıcısı</p>
                                <p className="inter-600 text-lg">{showingData.siteSourceName}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Kaynak Kod E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.siteSourceMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Kaynak Kod Şifresi</p>
                                <p className="inter-600 text-lg">{showingData.siteSourcePassword}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Web site E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.siteMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Web Site Kurtarma E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.siteSourceMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Web site E-Posta şifresi</p>
                                <p className="inter-600 text-lg">{showingData.siteSourcePassword}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Sunucu İsmi</p>
                                <p className="inter-600 text-lg">{showingData.hostName}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Sunucu E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.hostMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Sunucu Şifresi</p>
                                <p className="inter-600 text-lg">{showingData.hostPassword}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Veritabanı adı</p>
                                <p className="inter-600 text-lg">{showingData.databaseName}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Veritabanı E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.databaseMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Veritabanı Şifresi</p>
                                <p className="inter-600 text-lg">{showingData.databasePassword}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Domain Sağlayıcı İsmi</p>
                                <p className="inter-600 text-lg">{showingData.domainName}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Domain Sağlayıcı E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.domainMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Domain Sağlayıcı Şifresi</p>
                                <p className="inter-600 text-lg">{showingData.domainPassword}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Site URL</p>
                                <p className="inter-600 text-lg">{showingData.siteUrl}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Admin paneli E-Postası</p>
                                <p className="inter-600 text-lg">{showingData.adminPanelMail}</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-lg p-4">
                                <p className="inter-500 text-lg">Admin paneli şifresi</p>
                                <p className="inter-600 text-lg">{showingData.adminPanelPassword}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </> : ""}
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
                {loading ? 
                <>
                    <div className="flex justify-center items-center w-full h-screen fixed">
                        <div className="loader"></div>
                    </div>
                    
                </> : 
                    <div className="flex flex-col items-center justify-center gap-4 w-full h-screen">
                        <div className={`flex items-center gap-2 transition-all duration-300 overflow-auto w-full py-8 px-4 `}>
                            {data && data.map((site,key) => {
                                return(
                                    <>
                                        <div key={key} className={`flex flex-col border rounded-lg py-6 px-12 shadow-xl transition-all hover:transform[(scale(1.1)] cursor-pointer hover:scale-105 ${openDetailModal ? "z-40 bg-white" : ""}`} onClick={() => {setOpenDetailModal(!openDetailModal); setShowingData(site)}}>
                                            <p className="inter-600 text-2xl">{site.siteUrl}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    <button onClick={() => {setLoggedContext(true); navigate("/SekuSoftwareAdminPanel");}} className="flex items-center bg-sky-500 px-4 py-2 hover:bg-sky-600 mt-3 ms-3 text-white inter-500 rounded-lg transition-all gap-1 outline-0 absolute top-0 start-0  "><img src={Right} className="rotate-180 w-[35px] invert" alt="Right" />{window.innerWidth > 640 ? "Anasayfaya dön" : ""}</button>
                    <div className={`flex items-center  transition-all justify-center cursor-pointer ${openAddModal ? "bg-semiblack w-full h-screen fixed" : "w-auto"}`} >
                        <div className={`flex flex-col items-center ${openAddModal ? "fixed" : "relative"}`}>
                            <div className={`flex items-center cursor-pointer gap-2 border shadow-xl rounded-lg p-3  ${openAddModal ? "w-[340px]  z-50 bg-white" : "w-[300px]"}`} onClick={() => setOpenAddModal(!openAddModal)}>
                                <img src={Plus} className="w-[25px]" alt="Plus" />
                                <p className={`inter-500 text-lg transition-all  ${openAddModal}`}>Kart Ekle</p>
                            </div>
                            <div className={`flex flex-col  ${openAddModal ? "z-50 block" : "hidden "}`}>
                                {pageValue == 1 ?
                                <>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Kaynak Kod Tutucusu</p>
                                        <input  type="text" value={sourceName} onChange={(e) => setSourceName(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Kaynak Kod Tutucusu"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Kaynak Kod E-Postası</p>
                                        <input  type="text" value={sourceMail} onChange={(e) => setSourceMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Kaynak Kod E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Kaynak Kod Şifresi</p>
                                        <input  type="text" value={sourcePassword} onChange={(e) => setSourcePassword(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Kaynak Kod Şifresi"/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue + 1)}>İleri</button>
                                    </div>
                                </> : pageValue == 2 ? <>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Sunucu Adı</p>
                                        <input  type="text" value={hostName} onChange={(e) => setHostName(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Sunucu Adı"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Sunucu E-Postası</p>
                                        <input  type="text" value={hostMail} onChange={(e) => setHostMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Sunucu E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Sunucu Şifresi</p>
                                        <input  type="text" value={hostPassword} onChange={(e) => setHostPassword(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Sunucu Şifresi"/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue - 1)}>Geri</button>
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue + 1)}>İleri</button>
                                    </div>
                                </> : pageValue == 3 ? 
                                <>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Veritabanı Adı</p>
                                        <input  type="text" value={databaseName} onChange={(e) => setDatabaseName(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Veritabanı Adı"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Veritabanı E-Postası</p>
                                        <input  type="text" value={databaseMail} onChange={(e) => setDatabaseMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Veritabanı E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Veritabanı Şifresi</p>
                                        <input  type="text" value={databasePassword} onChange={(e) => setDatabasePassword(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Veritabanı Şifresi"/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue - 1)}>Geri</button>
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue + 1)}>İleri</button>
                                    </div>
                                </>: pageValue == 4 ?
                                <>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Alan Adı Adı</p>
                                        <input  type="text" value={domainName} onChange={(e) => setDomainName(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Alan Adı Adı"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Alan Adı E-Postası</p>
                                        <input  type="text" value={domainMail} onChange={(e) => setDomainMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Alan Adı E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Alan Adı Şifresi</p>
                                        <input  type="text" value={domainPassword} onChange={(e) => setDomainPassword(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Alan Adı Şifresi"/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue - 1)}>Geri</button>
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue + 1)}>İleri</button>
                                    </div>
                                </> : pageValue == 5 ? 
                                <> 
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Web site E-Postası</p>
                                        <input  type="text" value={siteMail} onChange={(e) => setSiteMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Web site E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Web site kurtarma  E-Postası</p>
                                        <input  type="text" value={siteRecoveryMail} onChange={(e) => setSiteRecoveryMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Web site kurtarma  E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Web site E-Posta Şifresi</p>
                                        <input  type="text" value={siteMailPassword} onChange={(e) => setSiteMailPassword(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Web Site Şifresi"/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue - 1)}>Geri</button>
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue + 1)}>İleri</button>
                                    </div>
                                </> : pageValue == 6 ?
                                <>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Site URL</p>
                                        <input  type="text" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Site URL"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Admin Paneli E-Postası</p>
                                        <input  type="text" value={adminMail} onChange={(e) => setAdminMail(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Admin Paneli E-Postası"/>
                                    </div>
                                    <div className="bg-white py-5 px-8 rounded-lg mt-5">
                                        <p className="inter-500 ms-1">Admin Paneli Şifresi</p>
                                        <input  type="text" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="inter-500 outline-0 p-1 mt-2 rounded-lg border" placeholder="Admin Paneli Şifresi"/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => setPageValue(pageValue - 1)}>Geri</button>
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white inter-500 mt-3 py-2 rounded-lg transition-all w-1/2 outline-0" onClick={() => createSiteInfo()}>Kaydet</button>
                                    </div>
                                </> : ""} 
                                
                            </div>
                        </div>
                    </div>
                </div>
                }
            </>}
        </>
    )
}

export default ServerInfo


