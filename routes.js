'use strict'
var fs = require( 'fs' );
var path = require( 'path' );

module.exports = function(api) {
  var folder = './routes/';
  fs.readdirSync(folder).forEach( function( file ) {
    var route = require(path.resolve( folder + file ));
    api[route.method](route.path, route.handler(api));
  });
}
