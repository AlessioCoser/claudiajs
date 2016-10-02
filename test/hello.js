describe('/hello', function(){

  var equal = require('assert').equal
  var get = require('./util/request').get

  it('print personalized hello message', function(){
    return get('/hello?name=John').then(function(res){
      equal(res.statusCode, 200)
      equal(res.body, 'hello <strong>John</strong>')
    })
  })
})
