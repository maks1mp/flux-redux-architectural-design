import {Store} from '@onedome/feodal';
import {STORE_EVENTS} from '../actions/action-types';

class SearchStore extends Store {
    constructor() {
        super();

        this.searchValue = '';
    }

    getState() {
        return {
            searchValue: this.searchValue
        }
    }

    updateValue(value) {
        this.searchValue = value;

        this.trigger(STORE_EVENTS.SEARCH_UPDATED);
    }

    clear() {
        this.searchValue = '';

        this.trigger(STORE_EVENTS.SEARCH_UPDATED);
    }
}

export default new SearchStore();