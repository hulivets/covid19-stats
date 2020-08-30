import { createAction } from '@reduxjs/toolkit';

import api from '../apiSingleton';

export const fetchLiveRequest = createAction('FETCH_LIVE_REQUEST');
export const fetchLiveSuccess = createAction('FETCH_LIVE_SUCCESS');
export const fetchLiveFailure = createAction('FETCH_LIVE_FAILURE');

export function fetchLive({ country, dateFrom }) {
    return async dispatch => {
        try {
            dispatch(fetchLiveRequest());

            const data = await api.live.list({ country, dateFrom });
            
            dispatch(fetchLiveSuccess(data));
        } catch (err) {
            dispatch(fetchLiveFailure);
            console.log(err);
        }
    }
}
