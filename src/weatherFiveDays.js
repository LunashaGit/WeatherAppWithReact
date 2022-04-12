import React from 'react';
import './weatherFiveDays.scss';

const weather = ({weatherdata}) => {
    const items = [];
    let j = 0;
        for(let i = 0; i < weatherdata.list.length; i += 8, j += 8) {
            items.push(
            <div>
                <h2>In {(j/8)+1} Days</h2>
                <img src={`http://openweathermap.org/img/wn/${weatherdata.list[i].weather[0].icon}.png`}></img>
                <p>Weather Type: {weatherdata.list[i].weather[0].description}</p>
                <p>Temperature: {Math.floor(Math.ceil(weatherdata.list[i].main.temp))} °C</p>
                <p>Humidity : {weatherdata.list[i].main.humidity}%</p>
                <p>Min : {Math.floor(Math.ceil(weatherdata.list[i].main.temp_min))}°C Max : {Math.floor(Math.ceil(weatherdata.list[i].main.temp_max))}°C</p>
            </div>)
        }
    return(
  <div>
    {items}
  </div>
)}

export default weather;