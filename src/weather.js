let weather = (() => {

    let fetchWeather = async (city) => {

        // return new Promise((resolve, reject) => {

        //     let data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=beb1e557a80ba5ac12c07a6650a5b8e8`, {
        //         mode: "cors",
        //     });
        //     data.then((e) => {
        //         e.json().then((fi) => {
        //             resolve(fi);
        //         })
        //     })

        // });

        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=beb1e557a80ba5ac12c07a6650a5b8e8`, {
            mode: "cors",
        });

        data = await data.json();

        return data;
    };


    let getWeather = async (city) => {
        let weatherData;
        try {
            let data = await fetchWeather(city);

            weatherData = {
                city: data.name,
                weather: data.weather[0].main,
                description: data.weather[0].description,
                sys: data.sys,
                main: data.main,
            };
        } catch {
            weatherData = "not-found";
        }

        return weatherData;
    }

    let toCelcius = (temp) => {
        let a = temp - 273.15;
        a = a.toFixed(2);
        return a + "C"
    }

    let toFaren = (temp) => {
        let a = ((temp - 273.15) * 9 / 5) + 32;
        a = a.toFixed(2);
        return a + "F"
    }

    return { fetchWeather, getWeather, toCelcius, toFaren };
})();

export { weather };