import React from 'react';
import { mount } from 'enzyme';

import Select from './Select';

describe('Select', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = getMockProps();

        wrapper = mount(<Select {...mockProps} />);
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    function getMockProps() {
        return {
            label    : 'test',
            id       : 'test',
            value    : '',
            options  : [],
            onChange : jest.fn()
        }
    }
});