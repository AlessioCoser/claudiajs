'use strict'

var handler = function(request, response) {
  return response.send('hello world');
}

module.exports = {
  method: 'get',
  path: "/",
  handler: handler
}

