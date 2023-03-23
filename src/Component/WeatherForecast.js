import React, { useState, useEffect } from "react";
import { getWeather } from "../api/Utils";

// import {
//   Container,
//   ForecastWrapper,
//   InputWrapper,
//   TopBar,
// } from "../styles/styledComponent";

export const Weatherforecast = () => {
  const [weatherList, setWeatherList] = useState([]);
  const [cityName, setCityName] = useState("torino");
  const [error, setError] = useState(null);
  // const [input, setInput] = useState("");

  // devo prendere temperatura vento umidità visibilità che stanno dentro a "main"
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(cityName);
        setWeatherList(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchWeather();
  }, [cityName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCityName(event.target[0].value);
  };

  return (
    <div>
      <div>
        <p> Ricerca la città per le previsioni </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="scrivi il nome della città" />
        <button type="submit">cerca</button>
      </form>

      <div>
        <h1>{cityName}</h1>
        <ul>
          <li>
            <p>
              <strong>visibilità:</strong>
            </p>
            {weatherList.visibility}Km
          </li>
          <li>
            <p>
              <strong>temperatura:</strong>
            </p>
            {weatherList?.main?.temp}K
          </li>
          <li>
            <p>
              <strong>pressione:</strong>
            </p>
            {weatherList?.main?.pressure}Bar
          </li>
          <li>
            <p>
              <strong>vento:</strong>
            </p>
            {weatherList?.wind?.speed}km/h
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 * per fare nuova repo :
 * 
echo "# meteo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Luca-Uggetti/meteo.git
git push -u origin main
 */
