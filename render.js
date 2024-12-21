// IMPORTS

import { weatherDataContainer } from "./dom.js";

// WEATHER ICONS

const iconMap = {
    200: 'Icons/noun-thunderstorm-7418712-FFFFFF.png',
    300: 'Icons/noun-drizzle-cloud-4425285-FFFFFF.png',
    500: 'Icons/noun-rain-2121840-FFFFFF.png',
    600: 'Icons/noun-snowflake-7433981-E8F0FF.png',
    700: 'Icons/noun-mist-7419430-E8F0FF.png',
    800: 'Icons/noun-sun-7432025-FFD65B.png',
    801: 'Icons/noun-clouds-7348624-FFFFFF.png'
}

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
              <img src="${getWeatherIcon(forecastArr[0].id)}" class="todays-weather-icon"/>
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
            <img src="${getWeatherIcon(forecastArr[i].id)}" class="weather-icon"/>
            </div>
            <p class="forecast">${forecastArr[i].desc}</p>
            <p class="temperature">${forecastArr[i].temp}°C</p>
            
        `
        weatherDataContainer.append(forecastEl);
    }
}

// this function accepts weather id and returns the corresponding weather icon

const getWeatherIcon = (id) => {
    if(id > 800){
        return iconMap[801];
    } else {
     const range = Math.floor(id/100)*100;
        return iconMap[range];   
    }
}