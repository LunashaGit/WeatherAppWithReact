import logo from './logo.svg';
import './App.scss';
import Weather from './weather';
import WeatherFiveDays from './weatherFiveDays';
import Graph from './Graph';
import GraphCompare from './GraphCompare';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, Router } from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <h1 className='App__title'>WeatherReact</h1>
        <div className='App__link'>
          <Link to="/WeatherAppWithReact/">Home</Link>
          <Link to="/WeatherAppWithReact/compare">Compare</Link>
        </div>
      <Routes>
        <Route path="/WeatherAppWithReact/" element={<Home />} />
        <Route path="/WeatherAppWithReact/compare" element={<Compare />} />
      </Routes>
    </div>
  );
}

function Home(){


  const [data, setData] = useState([]);
  const [dataFiveDays, setDataFiveDays] = useState([]);
  const [city, setCity] = useState([]);
  const [status, setStatus] = useState([]);
  const [unsplash, setUnsplash] = useState([]);


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
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
      .catch((error) => {
        console.log(error);
      })
    }
    const fetchDataFiveDays = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setDataFiveDays(result)
      })
      .catch((error) => {
        console.log(error);
      })
    }
    const unsplash = async () => {
      await fetch(`https://api.unsplash.com/search/photos?query=${city}&per_page=20&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setUnsplash(result.results[0].urls.full)
      })
      .catch((error) => {
        console.log(error);
        setUnsplash('')
      })
    }
    fetchData();
    fetchDataFiveDays();
    unsplash();


  }, [city])

  return (
    <div className="Home">
      <h1>Home</h1>
      <header className="Home-header">
      <div className='Home__input'>
        <input type='text' placeholder='Enter City' onKeyPress={statusHandlerKey} onChange={statusHandler}/>
        <input type='submit' value='Submit' onClick={() => setCity(status)}/>
      </div>
      <img className='ImageUnsplash' src={unsplash}></img>
      <div className='Regroup__Today'>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
        </div>
      )}
      </div>
      {(typeof dataFiveDays.list != 'undefined') ? (
        <WeatherFiveDays weatherdata={dataFiveDays}/>
      ): (
        <div></div>
      )}
      
      {(typeof dataFiveDays.list != 'undefined') ? (
        <Graph weatherdata={dataFiveDays}/>
      ): (
        <div></div>
      )} 
      </header>
    </div>
  );
}

function Compare() {
  
  const [data, setData] = useState([]);
  const [dataFiveDays, setDataFiveDays] = useState([]);
  const [city, setCity] = useState([]);
  const [status, setStatus] = useState([]);

  const [dataCompare, setDataCompare] = useState([]);
  const [dataFiveDaysCompare, setDataFiveDaysCompare] = useState([]);
  const [cityCompare, setCityCompare] = useState([]);
  const [statusCompare, setStatusCompare] = useState([]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  const statusHandlerKey = (e) => {
    if (e.key === 'Enter') {
      setStatus(e.target.value);
    }
  }

  const statusHandlerCompare = (e) => {
    setStatusCompare(e.target.value);
  }
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      }).catch((error) => {
        console.log(error);
      })
    }
    const fetchDataFiveDays = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setDataFiveDays(result)
      }).catch((error) => {
        console.log(error);
      })
    }
    const fetchDataCompare = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityCompare}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setDataCompare(result)
      }).catch((error) => {
        console.log(error);
      })
    }
    const fetchDataFiveDaysCompare = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityCompare}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setDataFiveDaysCompare(result)
      }).catch((error) => {
        console.log(error);
      })
    }


    fetchData();
    fetchDataFiveDays();
    fetchDataCompare();
    fetchDataFiveDaysCompare();
  }, [city])

  return (
    <div className="Compare">
      <header className="Compare-header">
        <h1>Compare</h1>
        <div className='Compare__input'>
          <input type='text' placeholder='Enter City' onKeyPress={statusHandlerKey} onChange={statusHandler}/>
          <input type='text' placeholder='Enter an other City' onChange={statusHandlerCompare}/>
          <input type='submit' value='Submit' onClick={() => {
            setCity(status);
            setCityCompare(statusCompare);
          }}/>
        </div>
        <div className='Regroup__Today'>
        {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
        </div>
      )}
      {(typeof dataCompare.main != 'undefined') ? (
        <Weather weatherData={dataCompare}/>
      ): (
        <div>
        </div>
      )}
      </div>
      <div className='Regroup__Five'>
      {(typeof dataFiveDays.list != 'undefined') ? (
        <WeatherFiveDays weatherdata={dataFiveDays}/>
      ): (
        <div></div>
      )}
      {(typeof dataFiveDaysCompare.list != 'undefined') ? (
        <WeatherFiveDays weatherdata={dataFiveDaysCompare}/>
      ): (
        <div></div>
      )} 
      </div>
      {(typeof dataFiveDaysCompare.list != 'undefined') ? (
        <GraphCompare weatherdata={dataFiveDaysCompare} Compare={dataFiveDays}/>
      ): (
        <div></div>
      )}   
      </header>
    </div>
  );
}
export default App;
