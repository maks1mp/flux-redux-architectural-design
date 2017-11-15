import {ACTIONS} from '../actions/action-types';

const uiReducer = (state = {loading: false}, action) => {
  switch(action.type) {
      case ACTIONS.SHOW_LOADER:
        return {...state, loading: true};
      case ACTIONS.HIDE_LOADER:
        return {...state, loading: false};
      default:
        return state;
  }
};

export default uiReducer;