// IMPORTS
import { renderForecast } from "./render.js";

// DATE OBJ AND DATE ARRAYS
const dateObj = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
  "Dec",
];

// this is called from our main script file. It crunches numbers and passes data to render function
export const getForecast = (data) => {
  const forecastArr = [];

  // get today's date
  const day = daysOfWeek[dateObj.getDay()];
  const month = months[dateObj.getMonth()];
  const date = dateObj.getDate();
  // select today's weather data from JSON data
  const cityNameData = data.city.name;
  const descriptionData = data.list[0].weather[0].description;
  const temperatureData = parseInt(data.list[0].main.temp);
  const icon = data.list[0].weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  // create object for today's weather
  const todaysWeather = {
    city: cityNameData,
    day: day,
    month: month,
    date: date,
    desc: descriptionData,
    temp: temperatureData,
    icon: iconUrl
  };

  // push today's weather object to forecast arr
  forecastArr.push(todaysWeather);

  // get dates for 5 day forecast
  const dateArr = extractDates(data.list);
  console.log(dateArr);

  // this line converts the 40 entry list into 5. One for each day of the forecast. This will be an imperfect forecast starting point to refine later.
  const fiveDayWeather = data.list.filter(
    (obj) => obj.dt_txt.slice(obj.dt_txt.indexOf(" ")) === " 03:00:00"
  );

  // iterate through 5 day weather list, extract data, store in object, push to array
  fiveDayWeather.forEach((obj, index) => {
    // extract data for each day
    const day = getWeekDay(index);
    const date = `${dateArr[index][0]} ${dateArr[index][1]}`;
    const temperature = parseInt(obj.main.temp);
    const description = obj.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    

    // create object for each day
    const forecastObj = {
      day: day,
      month: month,
      date: date,
      desc: description,
      temp: temperature,
      icon: icon,
    };

    // console.log(forecastObj);

    // push obj to arr
    forecastArr.push(forecastObj);
  });

  renderForecast(forecastArr);
};

// this function takes the list array and turns it into an array of 5 arrays each with a month and a date.
const extractDates = (list) => {
  const dateSet = new Set(
    list.map((obj) => obj.dt_txt.slice(5, obj.dt_txt.indexOf(" ")))
  );

  return [...dateSet].map((date) => {
    const [month, day] = date.split("-");
    const monthAbbr = months[parseInt(month) - 1];
    return [monthAbbr, day];
  }).slice(1,6);
};

// this function should get high and low temperatures for each day of the 5 day forecast
const getHighLowTemp = () => {};

// this function uses the date obj to get the date of the week for each day in the 5 day forecast except for today
const getWeekDay = (index) => {
  let day = dateObj.getDay() + index + 1;
  if (day > 6) {
    day -= 7;
  }
  return daysOfWeek[day];
};
