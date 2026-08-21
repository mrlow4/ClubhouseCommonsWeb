const express = require('express');
const router = express.Router();

const controller = require('../controllers/cafe');

router.get('/', controller.getCafe);

module.exports = router;