import WeatherApi from './WeatherApi.js';

navigator.geolocation.getCurrentPosition(onGeoLocationSuccess, onGeoLocationError);

async function onGeoLocationSuccess({ coords }) {
  const {
    locationName,
    weather: weatherText,
    celsiusTemp
  } = await WeatherApi.getWeatherWithLocationNameByCoords(coords);

  const weather = document.querySelector('#weather span:first-child');
  weather.innerText = weatherText;

  const location = document.querySelector('#weather span:nth-child(2)');
  location.innerText = locationName;

  const temperature = document.querySelector('#weather span:last-child');
  temperature.innerText = celsiusTemp;
}

function onGeoLocationError(err) {
  console.error(err);
}
