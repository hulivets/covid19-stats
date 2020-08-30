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

import {
    fetchLiveRequest,
    fetchLiveSuccess,
    fetchLiveFailure
} from '../actions/live';

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
    },
    [fetchLiveRequest]: state => {
        state.isLoading = true;
    },
    [fetchLiveSuccess]: state => {
        state.isLoading = false;
    },
    [fetchLiveFailure]: state => {
        state.isLoading = false;
    }
});
