const { UNAUTHORIZED } = require('http-status');

class GiphyKeyInvalidError {
  constructor() {
    this.status = UNAUTHORIZED;
    this.name = 'GiphyKeyInvalidError';
    this.message = 'There is no valid Giphy API Key provided. This could either be a problem in accessing the environment variable or a problem in the provided key.';
    this.stack = (new Error()).stack;
  }
}

module.exports = {
  GiphyKeyInvalidError,
};
