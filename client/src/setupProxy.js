const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/', { target: 'https://todos-and-notes-app-server.herokuapp.com' }));
};
