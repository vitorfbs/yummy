var chai = require('chai');
var chaiHttp = require('chai-http');

let should = chai.should();
let host = "http://localhost:4567";

chai.use(chaiHttp);

function recipeTests(host) {

  describe('/GET /recipes/i=onion', () => {
    it('should return recipes', (done) => {
      chai.request(host)
          .get('/recipes/i=onion')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.title.should.be.a('String');
                response.body.keywords.should.be.a('Array');
                response.body.keywords.should.be.eql(["onion"]);
                response.body.recipes.should.be.a('Array');
            done();
          });
    });
  });

  describe('/GET /recipes/i=onion,tomato', () => {
    it('should return recipes', (done) => {
      chai.request(host)
          .get('/recipes/i=onion,tomato')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.title.should.be.a('String');
                response.body.keywords.should.be.a('Array');
                response.body.keywords.should.be.eql(["onion","tomato"]);
                response.body.recipes.should.be.a('Array');
            done();
          });
    });
  });

  describe('/GET /recipes/i=onion,tomato,chicken', () => {
    it('should return recipes', (done) => {
      chai.request(host)
          .get('/recipes/i=onion,tomato')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.title.should.be.a('String');
                response.body.keywords.should.be.a('Array');
                response.body.keywords.should.be.eql(["onion","tomato","chicken"]);
                response.body.recipes.should.be.a('Array');
            done();
          });
    });
  });

  describe('/GET /recipes/i=onion,tomato,chicken,pasta', () => {
    it('should return an error message for having too many ingredients', (done) => {
      chai.request(host)
          .get('/recipes/i=onion,tomato')
          .end((error, response) => {
                response.should.have.status(400);
                response.body.message.should.be.eql("Too many ingredients provided. please provide only a maximum of 3 ingredients.");
            done();
          });
    });
  });

  describe('/GET', () => {
    it('should return an error message for having no ingredients', (done) => {
      chai.request(host)
          .get('/recipes/')
          .end((error, response) => {
                response.should.have.status(400);
                response.body.message.should.be.eql("No ingredients provided. please at least 1 ingredient.");
            done();
          });
    });
  });

  describe('/GET', () => {
    it('should return an empty recipe list', (done) => {
      chai.request(host)
          .get('/recipes/i=nonexistent')
          .end((error, response) => {
                response.should.have.status(200);
                response.body.title.should.be.a('String');
                response.body.keywords.should.be.a('Array');
                response.body.keywords.should.be.eql(["onion","tomato","chicken"]);
                recipes_array_length = response.body.recipes.length;
                recipes_array_length.should.be.eql(0);
            done();
          });
    });
  });
}

recipeTests(host);

module.exports = {
  recipeTests
};