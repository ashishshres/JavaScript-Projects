const searchBtn = document.querySelector(".search-btn");
const cityName = document.querySelector("#city-name");
const weatherCard = document.querySelector(".weather-card");
const locationBtn = document.querySelector(".location-btn");

const API_KEY = ""; // use your own api key

async function fetchDataByCity(city) {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        let data = await response.json();
        console.log(data);
        if (data.message) {
            console.log(data.message);
            weatherCard.innerHTML = `<h2>${data.message}</h2>`;
            weatherCard.style.opacity = 1;
        } else {
            displayWeatherCard(data);
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchDataByCoord(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        let data = await response.json();
        console.log(data);

        if (data.message) {
            console.log(data.message);
            weatherCard.innerHTML = `<h2>${data.message}</h2>`;
            weatherCard.style.opacity = 1;
        } else {
            displayWeatherCard(data);
        }
    } catch (error) {
        console.log(error.message);
    }
}

function displayWeatherCard({ name, main, weather, wind }) {
    weatherCard.innerHTML = `
                <div>
                    <h3>${name}</h3>
                </div>
                <div class="weather-icon">
                    <img src="https://openweathermap.org/img/w/${weather[0].icon}.png" alt="">
                </div>
                <div class="temperature">
                    <p class="current-temp">${main.temp}&deg;C</p>
                    <p>Feels like ${main.feels_like}</p>
                    <p>${weather[0].main}</p>
                </div>
                <div class="general-info">
                    <div>
                        <span>Wind</span>
                        <p>${wind.speed}m/s</p>
                    </div>
                    <div>
                        <span>Pressure</span>
                        <p>${main.pressure}ma</p>
                    </div>
                    <div>
                        <span>Humidity</span>
                        <p>${main.humidity}%</p>
                    </div>
                </div>
            `;
    weatherCard.style.opacity = 1;
}

searchBtn.addEventListener("click", () => {
    let city = cityName.value;
    if (city) {
        fetchDataByCity(city);
    }
});

locationBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        fetchDataByCoord(latitude, longitude);
    });
});
