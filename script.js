// IMPORTS

import { renderDaysWeather } from "./render.js";
import { getForecast } from "./utility.js";

const input = document.querySelector('.input-field');
const submitBtn = document.querySelector('.submit-btn');
const cityName = document.querySelector('.city-name');
const todaysForecast = document.querySelector('.forecast');
const todaysTemperature = document.querySelector('.temperature');
const todaysWeatherIcon = document.querySelector('.weather-icon');

const fetchWeather = async () => {
    console.log('fetching weather...')

    const city = input.value;
    const apiKey = '8bbd3a9f36ab4b15ef2fd90f307ec5f8'
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json()

        // console.log(data)
    
        const cityNameData = data.city.name;
        const forecastData = data.list[0].weather[0].description;
        const temperatureData = data.list[0].main.temp;
        const icon = data.list[0].weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        
        cityName.textContent = `Five Day Forecast for ${cityNameData}`;
        todaysForecast.textContent = `Current Conditions: ${forecastData}`;
        todaysTemperature.textContent = `Temperature: ${temperatureData} degrees C`;
        todaysWeatherIcon.src = iconUrl;

        const fiveDayWeather = data.list.filter(obj => obj.dt_txt.slice(obj.dt_txt.indexOf(' ')) === ' 03:00:00')

        // console.log(fiveDayWeather);

        renderDaysWeather(fiveDayWeather);

        console.log(getForecast(data))

    }
    catch (error){
        console.error(error);
    }
}


submitBtn.addEventListener('click', fetchWeather)