export async function getWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9d2e49fe85d1b1b43bb2038bf1c4344b
      `
  ).then((res) => res.json());
  return response;
}
