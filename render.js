// IMPORTS

import { cityName, todaysForecast, todaysTemperature, todaysWeatherIcon } from "./dom";


const dateObj = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// this function should render todays forecast and the 5 day forecast

export const renderForecast = (data, fiveDayWeather) => {

    // render todays weather

    // select current weather data from JSON data
    const cityNameData = data.city.name;
    const forecastData = data.list[0].weather[0].description;
    const temperatureData = data.list[0].main.temp;
    const icon = data.list[0].weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
    // assign selected data to DOM elements
    cityName.textContent = `Five Day Forecast for ${cityNameData}`;
    todaysForecast.textContent = `Current Conditions: ${forecastData}`;
    todaysTemperature.textContent = `Temperature: ${temperatureData} degrees C`;
    todaysWeatherIcon.src = iconUrl;

    // render 5 day forecast

    fiveDayWeather.forEach((obj,index) => {
        const day = getWeekDay(index);
        const date = (dateObj.getDate())+index+1;
        const temperature = obj.main.temp;
        const description = obj.weather[0].description;
        const icon = obj.weather[0].icon;

        const dayForecastContainer = document.createElement('div');
        dayForecastContainer.classList.add('forecast-container');
        dayForecastContainer.innerHTML = `
            <p>${day}<p/>
            <p>${date}<p/>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png" />
            <p>${temperature}</p>
            <p>${description}</p>
        `
        weatherDataContainer.append(dayForecastContainer)
    })
}