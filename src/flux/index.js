import React from 'react';
import WeatherStore from './stores/weather';
import UiStore from './stores/ui';
import SearchStore from './stores/search';
import dispatcher from './dispatcher';
import {fetchData, applyFilter, updateSearch} from './actions/actions';
import Preloader from './components/Preloader';
import WeatherBoard from './components/WeatherBoard';
import Search from './components/Search';
import FilterButton from './components/FilterButton';
import {STORE_EVENTS} from './actions/action-types';

class FluxApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...WeatherStore.getState(),
            ...UiStore.getState(),
            ...SearchStore.getState()
        };
    }

    setNewState(store) {
        this.setState(store.getState());
    }

    componentDidMount() {
        WeatherStore.bind(STORE_EVENTS.FETCHED_DATA, this.setNewState.bind(this, WeatherStore));
        WeatherStore.bind(STORE_EVENTS.FILTER_CHANGED, this.setNewState.bind(this, WeatherStore));
        UiStore.bind(STORE_EVENTS.LOADER_CHANGED, this.setNewState.bind(this, UiStore));
        SearchStore.bind(STORE_EVENTS.SEARCH_UPDATED, this.setNewState.bind(this, SearchStore))
    }

    componentWillUnmount() {
        WeatherStore.unbind(STORE_EVENTS.FETCHED_DATA, this.setNewState.bind(this, WeatherStore));
        WeatherStore.unbind(STORE_EVENTS.FILTER_CHANGED, this.setNewState.bind(this, WeatherStore));
        UiStore.unbind(STORE_EVENTS.LOADER_CHANGED, this.setNewState.bind(this, UiStore));
        SearchStore.unbind(STORE_EVENTS.SEARCH_UPDATED, this.setNewState(this, SearchStore));
    }

    handleSearch = e => {
        const {value} = e.target;

        dispatcher.dispatch(updateSearch(value));
    }


    startSearch = () => {
        const {searchValue} = this.state;

        if (searchValue) {
            dispatcher.dispatch(fetchData(searchValue));
        }
    }

    render() {
        const {searchValue, location, filter, forecastDay, weather, loading} = this.state;

        return (
            <div className='app'>
                <Search onSearch={this.startSearch}
                    handleInput={this.handleSearch}
                    value={searchValue}/>
                {location &&
                location.name &&
                <div className='weather'>
                    <div className="filter">
                        <FilterButton handleClick={() => dispatcher.dispatch(applyFilter('SHOW_ALL'))}
                            isActive={filter === 'SHOW_ALL'}>
                            SHOW ALL
                        </FilterButton>
                        <FilterButton handleClick={() => dispatcher.dispatch(applyFilter('SHOW_HALF_DAY'))}
                          isActive={filter === 'SHOW_HALF_DAY'}>
                            SHOW HALF
                        </FilterButton>
                        <FilterButton handleClick={() => dispatcher.dispatch(applyFilter('SHOW_THIS_HOUR'))}
                          isActive={filter === 'SHOW_THIS_HOUR'}>
                            SHOW CURRENT
                        </FilterButton>
                    </div>
                <WeatherBoard visibilityFilter={filter}
                    location={location}
                    forecast={forecastDay}
                    currentWeather={weather}/>
                </div>}
                <Preloader isLoading={loading}/>
            </div>

        )
    }
}

export default FluxApp;
