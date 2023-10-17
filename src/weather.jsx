import React,{useState} from 'react';
import './weather.css';
import { GrClose,GrSearch} from "react-icons/gr";

// Images
import clear from './Images/Window/Weather/clear.png';
import cloud from './Images/Window/Weather/clouds.png';
import drizzle from './Images/Window/Weather/drizzle.png';
import mist from './Images/Window/Weather/mist.png';
import rain from './Images/Window/Weather/rain.png';
import snow from './Images/Window/Weather/snow.png';

const Weather = ({desk4,setDesk4}) => {
  
  const apiKey="b57cbf2b1b4c513d8186e7d674b73c73";
  let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
  
  const [items,setItems]=useState([]);
  const [fetchError,setFetchError]=useState(null);
  const [disp,setDisp]=useState("")
  const [search,setSearch]=useState("");
  const [isLoading,setIsLoading]=useState(true);

  const weatherApi=async(city)=>{
        try{
            const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
            if (!response.ok) throw Error("Data not Recieved")
            const data=await response.json()
            setItems(data)
            setFetchError(null);
            setDisp("disp")               
        }
        
        catch(err){
            setFetchError(err.message)
            setDisp("")
        }
        finally{
            setIsLoading(false)
        }           
    }

  return (
     <div id="weather-container"className={desk4}>
        <input type="text" id="city-input" placeholder="Enter city name" spellCheck="false" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <i id="search" onClick={()=>weatherApi(search)}><GrSearch /></i>
        <i id="api-close" onClick={()=>setDesk4("")}><GrClose /></i>
        {fetchError && <p className="error-api">{fetchError}</p>}
        {!isLoading && <div id="details" className={disp}>
            <p id="city-name">{items.name}</p>
            <div id="column" >
                {(items.weather[0].main)==="Clear" ? <img id="climate" src={clear} alt="Weather" /> :  
                 (items.weather[0].main)==="Clouds" ? <img id="climate" src={cloud} alt="Weather" /> : 
                 (items.weather[0].main)==="Drizzle" ? <img id="climate" src={drizzle} alt="Weather" /> : 
                 (items.weather[0].main)==="Mist" ? <img id="climate" src={mist} alt="Weather" /> :  
                 (items.weather[0].main)==="Rain" ? <img id="climate" src={rain} alt="Weather" /> : 
                 (items.weather[0].main)==="Snow" ? <img id="climate" src={snow} alt="Weather" /> : 
                 (items.weather[0].main)==="Haze" ? <img id="climate" src={mist} alt="Weather" /> : null}
                <div id="values">
                    <p id="temp">Temp : {Math.round(items.main.temp)}°C </p>
                    <p id="humidity">Humidity : {items.main.humidity}%</p>
                    <p id="wind">Wind : {items.wind.speed}km/h</p>
                </div>             
            </div>
            <p id="weather-type">Weather: {items.weather[0].main}</p>                    
        </div>}
    </div>
  )
}

export default Weather