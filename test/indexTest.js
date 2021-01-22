const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');

chai.should();
chai.use(chaiHttp);

const indexTest = () => {
  describe('GET /', () => {
    it('should return a 200 OK status code', (done) => {
      chai.request(server)
        .get('/')
        .end((error, response) => {
          response.should.have.status(200);

          done();
        });
    });
  });
};

module.exports = {
  indexTest,
};
