import React, { useEffect, useRef, useState } from 'react'
import './Weather.css';
import search_icon from '../assets/search.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png'
import iconsRef from './iconsRef';

const Weather = () => {

    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = iconsRef;

    const search = async (city)=>{
        if(city === ""){
            alert("Please, enter a city name.");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
            const response = await fetch(url);
            const data = await response.json();
            
            if(!response.ok){
                alert(data.message);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || sun_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data.");
        }
    }

    useEffect(()=>{
        search("London");
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