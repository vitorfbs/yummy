function TooManyIngredientsProvidedError() {
  this.name = 'TooManyIngredientsProvidedError';
  this.message = 'You have provided too many ingredients. Please provide a maximum of 3 ingredients, and a minimum of 1.';
  this.stack = (new Error()).stack;
}
TooManyIngredientsProvidedError.prototype = new Error();

module.exports = {
  TooManyIngredientsProvidedError,
};
