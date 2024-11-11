import React, { useEffect, useRef, useState } from 'react'
import './Weather.css';
import search_icon from '../assets/search.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png'
import iconsfile from './iconsfile';

const Weather = ({search, weatherData}) => {

    const inputRef = useRef();

    useEffect(()=>{
        search("London");
        inputRef.current.focus();
    },[])

  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='search'/>
            <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>
        {weatherData?<>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                    <p>{weatherData.windSpeed} Km/h</p>
                    <span>Wind</span>
                </div>
            </div>
        </div>
        </>:<></>}
    </div>
  )
}

export default Weather