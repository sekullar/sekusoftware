import { Children, createContext, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
        const [loggedContext,setLoggedContext] = useState(false);


    return(
        <AdminContext.Provider value={{loggedContext,setLoggedContext}}>
            {children}
        </AdminContext.Provider>    
    )

}


export {AdminProvider,AdminContext}