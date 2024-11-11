import React, { useRef } from 'react'
import Weather from './components/Weather'
import SearchList from './components/SearchList'
import { useState } from 'react';
import iconsfile from './components/iconsfile';

const App = () => {
  const allIcons = iconsfile;

  const [weatherData, setWeatherData] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const addSearch = () => {
    const newSearch = [...searchList,
        {
            humidity: weatherData.humidity,
            windSpeed: weatherData.windSpeed,
            temperature: weatherData.temperature,
            location: weatherData.location,
            icon: weatherData.icon
        }
    ];
    setSearchList(newSearch);
  }
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

        const icon = allIcons[data.weather[0].icon] || iconsfile['01d'];
        setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
        })
        if(weatherData){
          addSearch(weatherData)
        }
    } catch (error) {
      console.log(error);
        setWeatherData(false);
        console.error("Error in fetching weather data.");
    }
  }

  return (
    <div className='app'>
      <Weather search={search} weatherData={weatherData}/>
      <SearchList searchList={searchList}/>
    </div>
  )
}

export default App