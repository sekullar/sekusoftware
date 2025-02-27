import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AdminAccessButton = ({isActive, id, triggerFunc}) => {

    const supabaseUrl = process.env.REACT_APP_APIURL;;
    const supabaseKey = process.env.REACT_APP_APIKEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [funcValue,setFuncValue] = useState(1)

    useEffect(() => {
        triggerFunc(funcValue)
    }, [funcValue])

    const updateSiteOnline = async () => {
        toast.loading("Yükleniyor...")
        const {data,error} = await supabase
        .from("site_access")
        .update({ site_online: !isActive})
        .eq("id", id)

        if (error) {
            toast.error("İşlem tamamlanırken hata oluştu!")
            console.error('Güncelleme hatası:', error)
          } else {
            if(isActive){
                toast.dismiss();
                toast.success("Site erişime kapatıldı!");
                triggerFunc(prev => prev + 1);
            }
            else{
                toast.dismiss();
                toast.success("Site erişime açıldı!");
                triggerFunc(prev => prev + 1);
            }
          }
    }

  

    return(
        <>
            {isActive ? 
            <>
                <button className="bg-red-500 hover:bg-red-600 transition-all outline-0 px-4 py-2 rounded-lg text-white inter-500" onClick={() => {updateSiteOnline(); setFuncValue(funcValue + 1)}}>Siteyi erişime kapat</button>
            </> : 
            <>
                <button className="bg-sky-500 hover:bg-sky-600 transition-all outline-0 px-4 py-2 rounded-lg text-white inter-500" onClick={() => {updateSiteOnline(); setFuncValue(funcValue + 1)}}>Siteyi erişime aç</button>
            </>} 
        </>
    )
}

export default AdminAccessButton