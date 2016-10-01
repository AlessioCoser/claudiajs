describe('/', function(){

  var equal = require('assert').equal
  var get = require('./util/request').get

  it('responds with a `hello world` string', function(){
    return get('/').then(function(res){
      equal(res.statusCode, 200)
      equal(res.body, '"hello world"')
    })
  })
  it('fails for non recognized urls', function(){
    return get('/foo/*/bar').catch(function(err){
      equal(err, 'no handler for GET /foo/*/bar')
    })
  })
})
