import configureMockStore from 'redux-mock-store';
import * as actions from './filters';

const mockStore = configureMockStore();

describe('filter actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('changeFilterDate() should set date value', () => {
        const expectedActions = [ {
            type    : 'CHANGE_FILTER_DATE',
            payload : {
                id    : 'test',
                value : '01/01/2020'
            }
        } ];

        store.dispatch(actions.changeFilterDate({id: 'test', value: '01/01/2020'}));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('changeFilterCase() should set case value', () => {
        const expectedActions = [ {
            type    : 'CHANGE_FILTER_CASE',
            payload : 'confirmed'
        } ];

        store.dispatch(actions.changeFilterCase('confirmed'));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('changeFilterCountry() should set country value', () => {
        const expectedActions = [ {
            type    : 'CHANGE_FILTER_COUNTRY',
            payload : 'test'
        } ];

        store.dispatch(actions.changeFilterCountry('test'));

        expect(store.getActions()).toEqual(expectedActions);
    });
});
