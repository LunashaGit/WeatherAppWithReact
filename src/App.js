import logo from './logo.svg';
import './App.scss';
import Weather from './weather';
import WeatherFiveDays from './weatherFiveDays';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [dataFiveDays, setDataFiveDays] = useState([]);
  const [city, setCity] = useState([]);
  const [status, setStatus] = useState([]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  const statusHandlerKey = (e) => {
    if (e.key === 'Enter') {
      setCity(e.target.value);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0da0646afb285a4f7697ca7f0acae0bb`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    const fetchDataFiveDays = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=0da0646afb285a4f7697ca7f0acae0bb`)
      .then(res => res.json())
      .then(result => {
        setDataFiveDays(result)
        console.log(result);
      });
    }
    fetchData();
    fetchDataFiveDays();

  }, [city])


  return (
    <div className="App">
      <header className="App-header">
      <input type='text' placeholder='Enter City' onKeyPress={statusHandlerKey} onChange={statusHandler}/>
      <input type='submit' value='Submit' onClick={() => setCity(status)}/>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <p>No city ! Put a city !</p>
        </div>
      )}
      {(typeof dataFiveDays.list != 'undefined') ? (
        <WeatherFiveDays weatherdata={dataFiveDays}/>
      ): (
        <div></div>
      )} 
      </header>
    </div>
  );
}

export default App;
