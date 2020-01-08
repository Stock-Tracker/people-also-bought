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

// jest.mock('../client/src/utils.js');
// utils.getPab.mockResolvedValue(response);

describe('<App />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  // turn off lifecycle methods
  // mock the return value of utils.getPab
  // expect the loading to display before the mocked value gets set in state
  // set state
  // expect 4 <Card />s to be rendered

  it('Should return an array of 4 objects', () => {
    fetch.mockResponseOnce(JSON.stringify(response));

    fetch(`${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/people-also-bought/ABCD`)
      .then(res => res.json())
      .then(res => {
        expect(res).toHaveLength(4);
      })

    expect(fetch.mock.calls.length).toEqual(1);
  });

  xit('Should render 4 <Card /> components', async () => {
    // fetch.mockResponseOnce(JSON.stringify(response));
    const wrapper = shallow(<App></App>, { disableLifecycleMethods: true });
    // const wrapper = shallow(<App></App>)
    // wrapper.instance().setState();
    console.log(wrapper.html());
    console.log(wrapper.debug())
    expect(wrapper.find(Card)).toHaveLength(4);
  });

  // some sort of loading if the api call didn't return yet ...
  xit('Should render loading if the api call did not complete yet', () => {
    expect(wrapper.find('.pab-loading')).toHaveLength(1);

    const wrapper = shallow(<App></App>);
    expect(wrapper.find('.pab-loading')).toHaveLength(0);
    expect(wrapper.find(Card)).toHaveLength(4);
  });
});