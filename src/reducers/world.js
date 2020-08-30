import { createReducer } from '@reduxjs/toolkit';

import { fetchWorldSuccess } from '../actions/world';

const INIT = {
    list : []
};

export const world = createReducer(INIT, {
    [fetchWorldSuccess] : (state, { payload }) => {
        state.list = payload ? payload : [];
    }
});
