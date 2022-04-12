import logo from './logo.svg';
import './App.scss';
import Weather from './weather';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(city)
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0da0646afb285a4f7697ca7f0acae0bb`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [city])


  return (
    <div className="App">
      <header className="App-header">
      <input type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)}/>

      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <p>Error...</p>
        </div>
      )}
      </header>
    </div>
  );
}

export default App;
