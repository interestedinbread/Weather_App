import { renderForecast } from "./render";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  

export const getForecast = (data) => {
    // get dates for 5 day forecast
    const dateArr = extractDates(data.list)
    
    // get weather data for 5 days
    const fiveDayWeather = data.list.filter(obj => obj.dt_txt.slice(obj.dt_txt.indexOf(' ')) === ' 03:00:00')

    // pass data and five day weather data to render function
    renderForecast(data, fiveDayWeather)
}

    // this function takes the list array and turns it into an array of 5 arrays. One for each day
const extractDates = (list) => {
    
    const dateSet = new Set(list.map(obj => obj.dt_txt.slice(5, obj.dt_txt.indexOf(' '))));
    
    return [...dateSet].map(date => {
        const [month, day] = date.split('-');
        const monthAbbr = months[parseInt(month)-1];
        return [monthAbbr, day];
    })
    
}

    // this function should get high and low temperatures for each day of the 5 day forecast
const getHighLowTemp = () => {

}

// const fiveDayWeather = data.list.filter(obj => obj.dt_txt.slice(obj.dt_txt.indexOf(' ')) === ' 03:00:00')

const getWeekDay = (index) => {
    let day = dateObj.getDay()+index+1;
    if(day > 6){
        day -= 7;
    }
    return daysOfWeek[day];
}