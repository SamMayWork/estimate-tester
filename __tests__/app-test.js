const supertest = require('supertest')
const app = require('../src/app')

describe('App Tests', () => {
  it('Should return 200 when called on the / route', (done) => {
    supertest(app)
      .get('/')
      .expect(200, done)
  })
})