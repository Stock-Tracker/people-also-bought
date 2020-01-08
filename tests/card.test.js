import React from 'react';
import { shallow } from 'enzyme';
import Card from '../client/src/card.jsx'

describe('Card', () => {
  it('Contains a <div class="pab-card">', () => {
    const wrapper = shallow(<Card></Card>);
    expect(wrapper.find('.pab-card')).toHaveLength(1);
  });

  it('percentChange displays a string', () => {
    const percents = [
      0,
      0.0361,
      -0.1602,
      -0.752,
      0.3,
      0,
      -0.006,
      0.0054,
      -0.0405
    ];

    percents.forEach(percent => {
      const wrapper = shallow(<Card percentChange={percent}></Card>);
      const string = wrapper.find('.pab-percent-change').text();
      expect(string).toEqual(expect.any(String));
    });
  });
});