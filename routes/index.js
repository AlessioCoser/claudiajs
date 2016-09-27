'use strict'

var Request = require('../lib/request');
var Response = require('../lib/response');

module.exports = function(api) {
  return function(request, response) {
    let req = Request(request);
    let res = Response(response, api);

    return res.send('hello world');
  }
}
