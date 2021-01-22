const { GiphyApiFetchError } = require('./giphyService/giphyApiFetchError.js');
const { GiphyKeyInvalidError } = require('./giphyService/giphyKeyInvalidError.js');
const { TooManyIngredientsProvidedError } = require('./recipeController/tooManyIngredientsProvidedError.js');
const { RecipePuppyApiError } = require('./recipePuppyService/recipePuppyApiError.js');
const { RecipePuppyEmptyRecipeListError } = require('./recipePuppyService/recipePuppyEmptyRecipeListError.js');

module.exports = {
  GiphyApiFetchError,
  GiphyKeyInvalidError,
  TooManyIngredientsProvidedError,
  RecipePuppyApiError,
  RecipePuppyEmptyRecipeListError,
};
