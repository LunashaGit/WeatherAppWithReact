import React from 'react';
import './weather.scss';

const weather = ({weatherData}) => (
  <div>
        <h1 className="header">City Name: {weatherData.name}</h1>
        <p>Temprature: {weatherData.main.temp}</p>
        <p>Sunrise: {weatherData.sys.sunrise}</p>
        <p>Sunset: {weatherData.sys.sunset}</p>
        <p>Description: {weatherData.weather[0].description}</p>
  </div>
)

export default weather;