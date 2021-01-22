const handler = require('../handlers/handler.js');
const { getRecipePuppyRecipes } = require('../services/recipePuppyService.js');
const { getRecipeGiphyURL } = require('../services/giphyService.js');
const { TooManyIngredientsProvidedError } = require('../errors/recipe/tooManyIngredientsProvidedError.js');
const { RecipePuppyEmptyRecipeListError } = require('../errors/recipe_puppy/recipePuppyEmptyRecipeListError.js');

async function getRecipes(request, response) {
  try {
    const { i } = request.query;

    const ingredients = i.split(',');

    if (ingredients.length > 3) {
      throw new TooManyIngredientsProvidedError();
    }

    const recipes = await getRecipePuppyRecipes(ingredients);

    if (recipes <= 0) {
      throw new RecipePuppyEmptyRecipeListError();
    }

    const data = {};

    data.keywords = ingredients;
    data.recipes = [];

    await Promise.all(recipes.map(async (recipe) => {
      const giphy = await await getRecipeGiphyURL(recipe.title);
      data.recipes.push({
        title: recipe.title.trim(),
        ingredients: recipe.ingredients.split(', ').sort(),
        link: recipe.href,
        gif: giphy.data[0] ? giphy.data[0].url : '',
      });
    }));

    return handler.onRequestSuccess(response, data);
  } catch (error) {
    return handler.onRequestError(response, error);
  }
}

module.exports = {
  getRecipes,
};
