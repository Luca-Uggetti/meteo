import React, { useState, useEffect } from "react";

import { getWeather } from "../utils";
import {
  Container,
  ForecastWrapper,
  InputWrapper,
  TopBar,
} from "../styles/StyledComponent";

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
    <Container>
      <TopBar>
        <p> Ricerca la città per le previsioni </p>
      </TopBar>

      <InputWrapper onSubmit={handleSubmit}>
        <input type="text" placeholder="scrivi il nome della città" />
        <button type="submit">cerca</button>
      </InputWrapper>

      <ForecastWrapper>
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
      </ForecastWrapper>
    </Container>
  );
};
