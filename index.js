'use strict'

var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();
var routes = require('./routes')

module.exports = api;

routes(api)

