import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import WeatherApp from './containers/WeatherApp';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const ReduxApp = () => (
    <Provider store={store}>
        <WeatherApp/>
    </Provider>
);

export default ReduxApp;

