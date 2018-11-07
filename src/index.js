const Server = require('./app/server');
const router = require('./app/router');

Server.route(router);
Server.start();
