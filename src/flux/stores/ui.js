import {Store} from '@onedome/feodal';
import {STORE_EVENTS} from '../actions/action-types';

class UiStore extends Store {
    constructor() {
        super();

        this.loading = false;
    }

    getState() {
        return {
            loading: this.loading
        }
    }

    showLoader() {
        this.loading = true;

        this.trigger(STORE_EVENTS.LOADER_CHANGED);
    }

    hideLoader() {
        this.loading = false;

        this.trigger(STORE_EVENTS.LOADER_CHANGED);
    }
}

export default new UiStore();