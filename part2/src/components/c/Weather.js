import { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({ name }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}`
      )
      .then((res) => {
        console.log(res);
        const data = res.data;
        setWeather(data); // 改动state 重新渲染组件，死循环
      });
  }, []);

  if (weather.main) {
    return (
      <div>
        <p>temperature {weather.main.temp}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather"
        />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  } else {
    return <div>waiting</div>;
  }
};

export default Weather;
