'use strict'

var express = require('express');
var api = express();
var routes = require('./routes')

routes(api)

api.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
