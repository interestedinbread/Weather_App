const input = document.querySelector('.input-field');
const submitBtn = document.querySelector('.submit-btn');
const cityName = document.querySelector('.city-name');
const forecast = document.querySelector('.forecast');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');

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
        
        const cityNameData = data.city.name;
        const forecastData = data.list[0].weather[0].description;
        const temperatureData = data.list[0].main.temp;
        const icon = data.list[0].weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        
        cityName.textContent = cityNameData;
        forecast.textContent = `Current Conditions: ${forecastData}`;
        temperature.textContent = `Temperature: ${temperatureData} degrees C`;
        weatherIcon.src = iconUrl;

        const fiveDayWeather = data.list.filter(obj => obj.dt_txt.slice(obj.dt_txt.indexOf(' ')) === ' 03:00:00')
        console.log(fiveDayWeather)
    }
    catch (error){
        console.error(error);
    }
}


submitBtn.addEventListener('click', fetchWeather)