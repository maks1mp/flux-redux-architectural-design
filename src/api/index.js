import fetch from 'node-fetch';

const API_KEY = '8bcc82548e0d4080bd4151848171011';

class WearherAPI {
    constructor(key) {
        this.API_KEY = key;
        this.CURRENT_WEATER = 'https://api.apixu.com/v1/current.json';
        this.FORECAST_WEATHER = 'https://api.apixu.com/v1/forecast.json';
    }

    createUri(weatherType, city = '') {
        return `${weatherType}?key=${this.API_KEY}&q=${city}`;
    }

    fetchCurrentWeather(city) {
        const url = this.createUri(this.CURRENT_WEATER, city);

        return this._fetchWeather(url);
    }

    fetchForecastWeather(city) {
        const url = this.createUri(this.FORECAST_WEATHER, city);

        return this._fetchWeather(url);
    }

    _fetchWeather(url) {
        return fetch(url)
            .then(response => response.json())
    }
}

export default new WearherAPI(API_KEY);