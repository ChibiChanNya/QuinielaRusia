'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENT_URL: '"http://localhost:8080',
  SERVER_URL: '"http://localhost:3333"'
});
