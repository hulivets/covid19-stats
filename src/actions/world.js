import { createAction } from '@reduxjs/toolkit';

import api from '../apiSingleton';

export const fetchWorldRequest = createAction('FETCH_WORLD_REQUEST');
export const fetchWorldSuccess = createAction('FETCH_WORLD_SUCCESS');
export const fetchWorldFailure = createAction('FETCH_WORLD_FAILURE');

export function fetchWorld(params) {
    return async dispatch => {
        try {
            dispatch(fetchWorldRequest());

            const data = await api.world.list(params);

            dispatch(fetchWorldSuccess(data));
        } catch (err) {
            dispatch(fetchWorldFailure());
            console.log(err);
        }
    }
}