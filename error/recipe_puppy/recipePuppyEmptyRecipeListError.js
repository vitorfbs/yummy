const { NOT_FOUND } = require('http-status');

class RecipePuppyEmptyRecipeListError {
  constructor() {
    this.status = NOT_FOUND;
    this.name = 'RecipePuppyEmptyRecipeListError';
    this.message = 'The searched ingredients have retrieved no results. Please try with other ingredients.';
    this.stack = (new Error()).stack;
  }
}

module.exports = {
  RecipePuppyEmptyRecipeListError,
};
