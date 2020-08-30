import configureMockStore from 'redux-mock-store';

import api from '../apiSingleton';
import * as actions from './countries';
import { save } from '../utils/sessionStorage';

const mockStore = configureMockStore();

describe('fetchCountries()', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('success', async () => {
        const expectedActions = [ {
            type : 'FETCH_COUNTRIES_REQUEST'
        }, {
            type : 'FETCH_COUNTRIES_SUCCESS'
        } ];

        api.countries.list = jest.fn().mockReturnValue(Promise.resolve([]));

        try {
            store.dispatch(actions.fetchCountriesRequest());
            await actions.fetchCountries([]);
            store.dispatch(actions.fetchCountriesSuccess());

            expect(actions.fetchCountries).toBeCalled();
            expect(store.getActions()).toEqual(expectedActions);
            expect(save).toHaveBeenCalledWith('test', [])
        } catch (err) {}
    });

    it('failure', async () => {
        const expectedActions = [ {
            type : 'FETCH_COUNTRIES_REQUEST'
        }, {
            type : 'FETCH_COUNTRIES_FAILURE'
        } ];

        api.countries.list = jest.fn().mockReturnValue(Promise.reject());

        try {
            store.dispatch(actions.fetchCountriesRequest());
            await actions.fetchCountries();
            expect(actions.fetchCountries).toBeCalled()
        } catch (err) {
            store.dispatch(actions.fetchCountriesFailure());

            expect(err).toBeDefined();
            expect(store.getActions()).toEqual(expectedActions);
        }
    });
});
