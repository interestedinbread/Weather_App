const dateObj = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weatherDataContainer = document.querySelector('.weather-data-container')

export const renderDaysWeather = (arr) => {
    arr.forEach((obj,index) => {
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

const getWeekDay = (index) => {
    let day = dateObj.getDay()+index+1;
    if(day > 6){
        day -= 7;
    }
    return daysOfWeek[day];
}