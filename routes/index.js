'use strict'

var Request = require('../lib/request');
var Response = require('../lib/response');

var handler = function(api) {
  return function(request, response) {
    let req = Request(request);
    let res = Response(response, api);

    return res.send('hello world');
  }
}

module.exports = {
  method: 'get',
  path: "/",
  handler: handler
}

