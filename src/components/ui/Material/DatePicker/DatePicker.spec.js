import React from 'react';
import { shallow, mount } from 'enzyme';

import DatePicker from './DatePicker';

describe('DatePicker', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = getMockProps();

        wrapper = shallow(<DatePicker {...mockProps} />)
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    function getMockProps() {
        return {
            label    : 'test',
            id       : 'test',
            value    : 'test',
            onChange : jest.fn()
        }
    }
});