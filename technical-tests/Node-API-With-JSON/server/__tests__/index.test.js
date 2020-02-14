const expect = require('expect');
const request = require('supertest');

const app = require('../index.js');

describe('GET /conditions', () => {
    it('Given_Request_When_Called_Then_Results_Returned', async () => {
        const res = await request(app)
        .get('/api/conditions')
        .send()
        expect(200)
        expect(res.body).toBeDefined();
      })
});
