import React from 'react';
import Preloader from '../components/Preloader';
import WeatherBoard from '../components/WeatherBoard';
import Search from '../components/Search';
import Filter from './Filter';

const WeatherApp = () => (
    <div className='app'>
        <Search/>
        <Filter/>
        <WeatherBoard/>
        <Preloader/>
    </div>
);

export default WeatherApp;