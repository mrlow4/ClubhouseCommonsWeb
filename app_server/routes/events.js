const express = require('express');
const router = express.Router();

const controller = require('../controllers/events');

router.get('/', controller.getEvents);

module.exports = router;