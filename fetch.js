//check if city exists?

//fetch latitude and longitude 
let city = "Berlin";
let latitude, longitude

async function fetchGeoLoc() {
    let cityGeoLoc = "https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1&language=en&format=json"
    // fetch(cityGeoLoc)
    // .then(response => response.json())
    // .then(users => {
    // })
    // .catch(error => {
    //     console.log(city + " doesn't exist")
    // });
    const response = await fetch(cityGeoLoc)
    const geoData = await response.json();
    let array = geoData.results[0]
    latitude = array.latitude
    longitude = array.longitude
    fetchWeather()
}


// Find the weather for that city and print all the needed information

async function fetchWeather() {
    const geoCoordinates = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=GMT"
    const response =  await fetch(geoCoordinates)
    const weatherData =  await response.json()
    const forecastCode= weatherData.daily.weather_code
    const forecastMax = weatherData.daily.temperature_2m_max
    const forecastMin = weatherData.daily.temperature_2m_min
    let temp = weatherData.current.temperature_2m
    let code = weatherData.current.weather_code
    fillInCityName(city, temp, code);
    fillInForecast(forecastMin, forecastMax, forecastCode)
}
