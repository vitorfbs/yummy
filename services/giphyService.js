const fetch = require('node-fetch');

const { GiphyApiFetchError } = require('../error/giphy/giphyApiFetchError.js');
const { GiphyKeyInvalidError } = require('../error/giphy/giphyKeyInvalidError.js');

const getRecipeGiphyURL = async (text) => {
  if (!process.env.GIPHY_API_KEY) {
    throw new GiphyKeyInvalidError();
  }

  try {
    const response = await fetch(`${process.env.GIPHY_HOST}/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${text}&limit=1&rating=${process.env.GIPHY_CONTENT_RATING}`);
    const results = await response.json();
    return results;
  } catch (e) {
    throw new GiphyApiFetchError();
  }
};

module.exports = {
  getRecipeGiphyURL,
};
