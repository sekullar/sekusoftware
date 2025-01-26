import Main from "./components/Home/MainComponents/Main";
import "./css/main.css"
import { LanguageProvider } from "./components/Home/Context/LanguageContext";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Home/MainComponents/Loading";


function App() {
  return (
   <>
    <Toaster />
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Loading/>} />
            <Route path="/Home" element={<Main/>} />
          </Routes>
        </Router>
      </LanguageProvider>
   </>
  );
}

export default App;
