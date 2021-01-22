const chai = require('chai');
const chaiHttp = require('chai-http');

require('dotenv').config();

const should = chai.should();
const host = 'http://localhost:4567';

chai.use(chaiHttp);

function recipeTests(host) {
  describe('GET /recipes/?i=cheese', () => {
    it('should return recipes', (done) => {
      chai.request(host)
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
      chai.request(host)
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
      chai.request(host)
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

  describe('GET /recipes/?i=cheese,tomato,chicken,pasta', () => {
    it('should return an error message for having too many ingredients', (done) => {
      chai.request(host)
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
      chai.request(host)
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
      chai.request(host)
        .get('/recipes/?i=nonexistent')
        .end((error, response) => {
          response.should.have.status(404);
          response.body.message.should.be.eql('The searched ingredients have retrieved no results. Please try with other ingredients.');
          done();
        });
    });
  });
}

recipeTests(host);

module.exports = {
  recipeTests,
};
