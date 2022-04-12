import React from 'react';
import './weatherFiveDays.scss';
import {Line} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const weather = ({weatherdata}) => {
    const data = {
        labels: ['In 1 Day', 'In 2 Days', 'In 3 Days', 'In 4 Days', 'In 5 Days'],
        datasets: [
            {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [weatherdata.list[0].main.temp, weatherdata.list[8].main.temp, weatherdata.list[16].main.temp, weatherdata.list[24].main.temp, weatherdata.list[32].main.temp]
            }
        ]
    }
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
    <Line data={data} />
  </div>
)}

export default weather;