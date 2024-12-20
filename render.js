// IMPORTS

import { cityName, todaysForecast, todaysTemperature, todaysWeatherIcon, day, date, weatherDataContainer } from "./dom.js";

// this function should render todays forecast and the 5 day forecast

export const renderForecast = (forecastArr) => {

    // render todays weather

    cityName.textContent =`Weather forecast for ${forecastArr[0].city}`;
    date.textContent = `${forecastArr[0].day} ${forecastArr[0].month} ${forecastArr[0].date}`;
    todaysForecast.textContent = forecastArr[0].desc;
    todaysTemperature.textContent = `${forecastArr[0].temp}°C`;
    todaysWeatherIcon.src = forecastArr[0].icon;

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