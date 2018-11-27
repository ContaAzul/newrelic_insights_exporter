# newrelic_insights_exporter
Exports new relic insights metrics data as prometheus metrics.

Metrics are exposed according config file inside [src folder](https://github.com/ContaAzul/newrelic_insights_exporter/tree/master/src) and supports [json](https://github.com/ContaAzul/newrelic_insights_exporter/blob/master/src/config.json) and [yaml](https://github.com/ContaAzul/newrelic_insights_exporter/blob/master/src/config.yaml) extension.

## **Building and Running**
You will need [QUERY_KEY](https://docs.newrelic.com/docs/insights/insights-api/get-data/query-insights-event-data-api) and [APP_ID](https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/find-product-id) from new relic account.

### **With docker:**
To run:

```cmd
docker run -p 9696:9696 -e "QUERY_KEY=****" -e "APP_ID=****" caninjas/newrelic_insights_exporter
```

### **From source:**
Clone this repo and go to newrelic_insights_exporter folder:
```cmd
> git clone git@github.com:ContaAzul/newrelic_insights_exporter.git
> cd newrelic_insights_exporter
```

Install dependencies with ```npm install``` command and run with:
```cmd
APP_ID='****' QUERY_KEY='****' npm start
```

Metrics will be exposed in ```localhost:9696/metrics```
