import React from 'react';
import dateFormat from 'dateformat';

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

const WeatherBoard = ({visibilityFilter, location, forecast}) => {
    const now = new Date(),
        filteredForecast = getVisibleWeather(forecast, now, visibilityFilter);

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
};

export default WeatherBoard;