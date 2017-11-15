import {ACTIONS} from './action-types';

export const fetchData = city => ({
    type: ACTIONS.FETCH_DATA,
    city
});

export const applyFilter = filter => ({
    type: ACTIONS.APPLY_FILTER,
    filter
});

export const updateSearch = text => ({
   type: ACTIONS.UPDATE_SEARCH,
   text
});