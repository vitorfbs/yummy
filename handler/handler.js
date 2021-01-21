const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('http-status');

function onRequestSuccess(response, data) {
  return response.status(OK).json({
    keywords: data.keywords,
    recipes: data.recipes,

  });
}

function onRequestError(response, message) {
  return response.status(BAD_REQUEST).json({
    message,
  });
}

function onInternalServerError(response, message) {
  return response.status(INTERNAL_SERVER_ERROR).json({
    message,
  });
}

module.exports = {
  onRequestSuccess,
  onRequestError,
  onInternalServerError,
};