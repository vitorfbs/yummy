const { BAD_REQUEST } = require('http-status');

class GiphyApiFetchError {
  constructor() {
    this.status = BAD_REQUEST;
    this.name = 'GiphyApiFetchError';
    this.message = 'There was a problem connecting to the Giphy API. This can either mean the API isnt\'t available or there is a problem in the URL provided.';
    this.stack = (new Error()).stack;
  }
}

module.exports = {
  GiphyApiFetchError,
};
