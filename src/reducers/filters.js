import { createReducer } from '@reduxjs/toolkit';

import {
    changeFilterDate,
    changeFilterCase,
    changeFilterCountry
} from '../actions/filters';

const INIT = {
    dateFrom : new Date('04/14/2020').toISOString(),
    dateTo   : new Date(),
    country  : '',
    case     : 'confirmed'
};

export const filters = createReducer(INIT, {
    [changeFilterDate] : (state, { payload }) => {
        const { id, value } = payload;
        state[id] = value;
    },
    [changeFilterCase] : (state, { payload }) => {
        state.case = payload;
    },
    [changeFilterCountry] : (state, { payload }) => {
        state.country = payload;
    }
});
