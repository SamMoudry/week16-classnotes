let app = require('../server.js')
let testServer = require('supertest');

describe('Test the user router, root path GET', () => {
    test('when no logged in we get a 403 status', async () => {
        const response = await testServer(app).get('/api/user');
        expect( response.statusCode ).toBe(403);
    })

    test('when logged in, we get back the logged in user & 200 status', async () => {
        let agent = testServer.agent(app);
        
        
        const response = await agent.post('/api/user/login')
                .send({username: 'mary', password: '1234'});
    })
})