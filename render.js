// IMPORTS

import { weatherDataContainer } from "./dom.js";

// this function should render todays forecast and the 5 day forecast

export const renderForecast = (forecastArr) => {

    // render todays weather

    weatherDataContainer.innerHTML = `
        <div class="weather-header-container">
        <h4 class="city-name">Weather forecast for ${forecastArr[0].city}</h4>
        </div>
        <div class="weather-data">
          <p class="date">${forecastArr[0].day} ${forecastArr[0].month} ${forecastArr[0].date}</p>
            <div class="todays-weather-icon-div">
              <img src="${forecastArr[0].icon}" class="todays-weather-icon"/>
            </div>
          <p class="temperature">${forecastArr[0].temp}°C</p>
          <p class="forecast">${forecastArr[0].desc}</p>
        </div>
    `

    // render 5 day forecast

    for(let i = 1; i < forecastArr.length; i++){
        const forecastEl = document.createElement('div');
        forecastEl.classList.add('day-forecast');
        forecastEl.innerHTML = `
            <p class="day">${forecastArr[i].day}</p>
            <p class="date"> ${forecastArr[i].date}</p>
            <div class="weather-icon-div">
            <img src="${forecastArr[i].icon}" class="weather-icon"/>
            </div>
            <p class="forecast">${forecastArr[i].desc}</p>
            <p class="temperature">${forecastArr[i].temp}°C</p>
            
        `
        weatherDataContainer.append(forecastEl);
    }
}