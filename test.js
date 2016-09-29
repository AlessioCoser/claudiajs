var underTest = require('./app.js');

describe('Facebook token verification', () => {
  var lambdaContextSpy;

  beforeEach(() => {
    lambdaContextSpy = jasmine.createSpyObj('lambdaContext', ['done']);
  });

  it('returns hub challenge if the tokens match', (done) => {
    underTest.proxyRouter({
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
    }, lambdaContextSpy).then(() => {
      expect(lambdaContextSpy.done)
      .toHaveBeenCalledWith(null, jasmine.objectContaining({body:'hello <strong>12345</strong>'}));
    })
    .then(done, done.fail);
  });
});
