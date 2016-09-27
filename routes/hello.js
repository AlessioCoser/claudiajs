'use strict'

module.exports = function(request) {
  let name = request.queryString.name || "mondo";
  return 'hello ' + name;
}
