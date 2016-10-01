var proxyRouter = require.main.require(process.env.npm_package_main).proxyRouter
  , querystring = require('querystring')

module.exports.get = function(path){
  var slices = path.split(/\?/g)
    , resourcePath = slices.shift()
    , queryStringParameters = querystring.parse(slices.pop())
  var err
    , res
    , context = {done: function(e, r){ return err = e, res = r}}
  return proxyRouter({
    requestContext: {
      resourcePath: resourcePath,
      httpMethod: 'GET'
    },
    queryStringParameters: queryStringParameters
  }, context).then(function(){
    return err ? Promise.reject(err) : Promise.resolve(res)
  })
}

;['head', 'post', 'put', 'delete'].forEach(function(verb){
  module.exports[verb] = Function.prototype
})
