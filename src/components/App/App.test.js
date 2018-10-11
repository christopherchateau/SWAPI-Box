import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './index';

describe('App', () => {
  it('Renders like snapshot', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot()
  });
});

