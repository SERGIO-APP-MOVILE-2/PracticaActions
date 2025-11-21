const messages = [
  { id: 1, text: 'Bienvenido a la API', createdAt: new Date().toISOString() },
  { id: 2, text: 'Mensaje inicial de ejemplo', createdAt: new Date().toISOString() },
  { id: 3, text: '¡Nuevo mensaje agregado!', createdAt: new Date().toISOString() }
];

function getLastMessage() {
  return messages[messages.length - 1];
}

module.exports = { messages, getLastMessage };
