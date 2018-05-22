'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENT_URL: '"http://localhost:8080',
  SERVER_URL: '"http://localhost:3333"',
  PAYPAL_CLIENT: "'AXa7tZ6EUuladHZ7LeazvYj8DNFNzjIgXtkooGrLB1sjlpZMP6KNfGmKghkwyZia1yafqD6kcmN6tmJA'",
  PAYPAL_MODE: "'sandbox'",
});
