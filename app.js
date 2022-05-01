//https://api.openweathermap.org/data/2.5/weather?q=tobias%20barreto&appid=ffdbebb0e23e8896dbe5cdb7d1dbafb7
const input = document.querySelector('form input');
const btnSeacth = document.querySelector('#btnSearch');
const cityName = document.querySelector('#city-name');
const tempMax = document.querySelector('#max');
const tempMin = document.querySelector('#min');
const sen = document.querySelector('#sen');
const temperature = document.querySelector('#temperature');
const sky = document.querySelector('#sky');
const screen = document.querySelector('.screen');

function handleTime(event) {
    event.preventDefault();
    if(input.value != ''){ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ffdbebb0e23e8896dbe5cdb7d1dbafb7`)
    .then(response => response.json())
    .then(temp =>{
        if(temp.weather[0].description == 'overcast clouds'){
            temp.weather[0].description = 'céu nublado';
        }else if(temp.weather[0].description == 'scattered clouds'){
            temp.weather[0].description = 'núvens dispersas';
        }else if(temp.weather[0].description == 'broken clouds'){
            temp.weather[0].description = 'nublado';
        }else if(temp.weather[0].description == 'clear sky'){
            temp.weather[0].description = 'céu limpo';
        }else if(temp.weather[0].description == 'light rain'){
            temp.weather[0].description = 'garoa';
        }else if(temp.weather[0].description == 'few clouds'){
            temp.weather[0].description = 'poucas núvens';
        }
            cityName.innerText = temp.name;
            tempMax.innerText = celciusConverter(temp.main.temp_max).toFixed(0) + 'º';
            tempMin.innerText = celciusConverter(temp.main.temp_min).toFixed(0) + 'º';
            sen.innerText = celciusConverter(temp.main.feels_like).toFixed(0) + 'º';
            sky.innerText = temp.weather[0].description; 
            temperature.innerText = celciusConverter(temp.main.temp).toFixed(0) + 'º';
        })
    }
}

btnSeacth.addEventListener('click', handleTime);

function celciusConverter(value){
    let converter = value - 273.15;
    return converter;
}
