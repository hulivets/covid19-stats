import { createReducer } from '@reduxjs/toolkit';

import {
    fetchCountriesRequest,
    fetchCountriesSuccess,
    fetchCountriesFailure
} from '../actions/countries';

import {
    fetchWorldRequest,
    fetchWorldSuccess,
    fetchWorldFailure
} from '../actions/world';

const INIT = {
    isLoading    : false
};

export const view = createReducer(INIT, {
    [fetchCountriesRequest]: state => {
        state.isLoading = true;
    },
    [fetchCountriesSuccess]: state => {
        state.isLoading = false;
    },
    [fetchCountriesFailure]: state => {
        state.isLoading = false;
    },
    [fetchWorldRequest]: state => {
        state.isLoading = true;
    },
    [fetchWorldSuccess]: state => {
        state.isLoading = false;
    },
    [fetchWorldFailure]: state => {
        state.isLoading = false;
    }
});
