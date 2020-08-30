import { createReducer } from '@reduxjs/toolkit';

import { fetchLiveSuccess } from '../actions/live';

const INIT = {
    list : []
};

export const live = createReducer(INIT, {
    [fetchLiveSuccess] : (state, { payload }) => {
        state.list = payload ? payload : [];
    }
});
