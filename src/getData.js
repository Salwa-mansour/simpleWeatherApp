

async function getWeather(city) {
   const apiKey ='M2ZJED2M8BAM6B7D8JN28NM64' ;
   const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}` 
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}
function toFahrenheit(celsius){
    let fahrenheit = Math.round((celsius * 1.8 +32)*100)/100 ;

    return fahrenheit;
}

export {
    getWeather,
    toFahrenheit
}