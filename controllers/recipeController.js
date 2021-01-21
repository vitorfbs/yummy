const handler = require('../handler/handler.js');
const { getRecipePuppyRecipes } = require('../services/recipePuppyService.js');
const { getRecipeGiphyURL } = require('../services/giphyService.js');

async function getRecipes(request, response) {
  try {
    const { i } = request.query;

    const ingredients = i.split(',');

    const recipes = await getRecipePuppyRecipes(ingredients);

    const data = [];
    data.keywords = ingredients;
    data.recipes = [];

    await Promise.all(recipes.map(async (recipe) => {
      const giphyURL = await await getRecipeGiphyURL(recipe.title);
      data.recipes.push({
        title: recipe.title.trim(),
        ingredients: recipe.ingredients.split(', ').sort(),
        link: recipe.href,
        gif: giphyURL,
      });
    }));

    return handler.onRequestSuccess(response, data);
  } catch (error) {
    return handler.onInternalServerError(response, 'The server was not able to process your request. Please try again later.');
  }
}

module.exports = {
  getRecipes,
};
