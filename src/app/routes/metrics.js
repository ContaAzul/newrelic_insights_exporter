const { register } = require('prom-client');
const newRelicPlugin = require('../../plugins/newrelic_insights/prepare-metrics');

const metrics = (req, res) => {
  res.set('Content-Type', register.contentType);
  newRelicPlugin.collectData().then(() => {
    res.end(register.metrics());
  });
};

module.exports = metrics;
