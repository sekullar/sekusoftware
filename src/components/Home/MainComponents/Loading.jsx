import React,{useEffect, useState, useContext} from "react"
import { LanguageContext } from "../Context/LanguageContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../../css/Loading.css"


const Loading = () => {

    const {setLanguage} = useContext(LanguageContext);
    const [loading,setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
      navigate("/Home")
    }, [])  

    // useEffect(() => {
    //     const getLocation = async () => {
    //       try {
    //         const response = await fetch("https://ipapi.co/json/"); 
    //         const data = await response.json();
    //         console.log(data);
    //         if (data.country_code === "TR") {
    //           setLanguage("tr"); 
    //           setLoading(false);
    //           navigate("/Home")
    //         } else {
    //           setLanguage("en");
    //           setLoading(false); 
    //           navigate("/Home")
    //         }
    //       } catch (error) {
    //         navigate("/Home")
    //         toast.error("Check your internet connection!");
    //         console.error("Konum alınırken hata oluştu:", error);
    //       }
    //     };
    
    //     getLocation();
    //   }, []); 

    return(
        <>
            <div className="fixed flex justify-center items-center h-screen w-full bg-black">
                <div className="loader"></div> 
            </div>
        </>
    )
}

export default Loading