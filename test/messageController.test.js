const { listMessages } = require('../controllers/messageController');
const { messages } = require('../constants/messages');

describe('listMessages', () => {
  it('should return all messages', () => {
    // Simula req y res
    const req = {};
    const res = { json: jest.fn() };
    listMessages(req, res);
    expect(res.json).toHaveBeenCalledWith(messages);
  });
});
