import React from 'react';
import dateFormat from 'dateformat';
import {connect} from 'react-redux';

const getVisibleWeather = (forecast, now, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return forecast;
        case 'SHOW_HALF_DAY':
            return forecast.filter(item => item.time_epoch * 1000 >= now.getTime());
        case 'SHOW_THIS_HOUR':
            return [forecast.find(item => item.time_epoch * 1000 >= now.getTime())];
        default:
            throw new Error('unknown filter');
    }
};

class WeatherBoard extends React.Component {
    render() {
        const now = new Date(),
            {forecast, visibilityFilter, location} = this.props,
            filteredForecast = getVisibleWeather(forecast, now, visibilityFilter);

        if (forecast) {
            return (
                <div className='weather-board'>
                    <p>
                        Location: <i>{location.country}, {location.name}</i>
                    </p>
                    <p>
                        Today: {dateFormat(now, 'yyyy-mm-dd HH:MM')}
                    </p>
                    <p>
                        Location Time: {location.localtime}
                    </p>
                    <ul className='forecast'>
                        {filteredForecast.map((weather, index) =>
                            <li key={index}>
                                <p>
                                    {weather.time}
                                </p>
                                <small>
                                    {weather.temp_c}
                                    <br/>
                                    {weather.text}
                                    <br/>
                                    <img src={`http:${weather.icon}`} alt=''/>
                                </small>
                            </li>)}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}
const mapWeatherToDaily = weatherPerHour => {
    const {temp_c, condition: {icon, text}, time, time_epoch} = weatherPerHour;

    return {
        temp_c,
        text,
        icon,
        time,
        time_epoch
    }
};

const mapStateToProps = store => {
    const {weather} = store,
        {data, filter} = weather,
        {forecast, current, location} = data;
    let forecastData = null;

    if (forecast) {
        forecastData = forecast.forecastday[0].hour.map(mapWeatherToDaily);
    }

    return {
        forecast: forecastData,
        visibilityFilter: filter,
        weather: current,
        location
    }
};

export default connect(mapStateToProps)(WeatherBoard);