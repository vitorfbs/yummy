const { OK, BAD_REQUEST } = require('http-status');

const onRequestSuccess = (response, message, status = OK) => response.status(status).json({
  message,
});

const onRequestError = (response, { message, status = BAD_REQUEST }) => response.status(status).json({
  message,
});

module.exports = {
  onRequestSuccess,
  onRequestError,
};
