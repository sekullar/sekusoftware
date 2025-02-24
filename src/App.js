import Main from "./components/Home/MainComponents/Main";
import "./css/main.css"
import t1 from "./images/t1.webp"
import { LanguageProvider } from "./components/Home/Context/LanguageContext";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Home/MainComponents/Loading";
import OrderNowMain from "./components/Home/OrderNowComponents/OrderNowMain";
import PriceInfoMain from "./components/Home/PriceInfoComponents/PlanInfoMain";
import ProfessionalSite from "./components/Home/ServicesComponents/ProfessionalSite";
import QRSite from "./components/Home/ServicesComponents/QRSite"
import MemorySite from "./components/Home/ServicesComponents/MemorySite"
import PromotionSite from "./components/Home/ServicesComponents/PromotionSite"
import Support from "./components/Home/MainComponents/Support";
import ShopTerms from "./components/Home/MainComponents/ShopTerms";
import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
import AdminLogin from "./components/Home/Admin/AdminLogin";
import { AdminProvider } from "./components/Home/Context/AdminContext";
import ServerInfo from "./components/Home/Admin/ServerInfo";
import { useEffect } from "react";
import Logo from "./images/logo3.svg"
import { useNavigate } from "react-router-dom";



function App() {
  


  return (
   <>
    <AdminProvider>
      <OffcanvasProvider>
        <Toaster />
          <LanguageProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Loading/>} />
                <Route path="/Home" element={<Main/>} />
                <Route path="/OrderNow" element={<OrderNowMain/>} />
                <Route path="/PlanInfo" element={<PriceInfoMain />} />
                <Route path="/ProfessionalSiteInfo" element={<ProfessionalSite />} />
                <Route path="/QRSiteInfo" element={<QRSite />} />
                <Route path="/MemorySiteInfo" element={<MemorySite/>} />
                <Route path="/PromotionSiteInfo" element={<PromotionSite />} />
                <Route path="/Support" element={<Support />} />
                <Route path="/ShopTerms" element={<ShopTerms />} />
                  <Route path="/SekuSoftwareAdminPanel" element={<AdminLogin />} />
                  <Route path="/SekuSoftwareAdminPanel/ServerInfo" element={<ServerInfo />} />
              </Routes>
            </Router>
          </LanguageProvider> 
      </OffcanvasProvider>
    </AdminProvider>
   </>
  );
}

export default App;
