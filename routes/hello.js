'use strict'

var handler = function(request, response) {
  let name = request.queryString.name || "mondo";

  return response.send('hello <strong>' + name + '</strong>', 'text/html', 200)
}

module.exports = {
  method: 'get',
  path: "/hello",
  handler: handler
}
