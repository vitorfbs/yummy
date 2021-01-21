const fetch = require('node-fetch');

const getRecipeGiphyURL = async (text) => {
  try {
    const response = await fetch(`${process.env.GIPHY_HOST}/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${text}&limit=1&rating=${process.env.GIPHY_CONTENT_RATING}`);
    const results = await response.json();
    return results.data[0].url;
  } catch (e) {
    return new Error('error');
  }
};

module.exports = {
  getRecipeGiphyURL,
};