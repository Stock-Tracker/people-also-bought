const tickers = require('./tickers.js');
const faker = require('faker');
const db = require('../db/index.js');
const mongoose = require('mongoose');
const request = require('request');
const config = require(`../env.config`);

module.exports = {
  seedDatabase() {
    const tickerList = tickers.createTickers();
    const recursiveFn = (tickerList) => {
      if (tickerList.length === 0) {
        console.log(`People Also Bought seeded to database`);
        mongoose.disconnect();
        return;
      }
        const ticker = tickerList.pop();

        this.getPrice(ticker, config.SERVICE_CHART_URL, config.SERVICE_CHART_PORT, (err, price) => {
          if (err) throw err;
          console.log('price: ', price);

          this.getPercentChange(ticker, config.SERVICE_CHART_URL, config.SERVICE_CHART_PORT, (err, percentChange) => {
            if (err) throw err;
            console.log('percentChange: ', percentChange);

            const obj = {
              ticker,
              name: this.generateName(),
              rating: 0.55, // TODO: needs to come from Roman's service
              price,
              percentChange
            };

            db.pabTicker.create(obj, (result) => {
                console.log(`${ticker} seeded to database`);
                recursiveFn(tickerList);
            });
          });
        });
    }
    recursiveFn(tickerList);
  },

  generateName() {
    return faker.company.companyName();
  },

  // TODO: a little WET ...
  getPrice(ticker, url, port, cb) {
    const options = {
      url: `${url}:${port}/current-price/${ticker}`,
      json: true
    };

    request(options, (err, response, body) => {
      if (err) cb(err, null);
      cb(null, body.currentPrice);
    });
  },

  getPercentChange(ticker, url, port, cb) {
    const options = {
      url: `${url}:${port}/percent-change/${ticker}`,
      json: true
    };

    request(options, (err, response, body) => {
      if (err) cb(err, null);
      cb(null, body.percentChange);
    });

  }
};