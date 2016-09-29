'use strict'
var fs = require( 'fs' );
var path = require( 'path' );

var Response = require('./lib/response');

module.exports = function(api) {
  var folder = './routes/';
  fs.readdirSync(folder).forEach( function( file ) {
    var route = require(path.resolve( folder + file ));
    api[route.method](route.path, function(request, response) {
      return route.handler(request, Response(response, api))
    });
  });
}
