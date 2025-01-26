import React,{ useEffect, useContext } from "react";
import Header from "../Header"
import { LanguageContext } from "../Context/LanguageContext";
import { useNavigate } from "react-router-dom";
import Article from "../MainComponents/Article"
import WhyUsMain from "../WhyUsComponents/WhyUsMain";
import InfoMain from "../InfoComponents/InfoMain";

const Main = () => {

    const {language} = useContext(LanguageContext)

    const navigate = useNavigate();

    useEffect(() => {
        if(language == null){
            navigate("/")
        }
    }, [])
    return(
        <>
            <Header />
            <Article />
            <WhyUsMain />
            <InfoMain />
        </>
    )
}

export default Main