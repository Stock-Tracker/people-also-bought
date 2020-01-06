const config = require('../../env.config.js');

module.exports = {
  /**
   *
   * Network request which gets the pab information for a given ticker
   * @param {STRING} ticker - The stock ticker to get people also bought info for
   * @returns {PROMISE} pab - A promise which resolves with an array of objects, with the shape of sampledata/pab.js
   */
  async getPab(ticker) {
    try {
      pab = await fetch(`${config.SERVICE_PEOPLE_ALSO_BOUGHT_URL}:${config.SERVICE_PEOPLE_ALSO_BOUGHT_PORT}/people-also-bought/${ticker}`);
      pab = await pab.json();
      return pab;
    } catch(e) {
      throw new Error(e);
    }
  }
}