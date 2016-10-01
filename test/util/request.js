var proxyRouter = require.main.require(process.env.npm_package_main).proxyRouter
  , querystring = require('querystring')
  , spy = require('sinon').spy

module.exports.get = function(path){
  var context
    , slices = path.split(/\?/g)
    , resourcePath = slices.shift()
    , queryStringParameters = querystring.parse(slices.pop())
  return proxyRouter({
    requestContext: {
      resourcePath: resourcePath,
      httpMethod: 'GET'
    },
    queryStringParameters: queryStringParameters
  }, context = {
    done: spy()
  }).then(function(){
    if (context.done.lastCall.args[0]) // err
      return Promise.reject(context.done.lastCall.args[0])
    return context.done.lastCall.args[1] // res
  })
}

;['head', 'post', 'put', 'delete'].forEach(function(verb){
  module.exports[verb] = Function.prototype
})
