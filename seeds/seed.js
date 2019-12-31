const tickers = require('./tickers.js');
const faker = require('faker');
const db = require('../db/index.js');
const mongoose = require('mongoose');

module.exports = {
  seedDatabase() {
    const tickerList = tickers.createTickers();
    const recursiveFn = (tickerList) => {
      if (tickerList.length === 0) {
        console.log(`Prices seeded to database`);
        mongoose.disconnect();
        return;
      }
        const ticker = tickerList.pop();
        const obj = {
          ticker,
          name: this.generateName(),

        };
        db.Ticker.create(obj, (result) => {
            console.log(`${ticker} seeded to database`);
            recursiveFn(tickerList);
        });
    }
    recursiveFn(tickerList);
  },

  generateName() {
    return faker.company.companyName();
  }
};