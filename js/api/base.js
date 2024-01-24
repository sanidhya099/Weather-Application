// replace your api key 
const API_KEY = "891a0e37aa9b443dd0bb416f606a9799";

// create getWeather function here
function getWeather(cityName) {
  
  const apiCallToGetLanLong = "http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid="+API_KEY+"";

  return new Promise((resolve, reject) => {
    fetch(apiCallToGetLanLong)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error city name data for ${cityName}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0 || data.length == null) {
          throw new Error(`City not found: ${cityName}`);
        }

        const latitude = data[0].lat, 
        longitude = data[0].lon;

        // Second API call to get weather data using latitude and longitude
        const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+API_KEY+"&units=metric";
        return fetch(apiCall)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching weather data for ${cityName}`);
        }
        return response.json();
      })
      .then((weatherData) => {
        resolve(weatherData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// export the getWeather function
export {getWeather};
