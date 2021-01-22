const { BAD_REQUEST } = require('http-status');

class RecipePuppyApiError {
  constructor() {
    this.status = BAD_REQUEST;
    this.name = 'RecipePuppyAPIError';
    this.message = 'There was a problem connecting to the Recipe Puppy API. This can either be that the service is temporarily unavailable or there is a problem in the request.';
    this.stack = (new Error()).stack;
  }
}

module.exports = {
  RecipePuppyApiError,
};
