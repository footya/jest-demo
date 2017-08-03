import React from 'react';
import {
  shallow,
  mount,
  render
} from 'enzyme';

import Foo from './foo.jsx';
// jest.dontMock('./foo.jsx');

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

  // 点击测试
  it("checkboxLabel click test", () => {
    // const checkboxLabel = fooCom.find('label');
    expect(fooCom.find('label').text()).toEqual('off');
    fooCom.find('input').simulate('change');
    // 注意此处不能用变量checkboxLabel获取text，貌似这个变量获取到的只是赋值当时情况下的common节点
    // expect(checkboxLabel.text()).toEqual('on');
    expect(fooCom.find('label').text()).toEqual('on');
    fooCom.find('input').simulate('change');
    expect(fooCom.find('label').text()).toEqual('off');
    fooCom.find('input').simulate('change');
    expect(fooCom.find('label').text()).toEqual('on');

  });
});