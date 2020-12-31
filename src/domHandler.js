import { weather } from "./weather";

let handler = (() => {
    let getCity = () => {
        let input = document.getElementById("city-input");
        return input.value;
    }

    let search = async () => {
        let city = getCity();
        let weatherData = await weather.getWeather(city);
        showWeather(weatherData);
    }

    let showWeather = (weatherData) => {
        let weatherBox = document.getElementById("weather-box");
        let wName = document.getElementById("wName");
        let wCondition = document.getElementById("wCondition");
        let wTemp = document.getElementById("wTemp");

        console.log(weatherData);
        wName.textContent = weatherData.city;
        wCondition.textContent = weatherData.description;
        wTemp.textContent = weatherData.main.temp;
    }

    let init = () => {
        let searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", search);
    }


    return { init };
})();

export { handler };