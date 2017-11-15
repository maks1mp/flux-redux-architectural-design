import {Dispatcher} from 'flux';
import WeatherStore from './stores/weather';
import UiStore from './stores/ui';
import SearchStore from './stores/search';
import WeatherAPI from '../api';
import {ACTIONS} from './actions/action-types';

const dispatcher = new Dispatcher();

dispatcher.register(action => {
    switch(action.type) {
        case ACTIONS.APPLY_FILTER:
            WeatherStore.applyFilter(action.filter);
            break;
        case ACTIONS.FETCH_DATA:
            UiStore.showLoader();
            WeatherAPI.fetchForecastWeather(action.city)
                .then(data => {
                    WeatherStore.updateWeather(data);
                    UiStore.hideLoader();
                    SearchStore.clear();
                })
                .catch(e => {
                    console.log('>', e);
                    UiStore.hideLoader();
                    SearchStore.clear();
                });
            break;
        case ACTIONS.UPDATE_SEARCH:
            SearchStore.updateValue(action.text);
            break;
        default:
            // do nothing
    }
});

export default dispatcher;