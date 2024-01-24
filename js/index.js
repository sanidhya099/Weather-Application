
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; 

import {getWeather} from './api/base.js';
import {renderWeather} from './dom/weather.js';

const form = document.getElementById("weather-search");
const container = document.querySelector('.weather-container');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const cityNameField = form.elements['city-name'].value;
  form.elements['city-name'].value = "";

  getWeather(cityNameField)
  .then((weatherData) => {
    renderWeather(weatherData, container);
  })
  .catch((error) => {
    console.error(error);
  });
});
