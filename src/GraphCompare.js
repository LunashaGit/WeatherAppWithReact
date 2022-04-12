import React from 'react';
import './weatherFiveDays.scss';
import {Line} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const weather = ({weatherdata, weatherdataCompare}) => {
    const data = {
        labels: ['In 1 Day', 'In 2 Days', 'In 3 Days', 'In 4 Days', 'In 5 Days'],
        datasets: [
            {
            label: `${weatherdata.city.name}`,
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [weatherdata.list[0].main.temp, weatherdata.list[8].main.temp, weatherdata.list[16].main.temp, weatherdata.list[24].main.temp, weatherdata.list[32].main.temp]
            },{
            label:`${weatherdataCompare.city.name}`,
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(192,75,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [weatherdataCompare.list[0].main.temp, weatherdataCompare.list[8].main.temp, weatherdataCompare.list[16].main.temp, weatherdataCompare.list[24].main.temp, weatherdataCompare.list[32].main.temp]
            }
        ]
    }
    return(
  <div>
    <Line data={data} redraw/>
  </div>
)}

export default weather;