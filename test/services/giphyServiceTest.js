const { getRecipeGiphyURL } = require('../../services/giphyService.js');

const getRecipeGiphyURLTest = () => {
  describe('getRecipeGiphyURL()', () => {
    it('it should return the Giphy API data', async () => {
      const giphy = await getRecipeGiphyURL('cheese');
      giphy.meta.status.should.be.eql(200);
      giphy.data.should.be.a('array');
    });
  });

  describe('getRecipeGiphyURL()', () => {
    it('it should return an empty data key', async () => {
      const giphy = await getRecipeGiphyURL('');
      giphy.meta.status.should.be.eql(200);
      giphy.data.should.be.eql([]);
    });
  });
};

module.exports = {
  getRecipeGiphyURLTest,
};
