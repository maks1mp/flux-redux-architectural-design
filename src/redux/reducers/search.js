import {ACTIONS} from '../actions/action-types';

const searchReducer = (store = {searchValue: ''}, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_SEARCH:
            return {...store, searchValue: action.text};
        case ACTIONS.CLEAR_SEARCH:
            return {...store, searchValue: ''};
        default:
            return store;
    }
};

export default searchReducer;