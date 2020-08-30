import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import GlobalStatsPage from './GlobalStatsPage';

describe('GlobalStatsPage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
        <Provider store={getMockStore()}>
            <GlobalStatsPage />
        </Provider>);
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    function getMockStore() {
        const mockStore = configureMockStore();

        return mockStore({
            filters : {
                dateTo   : '01/01/2020',
                dateFrom : '01/01/2020',
                case     : 'test'
            },
            world : {
                list : []
            }
        });
    }
});
