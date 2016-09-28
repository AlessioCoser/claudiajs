'use strict'
var fs = require( 'fs' );
var path = require( 'path' );

var Request = require('./lib/request');
var Response = require('./lib/response');

module.exports = function(api) {
  var folder = './routes/';
  fs.readdirSync(folder).forEach( function( file ) {
    var route = require(path.resolve( folder + file ));
    api[route.method](route.path, function(request, response) {
      let req = Request(request);
      let res = Response(response, api);
      return route.handler(req, res)
    });
  });
}
