import React,{useState} from 'react';
import './taskbar-icons.css';
import { GrPowerShutdown } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

// taskbar display
import dstart from './Images/Window/Img/startmenu.PNG';
import dsearch from './Images/Window/Img/search.jpg';
import dwidget from './Images/Window/Img/widgets.jpg';
import dchrome from './Images/Window/Img/chromeDisplay.PNG';
import dvscode from './Images/Window/Img/vsCodedisplay.PNG';
import dexplorer from './Images/Window/Img/quick-access.png';
import dstore from './Images/Window/Img/store.jpg'


// taskbar icons
import start from './Images/Window/Img/win.PNG';
import search from './Images/Window/Img/searchIcon.PNG'
import widgets from './Images/Window/Img/widgetsIcon.PNG';
import chrome from './Images/Window/Img/chromeIcon.png';
import vscode from './Images/Window/Img/vscodeIcons.PNG';
import explorer from './Images/Window/Img/fileExplorerIcon.png';
import store from './Images/Window/Img/storeIcon.PNG';
import right from './Images/Window/Img/taskbarright.PNG';


const TaskbarIcons = () => {
  
  const navi=useNavigate(); 
  const [task,setTask]=useState(false);
  const [task1,setTask1]=useState(false);
  const [task2,setTask2]=useState(false);
  const [task3,setTask3]=useState(false);
  const [task4,setTask4]=useState(false);
  const [task5,setTask5]=useState(false);
  const [task6,setTask6]=useState(false);

  const logOut=()=>{
     navi("/");
  }
  
  return (
    <>
      <div className="taskbar_display">
         <div id="dstart" className={task ? "display" : ""}>
                <img  src={dstart} alt="display"/> 
                <i className="Power" onClick={()=>logOut()}><GrPowerShutdown /></i>    
         </div>
         <img id="dsearch" className={task1 ? "display" : ""} src={dsearch} alt="display"/>
         <img id="dwidget" className={task2 ? "display" : ""} src={dwidget} alt="display"/>
         <img id="dchrome" className={task3 ? "display" : ""} src={dchrome} alt="display" />
         <img id="dvscode" className={task4 ? "display" : ""} src={dvscode} alt="display"/>
         <img id="dexplorer" className={task5 ? "display" : ""} src={dexplorer} alt="display"/>
         <img id="dstore" className={task6 ? "display" : ""} src={dstore} alt="display"/>
      </div>
      
      
      <div className="taskbar_icons">
        <img src={start} alt="taskbar-i1" onClick={()=>{setTask(!task)}}/>
        <img src={search} alt="taskbar-i2" onClick={()=>{setTask1(!task1)}}/>
        <img src={widgets} alt="taskbar-i3" onClick={()=>{setTask2(!task2)}}/>
        <img src={chrome} alt="taskbar-i4" onClick={()=>{setTask3(!task3)}}/>
        <img src={vscode} alt="taskbar-i5" onClick={()=>{setTask4(!task4)}}/>
        <img className="explorer" src={explorer} alt="taskbar-i6" onClick={()=>{setTask5(!task5)}}/>
        <img src={store} alt="taskbar-i7" onClick={()=>{setTask6(!task6)}}/>
        <img className="right" src={right} alt="taskbar-i" />
      </div>
    </>
    
  )
}

export default TaskbarIcons;