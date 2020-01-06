// jest.mock('node-fetch');

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/app.jsx';
import Card from '../client/src/card.jsx';

// import fetch, { Response } from 'node-fetch';

describe('<App />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  const response = [
    {
      name: '',
      rating: 0,
      price: 0,
      percentChange: 0,
    },
    {
      name: '',
      rating: 0,
      price: 0,
      percentChange: 0,
    },
    {
      name: '',
      rating: 0,
      price: 0,
      percentChange: 0,
    },
    {
      name: '',
      rating: 0,
      price: 0,
      percentChange: 0,
    }
  ]

  it('Should render 4 <Card /> components', () => {
    fetch.mockResponseOnce(JSON.stringify(response));
    const wrapper = shallow(<App></App>);
    expect(wrapper.find(Card)).toHaveLength(4);
  });

  it('Should render 4 <Card /> components', () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.find(Card)).toHaveLength(4);
  });
});