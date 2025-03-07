import { Children, createContext, useEffect, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
        const [loggedContext,setLoggedContext] = useState(false);
        const [token,setToken] = useState("");
        const [customerSupportSite,setCustomerSupportSite] = useState("");

        useEffect(() => {
            console.log(loggedContext)
        }, [loggedContext])


    return(
        <AdminContext.Provider value={{loggedContext,token,customerSupportSite, setLoggedContext,setToken,setCustomerSupportSite}}>
            {children}
        </AdminContext.Provider>    
    )

}


export {AdminProvider,AdminContext}