import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('Renders like snapshot', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper).toMatchSnapshot()
  });
});

