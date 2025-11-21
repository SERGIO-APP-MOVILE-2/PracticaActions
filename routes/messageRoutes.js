const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');

router.get('/messages', controller.listMessages);
router.get('/messages/:id', controller.getMessage);
router.post('/messages', controller.createMessage);
router.delete('/messages/:id', controller.deleteMessage);

module.exports = router;
