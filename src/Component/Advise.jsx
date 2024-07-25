import "../StyleSheet/Advice.css"
import { useEffect, useState } from "react"
import axios from 'axios'


// Created this for basic api integration
export const Advice= ()=>{

    const [advice,setAdvice] = useState("Click get advise");
    
    // const getAdvice= async ()=>{
    //     const response = await fetch("https://api.adviceslip.com/advice");
    //     const data = await response.json();
    //     setAdvice(data.slip.advice);
    // }
    const lala = ()=>{
        console.log("kak")
    }

    const getAdvice = async ()=>{
        const response = await axios.get("https://api.adviceslip.com/advice")
        setAdvice(response.data.slip.advice);
    }

    useEffect(()=>{
        getAdvice();
    },[])

    return(
    <>  
        <div className="mainContainer">
            <div className="header">Get Advise</div>
            <div className="bodyContainer">
                <h1 className="adviceText">{advice}</h1>
                <button className="getButton" onClick={getAdvice}>Get advise</button>
            </div> 
        </div> 
    </>
)}