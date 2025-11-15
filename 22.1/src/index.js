import './styles.scss';


let lat = 46.482952;
let lon = 30.712481;
let APIkey = 'no';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

        let refreshApiDate = data.dt;
        const refreshDate = new Date(refreshApiDate * 1000);
        const options = {month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'};
        const formattedDate = refreshDate.toLocaleString('en-US', options).replace(',', '');
        document.getElementById("refreshApiDate").innerHTML = formattedDate;

        let humidityApi = data.main.humidity;
        document.getElementById("humidityApi").innerHTML = `Humidity: ${humidityApi}%`;

        let pressureApi = data.main.pressure;
        document.getElementById("pressureApi").innerHTML = `Pressure: ${pressureApi} hPa`;

        let windApi = data.wind.speed;
        document.getElementById("windApi").innerHTML = `Wind: ${windApi} km/h SSE`;

        let temperatureApi = data.main.temp;
        let temperatureToCelsius = temperatureApi - 273.15;
        document.getElementById("temperatureApi").innerHTML = Math.floor(temperatureToCelsius) + "°C";

        let feelsLikeApi = data.main.feels_like;
        let feelsLikeApiToCelsius = feelsLikeApi - 273.15;
        document.getElementById("feelsLikeApi").innerHTML = "Feels Like: " + Math.floor(feelsLikeApiToCelsius) + "°C";

        const weatherApi = data.weather[0];
        let weatherApiComplete = weatherApi.main
        document.getElementById("weatherApi").innerHTML = weatherApiComplete;


        function updateWeatherVisuals(condition) {
            const weatherBlock = document.querySelector('.weather-block');
            const weatherIcon = document.getElementById('weatherIcon');
            let iconSrc = '';
            let backgroundGradient = '';

            switch (condition.toLowerCase()) {
                case 'clear':
                    iconSrc = 'sunny.svg';
                    backgroundGradient = 'linear-gradient(135deg, #87ceeb, #3399ff)';
                    break;
                case 'clouds':
                case 'mist':
                    iconSrc = 'partly-cloudy.svg';
                    backgroundGradient = 'linear-gradient(135deg, #656565, #a3a3a3)';
                    break;
                case 'rain':
                case 'drizzle':
                    iconSrc = 'rain.svg';
                    backgroundGradient = 'linear-gradient(135deg, #434343, #666666)';
                    break;
                case 'snow':
                    iconSrc = 'snowy.svg';
                    backgroundGradient = 'linear-gradient(135deg, #dae6f3, #a7c4e8)';
                    break;
                case 'thunderstorm':
                    iconSrc = 'rain-thunder.svg';
                    backgroundGradient = 'linear-gradient(135deg, #2c3e50, #4ca1af)';
                    break;
                default:
                    iconSrc = 'default.svg';
                    backgroundGradient = 'linear-gradient(135deg, #000000, #434343)';
                    break;
            }

            weatherIcon.src = iconSrc;
            weatherBlock.style.background = backgroundGradient;
        }

        updateWeatherVisuals(weatherApiComplete);

    } catch (error) {
        console.error('Помилка:', error);
    }
}


function getCurrentDay() {
    let currentDate = new Date();
    let optionsMonthDayYear = {month: 'short', day: '2-digit', year: 'numeric'};
    let optionsWeekday = {weekday: 'short'};

    let monthDayYear = currentDate.toLocaleDateString('en-US', optionsMonthDayYear);
    let weekday = currentDate.toLocaleDateString('en-US', optionsWeekday);

    document.getElementById("currentDay").innerHTML = `${monthDayYear} - ${weekday}`;
}

function getCurrentTime() {
    let currentTime = new Date();
    let options = {hour: 'numeric', minute: '2-digit', hour12: true};
    let formattedTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("currentTime").innerHTML = formattedTime;
}

getWeather();
getCurrentDay();
getCurrentTime();

document.getElementById('refreshWeather').addEventListener('click', function (event) {
    event.preventDefault();
    getWeather();
    getCurrentDay();
    getCurrentTime();
});