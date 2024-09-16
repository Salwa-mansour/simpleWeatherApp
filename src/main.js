import './style.css';
import { getWeather,toFahrenheit } from './getData';



const weatherForm = document.querySelector('#weather-form');
const unitBtnContainer = document.querySelector('aside');
const daysDataTable = document.querySelector('.days-container tbody')

let city = 'sanaa';
async function weatherData(city){
    try {
        const weather = await getWeather(city);
      //   console.table(weather.days)
        displayWeather(weather,daysDataTable)
    } catch (error) {
        console.log(error)
    }


}
function displayWeather(data,detailsContainer,headerContainer=""){

    console.log(data.currentConditions)
    const daysContent = data.days.map((day)=>{
        return `
          <tr>
            <td headers="day" data-item="" >${day.datetime}</td>
            <td headers="min-temp" data-item="" >${day.tempmin}</td>
            <td headers="max-temp" data-item="" >${day.tempmax}</td>
            <td headers="chance-of-rain" data-item="" > </td>
          </tr>
        `
    }).join('');
   // console.log(daysContent)
    detailsContainer.innerHTML  = daysContent;
}
// console.log(toFahrenheit(26))
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const city = e.target.querySelector('[name="search"]').value;
   if(city){
    weatherData(city)
   }  
})

unitBtnContainer.addEventListener('click',(e)=>{
    if(e.target.dataset.unit==="fahrenheit"){
        console.log('fahrenheit')
    }else{
        console.log('cleciuas')
    }
})