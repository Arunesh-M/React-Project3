import React, { useState,useEffect, } from 'react';
import './log.css';
import login from './Images/login.png';
import { FaArrowRight } from "react-icons/fa6";
import { GrPowerShutdown } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Log = () => {
    const d=new Date()
 
    const twelve=d.getHours() % 12 || 12;
    const hours=twelve<10 ? `0${twelve}` : twelve;
 
    const minute=d.getMinutes()
    const minutes=minute <10 ? `0${minute}` : minute;

    const day = () =>{
        const day=d.getDay()
        const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const result=days[day]
        return result
    }

    const month = () =>{
        const month=d.getMonth()
        const months=["January","February","March","April","May","June","July",
        "August","September","October","November","December"]
        const result=months[month]
        return result
    }

    const date=d.getDate();

    const [display,showDisplay]=useState(false)
    const [shown,isShown]=useState(false);
    const [power,isPower]=useState(false);
    const [pass,setPass]=useState("")
    const [error,setError]=useState("")

    useEffect(()=>{
        const start= ()=>{
            showDisplay(true)
        }
        
        setTimeout(()=>{start()},5000)
    },[])
          
    const onClick=(e)=>{
        e.preventDefault();
        isShown(true)
    }

    const navigate=useNavigate()
    
    const onClick1=(e)=>{
        e.preventDefault()
        let value={pass}
        let password=value.pass
        if(password===""){
            setError("Password is Empty")          
            setTimeout(()=>{
                setError("")
            },5000) 
        }

        else if(password.length<5||password.length>15){
            setError("Between 5 to 15 length")          
            setTimeout(()=>{
                setError("")
            },5000) 
        }

        else if(password !=="12345678"){
            setError("Wrong Password")          
            setTimeout(()=>{
                setError("")
            },5000) 
        }

        else{
            navigate("/window")
        }    
    }

    const onClick2=(e)=>{
        e.preventDefault();
        isPower(true)
    }

    return (
    <div className="log resp" style={{background:!power ? null : "black"}}>
       <div className="blur" >
            {!display ? <div className="date-time">
                <p className="time">{`${hours}:${minutes}`}</p>
                <p className="date">{`${day()},${month()} ${date}`}</p>
            </div>
            : <div className="sign" style={{display:!power ? "flex" : "none"}}>
                <img className="img" src={login} alt="user-pic"/>
                <p className="name">John Doe</p>
                {!shown ? <button className="sign-in" onClick={onClick}>Sign In</button> 
                : <>
                    <form>
                    <input type="password" className="int" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    <button className="btn" onClick={onClick1}><FaArrowRight /></button>
                    </form>   
                    <p className="error" >{error}</p>
                </>    
            }      
                <button className="shutdown" onClick={onClick2}><GrPowerShutdown /></button>       
            </div> }
        </div>
    </div>
  )
}

export default Log