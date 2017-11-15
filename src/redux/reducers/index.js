import {combineReducers} from 'redux';
import searchReducer from './search';
import uiReducer from './ui';
import weatherReducer from './weather';

const rootReducer = combineReducers({
    search: searchReducer,
    ui: uiReducer,
    weather: weatherReducer
});

export default rootReducer;