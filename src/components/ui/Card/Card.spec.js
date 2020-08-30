import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = getMockProps();

        wrapper = shallow(<Card {...mockProps} />);
    });

    it('should be created', () => {
        expect(wrapper).toBeTruthy();
    });

    function getMockProps() {
        return {
            title    : 'test',
            children : <div>test</div>
        }
    }
});