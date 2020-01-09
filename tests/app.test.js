import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/app.jsx';
import Card from '../client/src/card.jsx';

const response = [
  {
    __v: 0,
    _id: '5e0d1bc4ebc3c52930ce3707',
    name: 'Hamill - Keebler',
    percentChange: 0.0615,
    price: 18.13,
    rating: 0.55,
    ticker: "FEDC"
  },
  {
    __v: 0,
    _id: '5e0d1bc4ebc3c52930ce3707',
    name: 'Hamill - Keebler',
    percentChange: 0.0615,
    price: 18.13,
    rating: 0.55,
    ticker: "FEDC"
  },
  {
    __v: 0,
    _id: '5e0d1bc4ebc3c52930ce3707',
    name: 'Hamill - Keebler',
    percentChange: 0.0615,
    price: 18.13,
    rating: 0.55,
    ticker: "FEDC"
  },
  {
    __v: 0,
    _id: '5e0d1bc4ebc3c52930ce3707',
    name: 'Hamill - Keebler',
    percentChange: 0.0615,
    price: 18.13,
    rating: 0.55,
    ticker: "FEDC"
  }
]

describe('<App />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should render loading initially', () => {
    fetch.mockResponseOnce(JSON.stringify(response));
    const wrapper = shallow(<App></App>);
    expect(wrapper.find('.pab-loading')).toHaveLength(1);
  });

  it('Should render 4 <Card /> components after network request completes', () => {
    fetch.mockResponseOnce(JSON.stringify(response));
    const wrapper = shallow(<App />);
    wrapper.instance().setState({ isLoading: false });
    expect(wrapper.find(Card)).toHaveLength(4);
    expect(fetch.mock.calls.length).toEqual(1);
  });
});