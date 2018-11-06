const rp = require('request-promise');

const collectData = metric => new Promise((resolve, reject) => {
  const API_DOMAIN = 'https://insights-api.newrelic.com';
  const API_VERSION = 'v1';
  const escapedQuery = escape(metric.query);
  const REQUEST_URL = `${API_DOMAIN}/${API_VERSION}/accounts/${process.env.APP_ID}/query?nrql=${escapedQuery}`;

  const options = {
    url: REQUEST_URL,
    headers: {
      Accept: 'application/json',
      'X-Query-Key': `${process.env.QUERY_KEY}`,
    },
  };

  rp
    .get(options)
    .then((data) => {
      const objectData = JSON.parse(data).results[0];
      const key = Object.keys(objectData)[0];
      metric.chart.set(Number(objectData[key]));
      resolve(objectData[key]);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = {
  collectData,
};
