'use strict'

var express = require('express');
var api = express();

var index = require('./routes/index')
var hello = require('./routes/hello')

api.get('/', index(api));
api.get('/hello', hello(api));


api.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
