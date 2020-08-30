import React from 'react';
import { shallow } from 'enzyme';

import AreaChart from './AreaChart';

describe('AreaChart', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = getMockProps();

        wrapper = shallow(<AreaChart {...mockProps}/>)
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    function getMockProps() {
        return {
            data        : [{test: 11, test: 11}],
            xDataKey    : 'test',
            areaDataKey : 'test',
            fill        : '#003f5c',
            strokeFill  : '#003f5c'
        }
    }
});