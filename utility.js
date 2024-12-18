export const getForecast = (data) => {
    const dateArr = getDates(data.list)
    return dateArr
}

const getDates = (list) => {
    let dateArr = [];
    let finalDateArr = [];
    list.forEach(obj => {
        dateArr.push(obj.dt_txt.slice(0, obj.dt_txt.indexOf(' ')));
    });
    let dateSet = new Set(dateArr);
    finalDateArr = [...dateSet];
    return finalDateArr
}


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