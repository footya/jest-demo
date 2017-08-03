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
  it("name title test", function() {
    expect(fooCom.find('h2').text()).toEqual('titlegood');
  });

  // it("contains spec with an expectation", function() {
  //   expect(fooCom.is('.foo')).toBe(true);
  // });

  it("class name is .foo", function() {
    expect(fooCom.find('.foo').length).toBe(1);
  });
});