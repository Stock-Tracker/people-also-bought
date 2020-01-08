import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/app.jsx';
import Card from '../client/src/card.jsx';
import config from '../env.config.js';

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

  it('Should return an array of 4 objects', () => {
    fetch.mockResponseOnce(JSON.stringify(response));

    fetch(`${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/people-also-bought/ABCD`)
      .then(res => res.json())
      .then(res => {
        expect(res).toHaveLength(4);
      })

    expect(fetch.mock.calls.length).toEqual(1);
  });

  it('Should render 4 <Card /> components', async () => {
    fetch.mockResponseOnce(JSON.stringify(response));
    const wrapper = shallow(<App></App>)
    wrapper.instance().setState({ isLoading: false }); // TODO: why is this setState call necessary? doesn't the setState call from componentDidMount fire?
    expect(wrapper.find(Card)).toHaveLength(4);
  });

  it('Should render loading if the api call did not complete yet', () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.find('.pab-loading')).toHaveLength(1);
    wrapper.instance().setState({ isLoading: false });
    expect(wrapper.find('.pab-loading')).toHaveLength(0);
    expect(wrapper.find(Card)).toHaveLength(4);
  });
});