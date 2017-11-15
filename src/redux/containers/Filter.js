import React from 'react';
import FilterButton from '../components/FilterButton';
import {connect} from 'react-redux';
import {applyFilter} from '../actions/actions';

class Filter extends React.Component {
    render() {
        const {filter, weather, applyWeatherFilter} = this.props;

        if (!!Object.keys(weather.data).length) {
            return (
                <div className="filter">
                    <FilterButton handleClick={() => applyWeatherFilter('SHOW_ALL')}
                        isActive={filter === 'SHOW_ALL'}>
                        SHOW ALL
                    </FilterButton>
                    <FilterButton handleClick={() => applyWeatherFilter('SHOW_HALF_DAY')}
                      isActive={filter === 'SHOW_HALF_DAY'}>
                        SHOW HALF
                    </FilterButton>
                    <FilterButton handleClick={() => applyWeatherFilter('SHOW_THIS_HOUR')}
                      isActive={filter === 'SHOW_THIS_HOUR'}>
                        SHOW CURRENT
                    </FilterButton>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect(
    store => ({
        filter: store.weather.filter,
        weather: store.weather
    }),
    dispatch => ({
        applyWeatherFilter(filter){
            dispatch(applyFilter(filter));
        }
    })
)(Filter);

