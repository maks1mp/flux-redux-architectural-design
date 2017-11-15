import {Store} from '@onedome/feodal';
import {STORE_EVENTS} from '../actions/action-types';

class WeatherStore extends Store {
    constructor() {
        super();

        this.location = {};
        this.weather = {};
        this.forecastDay = [];
        this.filter = 'SHOW_ALL';
    }

    getState() {
        const {location, forecastDay, filter, weather} = this;

        return {
            location,
            filter,
            forecastDay,
            weather
        }
    }

    mapWeatherToDaily(weatherPerHour) {
        const {temp_c, condition: {icon, text}, time, time_epoch} = weatherPerHour;

        return {
            temp_c,
            text,
            icon,
            time,
            time_epoch
        }
    }

    updateWeather(weather) {
        const {location, forecast = {}, current} = weather;

        this.location = location;
        this.weather = current;
        this.forecastDay = forecast.forecastday[0].hour.map(this.mapWeatherToDaily);

        this.trigger(STORE_EVENTS.FETCHED_DATA);
    }

    applyFilter(filter) {
        this.filter = filter;

        this.trigger(STORE_EVENTS.FILTER_CHANGED);
    }
}

export default new WeatherStore();