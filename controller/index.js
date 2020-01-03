const db = require('../db/index.js');

// TODO: add tests
module.exports = {
  getPab(req, res, next) {
    db.pabTicker.find({}, (err, docs) => {
      if (err) {
        console.log(err);
        res.send(err);
      }

      const mySet = new Set();
      const pab = [];

      while (mySet.size < 4) {
        mySet.add(Math.floor(Math.random() * 100));
      }

      mySet.forEach(num => {
        pab.push(docs[num]);
      });

      res.send(pab);
    });
  }
};