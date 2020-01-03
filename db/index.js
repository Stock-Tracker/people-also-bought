require('dotenv').config();
const mongoose = require('mongoose');
const config = require('../env.config.js');
console.log('config: ', config);

mongoose.connect(`${config.DATABASE_URL}/${config.DATABASE_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('db connected'));

const pabTickerSchema = new mongoose.Schema({
  ticker: String,
  name: String,
  rating: Number,
  price: Number,
  percentChange: Number
});

const pabTicker = mongoose.model('pabTicker', pabTickerSchema);

const dropAll = () => {
  return pabTicker.deleteMany({});
}

module.exports = { db, pabTicker, dropAll };