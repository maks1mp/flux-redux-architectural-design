import {ACTIONS} from '../actions/action-types';

const initialState = {
    data: {},
    filter: 'SHOW_ALL'
};

const weatherReducer = (store = initialState, action) => {
    switch(action.type) {
        case ACTIONS.FETCH_DATA:
            return {...store, data: action.data};
        case ACTIONS.APPLY_FILTER:
            return {...store, filter: action.filter};
        default:
            return store;
    }
};

export default weatherReducer;