const fetch = require('node-fetch');

const getRecipePuppyRecipes = async (ingredients) => {
  try {
    const response = await fetch(`${process.env.RECIPE_PUPPY_HOST}/?i=${ingredients}`);
    const recipes = await response.json();
    return recipes.results;
  } catch (e) {
    throw new Error();
  }
};

module.exports = {
  getRecipePuppyRecipes,
};
