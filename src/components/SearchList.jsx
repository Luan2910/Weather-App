import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import "./SearchList.css"
import iconsfile from './iconsfile';

const SearchList = ({searchList}) => {
    return (
        <>
        <div className='search-list'>
            <div className='search-title'>
                <h1>Search History</h1>
            </div>
            <div className='search-cards'>
                {searchList.map(cards => (
                    <div className="search-card">
                        <img src={iconsfile["01d"]} alt="" />
                        <div className='weather-info'>
                            <span>{cards.location}</span>
                            <span>{cards.temperature}°C</span>
                            <span>{cards.humidity}%</span>
                            <span>{cards.windSpeed} Km/h</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default SearchList