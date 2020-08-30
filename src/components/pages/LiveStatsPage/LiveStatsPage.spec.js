import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LiveStatsPage from './LiveStatsPage';

describe('LiveStatsPage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
        <Provider store={getMockStore()}>
            <LiveStatsPage />
        </Provider>);
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    function getMockStore() {
        const mockStore = configureMockStore();

        return mockStore({
            filters : {
                country  : 'test',
                dateFrom : '01/01/2020',
                case     : 'test'
            },
            live : {
                list : []
            }
        });
    }
});
