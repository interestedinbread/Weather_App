// IMPORTS

import { getForecast } from "./utility.js";

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

        getForecast(data)

    }
    catch (error){
        console.error(error);
    }
}


submitBtn.addEventListener('click', fetchWeather)