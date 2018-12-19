const client = require('prom-client');

const createCharts = (data) => {
  let index = 0;
  const metrics = [];
  const EXPORTER_PREFIX = 'newrelic_insights_';
  data.forEach((element) => {
    if (element.type === 'gauge') {
      metrics[index] = {
        chart: new client.Gauge({
          name: EXPORTER_PREFIX + element.name,
          help: element.help,
        }),
        query: element.query,
      };
      index += 1;
    } else if (element.type === 'counter') {
      metrics[index] = {
        chart: new client.Counter({
          name: EXPORTER_PREFIX + element.name,
          help: element.help,
        }),
        query: element.query,
      };
      index += 1;
    }
  });
  return metrics;
};

module.exports = {
  createCharts,
};
