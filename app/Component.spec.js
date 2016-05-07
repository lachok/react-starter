import sd from 'skin-deep';
import {expect} from 'chai';
import React from 'React';

import Component from './Component';

describe('Component', () => {
  it('should render "Hello World"', () => {
    let tree = sd.shallowRender(<Component />);
    
    expect(tree.text()).to.equal('Hello World');
  });
});