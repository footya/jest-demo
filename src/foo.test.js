import React from 'react';
import {
  shallow,
  mount,
  render
} from 'enzyme';

import Foo from './foo.jsx';
jest.dontMock('./foo.jsx');

describe("Foo component", function() {
  const fooCom = shallow(<Foo name="good"/>);

  it("no name test", () => {
    expect(shallow(<Foo />).find('h2').text()).toEqual('titlefootya');
  });

  it("name title test", () => {
    expect(fooCom.find('h2').text()).toEqual('titlegood');
  });

  it("class name is .foo", () => {
    expect(fooCom.find('.foo').length).toBe(1);
  });
});