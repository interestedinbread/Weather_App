// IMPORTS
import { getForecast } from "./utility.js";
import { submitBtn, input } from "./dom.js";

// get weather data from open weather api
const fetchWeather = async () => {
    console.log('fetching weather...')

    // define details of API call
    const city = input.value;
    const apiKey = '8bbd3a9f36ab4b15ef2fd90f307ec5f8'
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

    //  use async await to fetch data
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json()

        console.log(data)

    // pass JSON data to utility function to extract desired forecast data
        getForecast(data)

    }
    catch (error){
        console.error(error);
    }
}


submitBtn.addEventListener('click', fetchWeather)