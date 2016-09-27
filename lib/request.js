module.exports = function(request) {
  if(request.query) {
    request.queryString = request.query;
  }

  return request;
}
