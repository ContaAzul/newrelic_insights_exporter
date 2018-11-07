const express = require('express');

function Server() {
  const app = express();
  const port = process.env.PORT || 9696;

  return {
    route: (router) => {
      app.use('/', router);
    },

    start: () => {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    },
  };
}

module.exports = new Server();
