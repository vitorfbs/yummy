const { GiphyApiFetchError } = require('./giphyServiceError/giphyApiFetchError.js');
const { GiphyKeyInvalidError } = require('./giphyServiceError/giphyKeyInvalidError.js');
const { TooManyIngredientsProvidedError } = require('./recipeControllerError/tooManyIngredientsProvidedError.js');
const { RecipePuppyApiError } = require('./recipePuppyServiceError/recipePuppyApiError.js');
const { RecipePuppyEmptyRecipeListError } = require('./recipePuppyServiceError/recipePuppyEmptyRecipeListError.js');

module.exports = {
  GiphyApiFetchError,
  GiphyKeyInvalidError,
  TooManyIngredientsProvidedError,
  RecipePuppyApiError,
  RecipePuppyEmptyRecipeListError,
};
