import React,{useState} from 'react';
import './calculator.css';
import { AiOutlineClose } from "react-icons/ai";


const Calculator = ({desk3,setDesk3}) => {
 
    const [value,setValue]=useState("");

    const calculate=()=>{
        try{
            setValue(eval(value))
        }
        catch{
           setValue("ERROR")
        }
    }

    return (
        <div id="calc-display" className={desk3}>
            <input className="input" type="text" placeholder="0" value={value} readOnly />
            <input type="button" className='button clear' value="Cl" onClick={(e)=>setValue("")}/>
            <input type="button" className="button del" value="Del" onClick={(e)=>setValue(value.toString().slice(0,-1))}/>
            <input type="button" className="button mod" value="%" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button div" value="/" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 7" value="7" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button"className="button 8" value="8" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 9" value="9" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button mul" value="*" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 4" value="4" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 5" value="5" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 6" value="6" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button min" value="-" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 1" value="1" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 2" value="2" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button 3" value="3" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button plus" value="+" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button"className="button zero" value="0" onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button"className="button dot" value="." onClick={(e)=>setValue(value + e.target.value)}/>
            <input type="button" className="button equal" value="=" onClick={()=>calculate()}/>
            <i id="calc-close" onClick={()=>setDesk3("")}><AiOutlineClose /></i>
        </div>
    )
}

export default Calculator