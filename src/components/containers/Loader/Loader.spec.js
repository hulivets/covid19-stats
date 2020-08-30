import React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader';

describe('Loader', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = getMockProps();

        wrapper = shallow(<Loader {...mockProps}/>)
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should be display', () => {
        wrapper.setProps({ isLoading: true });

        expect(wrapper.find('.show').length).toBe(1);
    })

    function getMockProps() {
        return {
            width     : 20,
            height    : 20,
            isLoading : false
        }
    }
});
