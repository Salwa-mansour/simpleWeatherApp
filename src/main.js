import './style.css';
import { getWeather } from './getData';


const weatherForm = document.querySelector('#weather-form')

let city = 'sanaa';
async function weatherData(city){
    try {
        const weather = await getWeather(city);
        console.table(weather.days)
    } catch (error) {
        console.log(error)
    }


}
weatherData();
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const city = e.target.querySelector('[name="search"]').value;
   if(city){
    weatherData(city)
   }  
})