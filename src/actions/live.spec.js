import configureMockStore from 'redux-mock-store';

import api from '../apiSingleton';
import * as actions from './live';

const mockStore = configureMockStore();

describe('fetchLive()', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('success', async () => {
        const expectedActions = [ {
            type : 'FETCH_LIVE_REQUEST'
        }, {
            type : 'FETCH_LIVE_SUCCESS'
        } ];

        api.world.list = jest.fn().mockReturnValue(Promise.resolve([]));

        try {
            store.dispatch(actions.fetchLiveRequest());
            await actions.fetchLive();
            store.dispatch(actions.fetchLiveSuccess());

            expect(actions.fetchLive).toBeCalled();
            expect(store.getActions()).toEqual(expectedActions);
        } catch (err) {}
    });

    it('failure', async () => {
        const expectedActions = [ {
            type : 'FETCH_LIVE_REQUEST'
        }, {
            type : 'FETCH_LIVE_FAILURE'
        } ];

        api.world.list = jest.fn().mockReturnValue(Promise.reject());

        try {
            store.dispatch(actions.fetchLiveRequest());
            await actions.fetchLive();
            expect(actions.fetchCountries).toBeCalled()
        } catch (err) {
            store.dispatch(actions.fetchLiveFailure());

            expect(err).toBeDefined();
            expect(store.getActions()).toEqual(expectedActions);
        }
    });
});
