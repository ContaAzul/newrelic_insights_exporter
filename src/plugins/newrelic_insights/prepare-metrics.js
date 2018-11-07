const fs = require('fs');
const apiRequest = require('./api-request');
const prometheusPlugin = require('../prometheus/metric-type');

let metrics = [];

const collectData = () => new Promise((resolve, reject) => {
  if (!metrics.length) {
    metrics = prometheusPlugin.createCharts(JSON.parse(fs.readFileSync('src/config.txt', 'utf8')));
  }

  Promise.all(metrics.map(item => apiRequest.collectData(item)))
    .then(() => {
      resolve();
    })
    .catch(reject);
});

module.exports = {
  collectData,
};
