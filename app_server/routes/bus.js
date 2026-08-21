const express = require('express');
const router = express.Router();

const controller = require('../controllers/bus');

router.get('/', controller.getBus);

module.exports = router;