function GiphyKeyInvalidError() {
  this.name = 'GiphyKeyInvalidError';
  this.message = 'There is no valid Giphy API Key provided. This could either be a problem in accessing the environment variable or a problem in the provided key.';
  this.stack = (new Error()).stack;
}
GiphyKeyInvalidError.prototype = new Error();

function GiphyApiFetchError() {
  this.name = 'GiphyApiFetchError';
  this.message = 'There was a problem connecting to the Giphy API. This can either mean the API isnt\'t available or there is a problem in the URL provided.';
  this.stack = (new Error()).stack;
}
GiphyApiFetchError.prototype = new Error();

module.exports = {
  GiphyKeyInvalidError,
  GiphyApiFetchError,
};
