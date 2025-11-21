const request = require('supertest');
const express = require('express');
const messageRoutes = require('../../routes/messageRoutes');

const app = express();
app.use(express.json());
app.use('/api', messageRoutes);

describe('E2E: Mensajes API', () => {
  it('puede crear y obtener un mensaje', async () => {
    const resPost = await request(app)
      .post('/api/messages')
      .send({ text: 'Mensaje E2E' });
    expect(resPost.statusCode).toBe(201);
    expect(resPost.body.text).toBe('Mensaje E2E');

    const resGet = await request(app).get('/api/messages/' + resPost.body.id);
    expect(resGet.statusCode).toBe(200);
    expect(resGet.body.text).toBe('Mensaje E2E');
  });
});
