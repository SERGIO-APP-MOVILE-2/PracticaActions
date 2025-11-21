const { messages } = require('../constants/messages');

let nextId = messages.length + 1;

function listMessages(req, res) {
  res.json(messages);
}

function getMessage(req, res) {
  const id = parseInt(req.params.id, 10);
  const msg = messages.find(m => m.id === id);
  if (!msg) return res.status(404).json({ error: 'No encontrado' });
  res.json(msg);
}

function createMessage(req, res) {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Campo "text" requerido' });
  }
  const newMsg = { id: nextId++, text, createdAt: new Date().toISOString() };
  messages.push(newMsg);
  res.status(201).json(newMsg);
}

function deleteMessage(req, res) {
  const id = parseInt(req.params.id, 10);
  const idx = messages.findIndex(m => m.id === id);
  if (idx === -1) return res.status(404).json({ error: 'No encontrado' });
  const removed = messages.splice(idx, 1)[0];
  res.json(removed);
}

function updateMessage(req, res) {
  const id = parseInt(req.params.id, 10);
  const { text } = req.body;
  const msg = messages.find(m => m.id === id);
  if (!msg) return res.status(404).json({ error: 'No encontrado' });
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Campo "text" requerido' });
  }
  msg.text = text;
  msg.updatedAt = new Date().toISOString();
  res.json(msg);
}

module.exports = { listMessages, getMessage, createMessage, deleteMessage, updateMessage };
