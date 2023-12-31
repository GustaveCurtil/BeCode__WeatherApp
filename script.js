// write down the city and push on search
let searchBar = document.querySelector(".search-container input")
let searchButton = document.querySelector('.search-container button')

searchBar.addEventListener("keyup", (e) => {
    if (e.code === 'Enter') {
        city = searchBar.value
        fetchGeoLoc(city)
        
    }
})

searchButton.addEventListener("click", (e) => {
    city = searchBar.value
    fetchGeoLoc(city)
})

function fillInCityName(city, temp, code) {
    const main = document.querySelector("main");
    main.innerHTML=""

    const cityHeading = document.createElement("h2");
    cityHeading.textContent = city.charAt(0).toUpperCase() + city.slice(1);

    const temperature = document.createElement("p");
    temperature.classList.add("now-temperature");
    temperature.textContent = temp + " °C";

    const weather = document.createElement("p");
    weather.classList.add("now-weather");
    weather.textContent = weatherCode(code);

    main.appendChild(cityHeading);
    main.appendChild(temperature);
    main.appendChild(weather);
}

function fillInForecast(min, max, code) {
    const forecast = document.querySelector(".forecast");
    forecast.innerHTML = "";
    for (let i = 0; i < min.length; i++) {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let day = weekday[d.getDay() + i];

        const forecast = document.querySelector(".forecast");

        const forecastDay = document.createElement("p");
        forecastDay.classList.add("day");
        forecastDay.textContent = day

        const forecastMinMax = document.createElement("p");
        forecastMinMax.classList.add("min-max");
        forecastMinMax.textContent = min[i] + "°C - " + max[i] + "°C";

        const forecastCode = document.createElement("p");
        forecastCode.classList.add("weather");
        forecastCode.textContent = weatherCode(code[i])

        forecast.appendChild(forecastDay)
        forecast.appendChild(forecastMinMax)
        forecast.appendChild(forecastCode)
    }
}

function weatherCode(code) {
    if (code == 0) {
        return "Clear sky"
    } if (code == 1 || code == 2 || code == 3) {
        return "Mainly clear"
    } if (code == 45 || code == 48) {
        return "Fog"
    } if (code > 50 && code < 60 ) {
        return "Drizzle"
    } if (code > 60 && code < 70) {
        return "Rainy"
    } if (code > 70 && code < 80) {
        return "Snowy"
    } if (code == 80 || code == 81 || code == 82) {
        return "Rain showers"
    } else {
        return "Bad weather"
    }

}


// function createBg() {
//     let scriptElement = document.createElement("script");
//     scriptElement.src = "sketch-rain.js";
//     document.head.appendChild(scriptElement);
// }