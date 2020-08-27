import { createReducer } from '@reduxjs/toolkit';

import {
    setLoading,
    disableLoaling
} from '../actions/view';

const INIT = {
    isLoading    : false
};

export const view = createReducer(INIT, {
    [setLoading]: state => {
        state.isLoading = true;
    },
    [disableLoaling]: state => {
        state.isLoading = false;
    }
});
