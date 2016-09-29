module.exports = function(response, api) {

  var send = function(value, content_type, status_code) {
    status_code = status_code || 200
    content_type = content_type || 'application/json'

    return new api.ApiResponse(value, {'X-Version': status_code, 'Content-Type': content_type}, status_code);
  }

  return {
    send: send
  };
}
