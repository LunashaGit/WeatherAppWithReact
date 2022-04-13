import React from 'react';
import './weather.scss';

const weather = ({weatherData}) => (
  <div className='Today'>
        <h1 className="header">{weatherData.name}, {weatherData.sys.country}</h1>
        <h2>Today</h2>
        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}></img>
        <p>Weather Type: {weatherData.weather[0].description}</p>
        <p>Temperature: {Math.floor(Math.ceil(weatherData.main.temp))} °C</p>
        <p>Humidity : {weatherData.main.humidity}%</p>
        <p>Min : {Math.floor(Math.ceil(weatherData.main.temp_min))}°C Max : {Math.floor(Math.ceil(weatherData.main.temp_max))}°C</p>
  </div>
)

export default weather;