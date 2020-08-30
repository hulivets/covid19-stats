import configureMockStore from 'redux-mock-store';

import api from '../apiSingleton';
import * as actions from './world';

const mockStore = configureMockStore();

describe('fetchworld()', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('success', async () => {
        const expectedActions = [ {
            type : 'FETCH_WORLD_REQUEST'
        }, {
            type : 'FETCH_WORLD_SUCCESS'
        } ];

        api.world.list = jest.fn().mockReturnValue(Promise.resolve([]));

        try {
            store.dispatch(actions.fetchWorldRequest([]));
            await actions.fetchWorld();
            store.dispatch(actions.fetchWorldSuccess());

            expect(actions.fetchWorld).toBeCalled();
            expect(store.getActions()).toEqual(expectedActions);
        } catch (err) {}
    });

    it('failure', async () => {
        const expectedActions = [ {
            type : 'FETCH_WORLD_REQUEST'
        }, {
            type : 'FETCH_WORLD_FAILURE'
        } ];

        api.world.list = jest.fn().mockReturnValue(Promise.reject());

        try {
            store.dispatch(actions.fetchWorldRequest());
            await actions.fetchWorld();
            expect(actions.fetchCountries).toBeCalled()
        } catch (err) {
            store.dispatch(actions.fetchWorldFailure());

            expect(err).toBeDefined();
            expect(store.getActions()).toEqual(expectedActions);
        }
    });
});
