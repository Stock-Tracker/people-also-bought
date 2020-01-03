import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/app.jsx';
import Card from '../client/src/card.jsx';

describe('<App />', () => {
  it('Should render 4 <Card /> components', () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.find(Card)).toHaveLength(4);
  });
});