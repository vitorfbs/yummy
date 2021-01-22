const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');

chai.should();
chai.use(chaiHttp);

const invalidRouteTest = () => {
  describe('GET /recipe/', () => {
    it('should return a 404 NOT FOUND status code', (done) => {
      chai.request(server)
        .get('/recipe/')
        .end((error, response) => {
          response.should.have.status(404);

          done();
        });
    });
  });
};

module.exports = {
  invalidRouteTest,
};
