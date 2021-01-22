function RecipePuppyApiError() {
  this.name = 'RecipePuppyAPIError';
  this.message = 'There was a problem connecting to the Recipe Puppy API. This can either be that the service is temporarily unavailable or there is a problem in the request.';
  this.stack = (new Error()).stack;
}
RecipePuppyApiError.prototype = new Error();

function RecipePuppyEmptyRecipeListError() {
  this.name = 'RecipePuppyEmptyRecipeListError';
  this.message = 'The searched ingredients have retrieved no results. Please try with other ingredients.';
  this.stack = (new Error()).stack;
}
RecipePuppyEmptyRecipeListError.prototype = new Error();

module.exports = {
  RecipePuppyApiError,
  RecipePuppyEmptyRecipeListError,
};
