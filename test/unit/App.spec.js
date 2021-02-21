import React from "react";
import { render, mount, shallow } from "enzyme";
import { expect } from 'chai';

import App from "../../src/App";

describe('App', () => {
  it('rendering hello world', () => {
    const wrapper = render(<App />);
    expect(wrapper.html()).to.contain('<h1>Hello world!</h1>');
  });
});
