import configureMockStore from 'redux-mock-store';
import * as actions from './view';

const mockStore = configureMockStore();

describe('view actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('setLoading()', () => {
        const expectedActions = [ {
            type : 'SET_LOADING'
        } ];

        store.dispatch(actions.setLoading());

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('disableLoading()', () => {
        const expectedActions = [ {
            type : 'DISABLE_LOADING'
        } ];

        store.dispatch(actions.disableLoaling());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
