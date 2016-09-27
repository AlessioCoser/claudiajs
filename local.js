'use strict'

var express = require('express');
var api = express();
var routes = require('./routes')
var port = process.env.PORT || 3000;

routes(api)

api.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
