import Main from "./components/Home/MainComponents/Main";
import "./css/main.css"
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


function App() {
  return (
   <>
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
          </Routes>
        </Router>
      </LanguageProvider>
   </>
  );
}

export default App;
