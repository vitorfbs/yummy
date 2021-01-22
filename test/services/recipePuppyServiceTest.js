const { getRecipePuppyRecipes } = require('../../services/recipePuppyService.js');

const getRecipePuppyRecipesTest = () => {
  describe('getRecipePuppyRecipes()', () => {
    it('it should return the Giphy API data', async () => {
      const recipes = await getRecipePuppyRecipes('cheese');
      recipes.should.be.a('Array');
      recipes[0].should.be.a('object');
      recipes[0].should.have.property('title');
      recipes[0].should.have.property('ingredients');
      recipes[0].should.have.property('href');
    });
  });

  describe('getRecipePuppyRecipes()', () => {
    it('should return an open selection of recipes since there were no ingredients provided', async () => {
      const recipes = await getRecipePuppyRecipes('');
      recipes.should.be.a('Array');
      recipes[0].should.be.a('Object');
      recipes[0].should.have.property('title');
      recipes[0].should.have.property('ingredients');
      recipes[0].should.have.property('href');
    });
  });
};

module.exports = {
  getRecipePuppyRecipesTest,
};
