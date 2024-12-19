// IMPORTS

import { cityName, todaysForecast, todaysTemperature, todaysWeatherIcon, day, month, date, weatherDataContainer } from "./dom.js";




// this function should render todays forecast and the 5 day forecast

export const renderForecast = (forecastArr) => {

    // render todays weather

    cityName.textContent = forecastArr[0].city;
    day.textContent = forecastArr[0].day;
    month.textContent = forecastArr[0].month;
    date.textContent = forecastArr[0].date;
    todaysForecast.textContent = forecastArr[0].desc;
    todaysTemperature.textContent = forecastArr[0].temp;
    todaysWeatherIcon.src = forecastArr[0].icon;

    // render 5 day forecast

    for(let i = 1; i < forecastArr.length; i++){
        const forecastEl = document.createElement('div');
        forecastEl.classList.add('day-forecast');
        forecastEl.innerHTML = `
            <p class="day">${forecastArr[i].day}</p>
            <p class="month">${forecastArr[i].month}</p>
            <p class="date">${forecastArr[i].date}</p>
            <p class="forecast">${forecastArr[i].desc}</p>
            <p class="temperature">${forecastArr[i].temp}</p>
            <div class="weather-icon-div">
            <img src="${forecastArr[i].icon}" class="weather-icon"/>
            </div>
        `
        weatherDataContainer.append(forecastEl);
    }
    
}