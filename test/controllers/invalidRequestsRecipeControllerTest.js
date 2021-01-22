const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');

const { TooManyIngredientsProvidedError, RecipePuppyEmptyRecipeListError } = require('../../errors/error.js');

chai.should();
chai.use(chaiHttp);

const invalidRequestsRecipeControllerTest = () => {
  describe('GET /recipes/?i=cheese,tomato,chicken,pasta', () => {
    it('should return an error message for having too many ingredients', (done) => {
      chai.request(server)
        .get('/recipes/?i=cheese,tomato,pato,onions')
        .end((error, response) => {
          response.should.have.status(400);
          response.body.message.should.be.eql(new TooManyIngredientsProvidedError().message);
          done();
        });
    });
  });

  describe('GET /recipes/', () => {
    it('should return an error message for having no i query variable', (done) => {
      chai.request(server)
        .get('/recipes/')
        .end((error, response) => {
          response.should.have.status(400);
          response.body.message.should.be.eql('i is a required field');
          done();
        });
    });
  });

  describe('GET /recipes/?i=', () => {
    it('should return an error message for having an empty i query', (done) => {
      chai.request(server)
        .get('/recipes/?i=')
        .end((error, response) => {
          response.should.have.status(400);
          response.body.message.should.be.eql('i is a required field');
          done();
        });
    });
  });

  describe('GET /recipes/?j=', () => {
    it('should return an error message for having the wrong query variable', (done) => {
      chai.request(server)
        .get('/recipes/?j=')
        .end((error, response) => {
          response.should.have.status(400);
          response.body.message.should.be.eql('i is a required field');
          done();
        });
    });
  });

  describe('GET /recipes/?i=nonexistent', () => {
    it('should return a not found message for having an ingredient that does not yield any search results', (done) => {
      chai.request(server)
        .get('/recipes/?i=nonexistent')
        .end((error, response) => {
          response.should.have.status(404);
          response.body.message.should.be.eql(new RecipePuppyEmptyRecipeListError().message);
          done();
        });
    });
  });
};

module.exports = {
  invalidRequestsRecipeControllerTest,
};
