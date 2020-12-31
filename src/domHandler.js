import { weather } from "./weather";

let handler = (() => {

    let temp = 0;

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
        wTemp.textContent = weather.toCelcius(weatherData.main.temp);
        temp = weatherData.main.temp;
        document.getElementById("toFar").checked = false;
    }

    let changeTemp = (e) => {
        let wTemp = document.getElementById("wTemp");
        if (e.target.checked) {
            wTemp.textContent = weather.toFaren(temp);
        } else {
            wTemp.textContent = weather.toCelcius(temp);
        }
    }

    let init = () => {
        let searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", search);

        let tempChange = document.getElementById("toFar");
        tempChange.addEventListener("click", changeTemp);
    }


    return { init };
})();

export { handler };