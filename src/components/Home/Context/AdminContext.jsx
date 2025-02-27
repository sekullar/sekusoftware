import { Children, createContext, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
        const [loggedContext,setLoggedContext] = useState(false);
        const [token,setToken] = useState("");


    return(
        <AdminContext.Provider value={{loggedContext,token,setLoggedContext,setToken}}>
            {children}
        </AdminContext.Provider>    
    )

}


export {AdminProvider,AdminContext}