'use strict'

var index = require('./routes/index')
var hello = require('./routes/hello')

module.exports = function(api) {
  api.get('/', index(api));
  api.get('/hello', hello(api));
}
