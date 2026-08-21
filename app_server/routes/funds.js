const express = require('express');
const router = express.Router();

const controller = require('../controllers/funds');

router.get('/', controller.getFunds);

module.exports = router;