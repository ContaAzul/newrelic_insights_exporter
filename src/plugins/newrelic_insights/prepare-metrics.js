const apiRequest = require('./api-request');
const prometheusPlugin = require('../prometheus/metric-type');
const extractor = require('../../helpers/extract-file-data');

let metrics = [];

const collectData = () => new Promise((resolve, reject) => {
  if (!metrics.length) {
    try {
      const fileMetrics = extractor.getFromFile();
      metrics = prometheusPlugin.createCharts(fileMetrics);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
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
