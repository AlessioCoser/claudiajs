'use strict'

var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

var index = require('./routes/index')
var hello = require('./routes/hello')

module.exports = api;

api.get('/', index);
api.get('/hello', hello);

