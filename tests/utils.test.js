import utils from '../client/src/utils.js';

describe('utils', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

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

  it('Should return an array of 4 objects', () => {
    fetch.mockResponseOnce(JSON.stringify(response));

    utils.getPab('ABCD')
      .then(res => {
        expect(res.data).toHaveLength(4);
      });

    expect(fetch.mock.calls.length).toEqual(1);
  });

  it('Should throw an error if ticker is not a string ', async () => {
    await expect(utils.getPab(14)).rejects.toThrow();
  });
});