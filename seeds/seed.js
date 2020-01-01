const tickers = require('./tickers.js');
const faker = require('faker');
const db = require('../db/index.js');
const mongoose = require('mongoose');

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
        const obj = {
          ticker,
          name: this.generateName(),
          rating: 0.55, // TODO: needs to come from Roman's service
          // TODO: get these two from my Price service
          price: 134,
          percentChange: 0.0005

        };
        db.pabTicker.create(obj, (result) => {
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