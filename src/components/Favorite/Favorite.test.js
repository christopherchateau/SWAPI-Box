import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorite from './Favorite';

describe('Favorite', () => {
  it('Renders like snapshot', () => {
    const wrapper = shallow(<Favorite/>);
    expect(wrapper).toMatchSnapshot()
  });
});
