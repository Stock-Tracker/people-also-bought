let obj = {
  DATABASE_URL: 'mongodb://localhost',
  DATABASE_NAME: `robinhood-pab`,
  SERVICE_PEOPLE_ALSO_BOUGHT_PORT: `4550`,
  SERVICE_PEOPLE_ALSO_BOUGHT_URL: `http://localhost`,
  SERVICE_CHART_PORT: `4444`,
  SERVICE_CHART_URL: `http://localhost`,
};

if (process.env.NODE_ENV === 'production') {
  obj = Object.assign({}, obj, {
    DATABASE_URL: 'mongodb://database',
    SERVICE_PEOPLE_ALSO_BOUGHT_URL: process.env.SERVICE_PEOPLE_ALSO_BOUGHT_URL,
    SERVICE_CHART_URL: process.env.SERVICE_CHART_URL
  });
}

module.exports = obj;

