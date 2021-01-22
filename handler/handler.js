const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('http-status');

const onRequestSuccess = (response, message) => response.status(OK).json({
  message,
});

const onRequestError = (response, { message }) => response.status(BAD_REQUEST).json({
  message,
});

const onInternalServerError = (response, { message }) => response.status(INTERNAL_SERVER_ERROR).json({
  message,
});

module.exports = {
  onRequestSuccess,
  onRequestError,
  onInternalServerError,
};