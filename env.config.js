let obj = {
  DATABASE_NAME: 'robinhood-pab',
  DATABASE_URL: `mongodb://localhost`,
  SERVICE_PEOPLE_ALSO_BOUGHT_PORT: `4550`,
  SERVICE_PEOPLE_ALSO_BOUGHT_URL: `http://localhost`,
  SERVICE_CHART_PORT: `4444`,
  SERVICE_CHART_URL: `http://localhost`,
};

if (process.env.NODE_ENV === 'production') {
  obj = Object.assign({}, obj, {
    DATABASE_URL: 'mongodb://database',
    // the client will the get deployed url from the browser, as it's running
    SERVICE_PEOPLE_ALSO_BOUGHT_URL: null,
    SERVICE_CHART_URL: null
  });
}

module.exports = obj;