import {ACTIONS} from './action-types';
import WeatherAPI from '../../api'

export const updateSearch = text => ({
    type: ACTIONS.UPDATE_SEARCH,
    text
});

export const clearSearch = () => ({
    type: ACTIONS.CLEAR_SEARCH
});

export const resolveData = data => ({
    type: ACTIONS.FETCH_DATA,
    data
});

export const showLoader = () => ({
    type: ACTIONS.SHOW_LOADER
});

export const hideLoader = () => ({
    type: ACTIONS.HIDE_LOADER
});

export const applyFilter = filter => ({
   type: ACTIONS.APPLY_FILTER,
   filter
});

export const fetchData = city => dispatch => {
    dispatch(showLoader());
    WeatherAPI.fetchForecastWeather(city)
        .then(data => {
            if (!('error' in data)) {
                dispatch(resolveData(data));
            }
            dispatch(hideLoader());
            dispatch(clearSearch());
        })
        .catch(e => {
            console.log('>', e);
            dispatch(hideLoader());
            dispatch(clearSearch());
        })
};