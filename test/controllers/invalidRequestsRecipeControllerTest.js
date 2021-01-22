const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');

chai.use(require('chai-json-schema'));

chai.should();
chai.use(chaiHttp);

const invalidRequestsRecipeControllerTest = () => {
  describe('GET /recipes/?i=cheese,tomato,chicken,pasta', () => {
    it('should return an error message for having too many ingredients', (done) => {
      chai.request(server)
        .get('/recipes/?i=cheese,tomato,pato,onions')
        .end((error, response) => {
          response.should.have.status(400);
          response.body.message.should.be.eql('You have provided too many ingredients. Please provide a maximum of 3 ingredients, and a minimum of 1.');
          done();
        });
    });
  });

  describe('GET', () => {
    it('should return an error message for having no ingredients', (done) => {
      chai.request(server)
        .get('/recipes/')
        .end((error, response) => {
          response.should.have.status(400);
          response.body.message.should.be.eql('i is a required field');
          done();
        });
    });
  });

  describe('GET', () => {
    it('should return a not found message', (done) => {
      chai.request(server)
        .get('/recipes/?i=nonexistent')
        .end((error, response) => {
          response.should.have.status(404);
          response.body.message.should.be.eql('The searched ingredients have retrieved no results. Please try with other ingredients.');
          done();
        });
    });
  });
};

module.exports = {
  invalidRequestsRecipeControllerTest,
};
