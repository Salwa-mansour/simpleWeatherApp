
let weather;
async function getWeather(city) {
   const apiKey ='M2ZJED2M8BAM6B7D8JN28NM64' ;
//    const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}` 
   const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`
    try {
        const response = await fetch(url);
         weather = await response.json();
        return weather;
    } catch (error) {
        return error.message;
    }
}
function toFahrenheit(celsius){
    let fahrenheit = Math.round((celsius * 1.8 +32)*100)/100 ;

    return fahrenheit;
}
function farhenheitData(dataObject = weather){
  let fWeather = dataObject;
  // console.log(fWeather.currentConditions.temp)
// console.log(fWeather.days[0])
    fWeather.days = dataObject.days.map((day)=>{
        day.tempmin = toFahrenheit(day.tempmin);
        day.tempmax = toFahrenheit(day.tempmax);
        day.temp =toFahrenheit(day.temp);

        return day;
    }) 
    fWeather.currentConditions.temp = toFahrenheit(dataObject.currentConditions.temp)
  //  console.log(fWeather.currentConditions.temp)
 //   console.log(fDays[0])
    return fWeather;
}
export {
   // weather,
    getWeather,
    farhenheitData
}