const request = require('supertest');
const express = require('express');
const messageRoutes = require('../../routes/messageRoutes');

const app = express();
app.use(express.json());
app.use('/api', messageRoutes);

describe('GET /api/messages', () => {
  it('should return all messages', async () => {
    const res = await request(app).get('/api/messages');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
