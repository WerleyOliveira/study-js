
(function () {
    'use strict';

    let buttonSubmit = document.getElementById('button-submit');
    let UserCity = document.getElementById('input-city');
    let secretKey = document.getElementById('input-password');
    let location = document.getElementsByClassName('location');
    let currentTemperature = document.getElementsByClassName('current-temperature');
    let maximumTemperature = document.getElementsByClassName('maximum-temperature');
    let minimumTemperature = document.getElementsByClassName('minimum-temperature');
    let realFeel = document.getElementsByClassName('real-feel');
    let windSpeed = document.getElementsByClassName('speed');
    let humidity = document.getElementsByClassName('humidity');
    let img = document.querySelector('.modal');
    let flag = document.querySelector('.flag');

    const imgs = {
        500: './img/rain.jpg',
        501: './img/scattered-cloud.jpg',
        502: './img/rain.jpg',
        800: './img/sunny-day.jpg',
        801: './img/few-clouds.jpg',
        802: './img/scattered-cloud.jpg',
        803: './img/scattered-cloud.jpg',
        804: './img/sunny-day.jpg',
        701: './img/sunny-day.jpg'
    };

    const countryFlags = {
        IE: './flags/ireland.png',
        BR: './flags/brazil.png',
        US: './flags/usa.png',
        GR: './flags/greece.png',
        CA: './flags/canada.png',
        FR: './flags/france.png',
        DE: './flags/germany.png',
        IT: './flags/italy.png',
        JP: './flags/japan.png',
        NL: './flags/netherlands.png',
        PL: './flags/poland.png',
        PT: './flags/portugal.png',
        QA: './flags/qatar.png',
        RU: './flags/russia.png',
        KR: './flags/south-korea.png',
        ES: './flags/spain.png',
        SE: './flags/sweden.png',
        TR: './flags/turkey.png',
        GB: './flags/uk.png'
    };

    buttonSubmit.addEventListener('click', showWeather);

    function showWeather() {
        fetch('//api.openweathermap.org/data/2.5/weather?q=' + UserCity.value + '&units=metric&appid=' + secretKey.value)
            .then(function (response) {
                return response.json()
            })
            .then(function (weather) {
                console.log(weather);

                location[0].textContent = weather.name + ', ' + weather.sys.country;
                currentTemperature[0].textContent = Math.round(weather.main.temp) + 'º';
                maximumTemperature[0].textContent = Math.ceil(weather.main.temp_max) + 'º';
                minimumTemperature[0].textContent = Math.floor(weather.main.temp_min) + 'º';
                realFeel[0].textContent = 'Real Feel: ' + Math.round(weather.main.feels_like) + 'º';
                windSpeed[0].textContent = (weather.wind.speed * 3.6).toFixed(2) + 'km/h';
                humidity[0].textContent = weather.main.humidity + '%';

                let id = weather.weather[0].id;
                console.log(id);
                let climate = weather.weather[0].description.replace(' ', '');
                console.log(climate);

                img.style.backgroundImage = `url(${imgs[id] || './img/default.jpg'})`;
                flag.style.backgroundImage = `url(${countryFlags[weather.sys.country] || './flags/default.png'})`;
            });

    };

})();