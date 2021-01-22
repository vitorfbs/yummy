const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');

chai.use(require('chai-json-schema'));

chai.should();
chai.use(chaiHttp);

const validRequestsRecipeControllerTest = () => {
  describe('GET /recipes/?i=cheese', () => {
    it('should return recipes', (done) => {
      chai.request(server)
        .get('/recipes/?i=cheese')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.message.keywords.should.be.a('Array');
          response.body.message.keywords.should.be.eql(['cheese']);
          response.body.message.recipes.should.be.a('Array');
          done();
        });
    });
  });

  describe('GET /recipes/?i=cheese,tomato', () => {
    it('should return recipes', (done) => {
      chai.request(server)
        .get('/recipes/?i=cheese,tomato')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.message.keywords.should.be.a('Array');
          response.body.message.keywords.should.be.eql(['cheese', 'tomato']);
          response.body.message.recipes.should.be.a('Array');
          done();
        });
    });
  });

  describe('GET /recipes/?i=cheese,tomato,chicken', () => {
    it('should return recipes', (done) => {
      chai.request(server)
        .get('/recipes/?i=cheese,tomato,chicken')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.message.keywords.should.be.a('Array');
          response.body.message.keywords.should.be.eql(['cheese', 'tomato', 'chicken']);
          response.body.message.recipes.should.be.a('Array');
          done();
        });
    });
  });
};

module.exports = {
  validRequestsRecipeControllerTest,
};
