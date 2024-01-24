// renderWeather function
function renderWeather(weatherData, element){
    let cityName = weatherData.name;
    let countryCode = weatherData.sys.country;
    let currentWeather = weatherData.main.temp;
    let description = weatherData.weather[0].description;
  
    const weatherTemplate = `
    <div class="mt-2 card" >
      <div class="card-body">
        <h5 class="card-title">${cityName}, ${countryCode}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${currentWeather} °C</h6>
        <p class="card-text">${description}</p>
      </div>
    </div>
    `;
    
    element.innerHTML = weatherTemplate;
  }
  
  // export the renderWeather function
  export {renderWeather};
  