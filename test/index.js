var assert = require('assert')
  , lambda = require('..')
  , sinon = require('sinon')

describe('facebook token verification', function(){
  var context
  beforeEach(() => {
    context = {done: Function.prototype}
    sinon.spy(context, 'done')
  })
  it('returns hub challenge if the tokens match', () => {
    var event = {
      requestContext: {
        resourcePath: '/hello',
        httpMethod: 'GET'
      },
      queryStringParameters: {
        'name': '12345'
      },
      stageVariables: {
        facebookVerifyToken: '12345'
      }
    }
    return lambda.proxyRouter(event, context).then(function(){
      assert.equal(context.done.args.shift().pop().body, 'hello <strong>12345</strong>')
    })
  })
})
