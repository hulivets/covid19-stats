import { createAction } from '@reduxjs/toolkit';

import api from '../apiSingleton';
import { save } from '../utils/sessionStorage';
import { COUNTRIES_KEY } from '../constants/keys';

export const fetchCountriesRequest = createAction('FETCH_COUNTRIES_REQUEST');
export const fetchCountriesSuccess = createAction('FETCH_COUNTRIES_SUCCESS');
export const fetchCountriesFailure = createAction('FETCH_COUNTRIES_FAILURE');

export function fetchCountries() {
    return async dispatch => {
        try {
            dispatch(fetchCountriesRequest());

            const data = await api.countries.list();

            dispatch(fetchCountriesSuccess());
            
            save(COUNTRIES_KEY, data)
        } catch (err) {
            dispatch(fetchCountriesFailure());
        }
    }
}
