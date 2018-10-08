import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it('Renders like snapshot', () => {
    const wrapper = shallow(<CardContainer/>);
    expect(wrapper).toMatchSnapshot()
  });
});

