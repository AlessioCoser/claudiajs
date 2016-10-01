describe('/hello', function(){

  var equal = require('assert').equal
  var get = require('./util/request').get

  it('handles facebook auth token', function(){
    return get('/hello?name=12345').then(function(res){
      equal(res.statusCode, 200)
      equal(res.body, 'hello <strong>12345</strong>')
    })
  })
})
