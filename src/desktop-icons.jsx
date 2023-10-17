import React,{useState} from 'react';
import './desktop-icons.css';
import { AiOutlineClose } from "react-icons/ai";
import Calculator from './calculator';
import Weather from './weather';

// Desktop Display
import dthisPC from './Images/Window/Img/pcDisplay.png';
import dedge from './Images/Window/Img/edgeDisplay.PNG';
import dbin from './Images/Window/Img/binDisplay.PNG';


// Desktop Icons
import thisPc from './Images/Window/Img/thispc.png';
import edge from './Images/Window/Img/edgeicon.png';
import bin from './Images/Window/Img/recyclebinicon.png';
import calc from './Images/Window/Img/calcIcon.png';
import weather from './Images/Window/Img/weatherIcon.png'

const DesktopIcons = () => {
  
  const [desk,setDesk]=useState("");
  const [desk1,setDesk1]=useState("");
  const [desk2,setDesk2]=useState("");
  const [desk3,setDesk3]=useState("");
  const [desk4,setDesk4]=useState("");
  
  return (
    <>
      <div className="desktop_display">
        <div id="pc-folder" className={desk}>
          <img src={dthisPC} alt="display"/>
          <i id="pc-close" onClick={()=>setDesk("")}><AiOutlineClose /></i>
        </div>
        <div id="edge-display" className={desk1}>
          <img src={dedge} alt="display"/>
          <i id="edge-close" onClick={()=>setDesk1("")}><AiOutlineClose /></i>
        </div>
        <div id="bin-folder" className={desk2}>
          <img src={dbin} alt="display"/>
          <i id="bin-close" onClick={()=>setDesk2("")}><AiOutlineClose /></i>
        </div>
        <Calculator 
          desk3={desk3}
          setDesk3={setDesk3}
        />
        <Weather 
          desk4={desk4}
          setDesk4={setDesk4}
        />
      </div> 

      <div className="desktop_icons">
        <img src={thisPc} alt="PC-icon" onDoubleClick={()=>setDesk("display")}/>
        <p>This PC</p>
        <img src={edge} alt="edge-icon" onDoubleClick={()=>setDesk1("display")}/>
        <p>Microsoft Edge</p>
        <img src={bin} alt="bin-icon" onDoubleClick={()=>setDesk2("display")}/>
        <p>Recycle Bin</p>
        <img src={calc} alt="calc-icon" onDoubleClick={()=>setDesk3("display")}/>
        <p>Calculator</p>
        <img src={weather} alt="weather-icon" onDoubleClick={()=>setDesk4("display")}/>
        <p>Weather Api</p>
    </div> 
    </>
    
    
   
  )
}

export default DesktopIcons