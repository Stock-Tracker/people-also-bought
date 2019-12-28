import React from 'react';
import { shallow } from 'enzyme';
import Card from '../client/src/card.jsx'

describe('Card', () => {
  const wrapper = shallow(<Card></Card>);
  it('Contains a <div class="pab-card">', () => {
    expect(wrapper.find('.pab-card')).toHaveLength(1);
  });
});