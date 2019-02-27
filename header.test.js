import React from 'react';
import { shallow } from 'enzyme';
import Header from './components/Header';

describe("I would see the homepage", () => {
  it("I would have a navbar", () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toEqual(true);
  });
});
